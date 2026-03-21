import { NextResponse } from "next/server";
import type { FeedItem, PersonaId } from "@/types";
import { LEADER_REGISTRY, PERSONA_META } from "@/lib/personas";

// Generate simulated feed items from leader registry for demo mode
// In production, these come from the scraper + Supabase
function generateDemoFeed(): FeedItem[] {
  const items: FeedItem[] = [];
  const types: FeedItem["type"][] = ["article", "social", "report", "podcast", "interview"];
  const sources = ["LinkedIn", "X/Twitter", "Substack", "TechCrunch", "Forbes", "HBR", "Y Combinator"];

  const headlines: Record<PersonaId, string[]> = {
    ceo: [
      "Why founder-mode is the only operating model that scales",
      "Board management in down markets: a framework",
      "The 3 decisions only the CEO can make",
      "Capital allocation when runway is uncertain",
      "Hiring your first C-suite: lessons from 10 IPOs",
    ],
    cro: [
      "The death of MQLs and what replaces them",
      "Revenue architecture for PLG companies",
      "Why your pipeline coverage ratio is lying to you",
      "Comp plans that actually align incentives",
      "Building a sales-assist motion from scratch",
    ],
    cmo: [
      "Zero-click content: why distribution > creation",
      "The CMO's guide to proving marketing ROI",
      "Category creation vs. category capture",
      "Intent data is broken — here's what works",
      "Building a content engine that compounds",
    ],
    cfo: [
      "The Rule of 40 is dead; here's the Rule of X",
      "Runway planning in an AI-first world",
      "Why your CAC payback calculation is wrong",
      "Bridge rounds: when they make sense",
      "SaaS metrics that actually predict outcomes",
    ],
    cto: [
      "Platform engineering: the end of DevOps as we know it",
      "AI coding assistants are changing team topology",
      "When to rewrite vs. refactor: a decision framework",
      "Observability-driven development",
      "The staff engineer's guide to technical strategy",
    ],
    cpo: [
      "Continuous discovery habits that actually work",
      "Product-market fit is not a moment, it's a spectrum",
      "The PM's role in an AI-native company",
      "Opportunity solution trees in practice",
      "Feature factories vs. empowered product teams",
    ],
    ciso: [
      "SOC 2 in 30 days: a startup CISO's playbook",
      "Zero trust is a journey, not a product",
      "Vendor risk in the age of AI SaaS",
      "AppSec for teams shipping daily",
      "The compliance-security balance for Series B",
    ],
    general: [],
  };

  const personaIds = Object.keys(PERSONA_META).filter((p) => p !== "general") as PersonaId[];

  for (const persona of personaIds) {
    const leaders = LEADER_REGISTRY[persona] || [];
    const personaHeadlines = headlines[persona] || [];

    personaHeadlines.forEach((headline, i) => {
      const leader = leaders[i % leaders.length];
      if (!leader) return;

      const minutesAgo = Math.floor(Math.random() * 180) + 1;
      const ts = new Date(Date.now() - minutesAgo * 60000);

      items.push({
        id: `demo-${persona}-${i}`,
        timestamp: ts.toISOString(),
        persona,
        leader: leader.name,
        source: sources[Math.floor(Math.random() * sources.length)],
        title: headline,
        summary: headline,
        type: types[Math.floor(Math.random() * types.length)],
      });
    });
  }

  return items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export async function GET() {
  const items = generateDemoFeed();

  return NextResponse.json({
    items,
    count: items.length,
    generatedAt: new Date().toISOString(),
    mode: "demo",
  });
}
