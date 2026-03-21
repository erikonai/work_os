"use client";

import { DUPLICATE_GROUPS } from "@/lib/personas";

export default function DuplicateAudit() {
  return (
    <div className="boot-up boot-delay-5 glass-card rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-glass-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-mono text-xs">!</span>
          <span className="text-amber-neon font-mono text-xs font-bold">DEDUP AUDIT</span>
        </div>
        <span className="text-terminal-dim font-mono text-[10px]">
          {DUPLICATE_GROUPS.length} GROUPS DETECTED
        </span>
      </div>

      <div className="p-3 space-y-2 max-h-80 overflow-y-auto terminal-feed">
        {DUPLICATE_GROUPS.map((group, i) => (
          <div
            key={i}
            className="px-3 py-2.5 rounded bg-terminal-bg/40 hover:bg-terminal-bg/70 transition-colors"
          >
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500/80 font-mono text-[10px]">
                  MERGE_{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-amber-neon font-mono text-[11px] font-bold">
                  {group.canonical}
                </span>
              </div>
              <span className="text-terminal-dim font-mono text-[9px]">
                CANONICAL
              </span>
            </div>

            <div className="ml-4 space-y-1 mb-2">
              {group.duplicates.map((dup) => (
                <div key={dup} className="flex items-center gap-2">
                  <span className="text-red-400/60 font-mono text-[10px]">DUP</span>
                  <span className="text-terminal-text/70 font-mono text-[10px] line-through decoration-red-400/40">
                    {dup}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-terminal-dim font-mono text-[10px] leading-relaxed">
              {group.reason}
            </p>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="px-4 py-2 border-t border-glass-border flex items-center justify-between">
        <span className="text-terminal-dim font-mono text-[9px]">
          RECOMMENDATION: Merge community variants into custom skills
        </span>
        <span className="text-amber-dim font-mono text-[9px]">
          {DUPLICATE_GROUPS.reduce((sum, g) => sum + g.duplicates.length, 0)} REDUNDANT
        </span>
      </div>
    </div>
  );
}
