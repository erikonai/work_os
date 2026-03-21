import type { PersonaId, FeedItem, Leader } from "@/types";
import { LEADER_REGISTRY } from "./personas";

const SCRAPE_SOURCES = {
  twitter: (handle: string) =>
    `https://nitter.net/${handle}/rss` as const,
  google_news: (query: string) =>
    `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en` as const,
};

// Generate a content hash for deduplication
export async function hashContent(content: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(content.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Parse RSS XML into items (lightweight, no external dep)
function parseRssItems(xml: string): Array<{ title: string; link: string; description: string; pubDate: string }> {
  const items: Array<{ title: string; link: string; description: string; pubDate: string }> = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const getText = (tag: string) => {
      const m = block.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, "s"));
      return m ? m[1].trim() : "";
    };
    items.push({
      title: getText("title"),
      link: getText("link"),
      description: getText("description").replace(/<[^>]*>/g, "").slice(0, 500),
      pubDate: getText("pubDate"),
    });
  }

  return items.slice(0, 5); // Top 5 per source
}

// Scrape thought leadership for a single leader
export async function scrapeLeader(
  leader: Leader,
  persona: PersonaId
): Promise<FeedItem[]> {
  const items: FeedItem[] = [];
  const searchQuery = `"${leader.name}" ${leader.company} ${leader.domain}`;

  try {
    // Google News RSS
    const newsUrl = SCRAPE_SOURCES.google_news(searchQuery);
    const res = await fetch(newsUrl, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "WorkOS-Dashboard/1.0" },
    });

    if (res.ok) {
      const xml = await res.text();
      const rssItems = parseRssItems(xml);

      for (const rss of rssItems) {
        items.push({
          id: await hashContent(rss.title + rss.link),
          timestamp: rss.pubDate || new Date().toISOString(),
          persona,
          leader: leader.name,
          source: "Google News",
          title: rss.title,
          url: rss.link,
          summary: rss.description || rss.title,
          type: "article",
        });
      }
    }
  } catch {
    // Silently skip failed fetches — scraper is best-effort
  }

  // Twitter/Nitter RSS (if handle available)
  if (leader.twitterHandle) {
    try {
      const twitterUrl = SCRAPE_SOURCES.twitter(leader.twitterHandle);
      const res = await fetch(twitterUrl, {
        signal: AbortSignal.timeout(10000),
        headers: { "User-Agent": "WorkOS-Dashboard/1.0" },
      });

      if (res.ok) {
        const xml = await res.text();
        const rssItems = parseRssItems(xml);

        for (const rss of rssItems) {
          items.push({
            id: await hashContent(rss.title + rss.link),
            timestamp: rss.pubDate || new Date().toISOString(),
            persona,
            leader: leader.name,
            source: `@${leader.twitterHandle}`,
            title: rss.title.slice(0, 120),
            url: rss.link,
            summary: rss.description || rss.title,
            type: "social",
          });
        }
      }
    } catch {
      // Silently skip
    }
  }

  return items;
}

// Scrape all leaders for a persona
export async function scrapePersona(persona: PersonaId): Promise<FeedItem[]> {
  const leaders = LEADER_REGISTRY[persona] || [];
  const results = await Promise.allSettled(
    leaders.map((leader) => scrapeLeader(leader, persona))
  );

  return results
    .filter((r): r is PromiseFulfilledResult<FeedItem[]> => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

// Scrape all personas
export async function scrapeAll(): Promise<FeedItem[]> {
  const personas = Object.keys(LEADER_REGISTRY) as PersonaId[];
  const results = await Promise.allSettled(
    personas.filter((p) => p !== "general").map(scrapePersona)
  );

  return results
    .filter((r): r is PromiseFulfilledResult<FeedItem[]> => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}
