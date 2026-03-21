"use client";

import { useState, useEffect, useRef } from "react";
import type { FeedItem } from "@/types";
import { PERSONA_META } from "@/lib/personas";

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const TYPE_ICONS: Record<FeedItem["type"], string> = {
  article: "ART",
  social: "SOC",
  report: "RPT",
  podcast: "POD",
  interview: "INT",
};

export default function TerminalFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadFeed() {
      try {
        const res = await fetch("/api/feed");
        const data = await res.json();
        setItems(data.items || []);
      } catch {
        // Generate minimal fallback
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadFeed();
  }, []);

  // Animate items appearing one by one
  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= items.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [items]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div className="boot-up boot-delay-3 glass-card rounded-lg overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-glass-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-neon animate-pulse" />
          <span className="text-amber-neon font-mono text-xs font-bold">INTEL FEED</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-terminal-dim font-mono text-[10px]">
            {items.length} ENTRIES
          </span>
          <span className="text-terminal-dim font-mono text-[10px]">
            {isLoading ? "SCANNING..." : "LIVE"}
          </span>
        </div>
      </div>

      {/* Feed */}
      <div ref={feedRef} className="flex-1 overflow-y-auto terminal-feed p-3 space-y-1">
        {isLoading && (
          <div className="text-terminal-dim font-mono text-xs animate-pulse py-2">
            <span className="text-amber-neon">$</span> Initializing knowledge scraper
            <span className="cursor-blink" />
          </div>
        )}

        {items.slice(0, visibleCount).map((item, i) => {
          const persona = PERSONA_META[item.persona];
          return (
            <div
              key={item.id}
              className="group flex items-start gap-2 py-1.5 px-2 rounded hover:bg-terminal-bg/50 transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Timestamp */}
              <span className="text-terminal-dim font-mono text-[10px] shrink-0 mt-0.5 w-12">
                {timeAgo(item.timestamp)}
              </span>

              {/* Persona tag */}
              <span
                className="font-mono text-[9px] px-1 py-0.5 rounded shrink-0 mt-0.5"
                style={{
                  backgroundColor: `${persona?.color || "#888"}15`,
                  color: persona?.color || "#888",
                }}
              >
                {item.persona.toUpperCase()}
              </span>

              {/* Type badge */}
              <span className="text-terminal-dim font-mono text-[9px] shrink-0 mt-0.5">
                [{TYPE_ICONS[item.type]}]
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="text-terminal-text font-mono text-[11px] leading-snug">
                  <span className="text-amber-dim">{item.leader}:</span>{" "}
                  {item.title}
                </span>
                <span className="text-terminal-dim font-mono text-[9px] ml-2">
                  via {item.source}
                </span>
              </div>
            </div>
          );
        })}

        {!isLoading && visibleCount >= items.length && (
          <div className="text-terminal-dim font-mono text-[10px] py-2 text-center">
            <span className="text-amber-dim">---</span> END OF FEED{" "}
            <span className="text-amber-dim">---</span> NEXT SCAN IN 15:00
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="px-4 py-1.5 border-t border-glass-border flex items-center justify-between shrink-0">
        <span className="text-terminal-dim font-mono text-[9px]">
          SOURCES: Google News | Nitter/RSS | LinkedIn
        </span>
        <span className="text-terminal-dim font-mono text-[9px]">
          SHA-256 DEDUP ACTIVE
        </span>
      </div>
    </div>
  );
}
