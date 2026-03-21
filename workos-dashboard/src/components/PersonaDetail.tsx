"use client";

import type { Persona } from "@/types";

interface Props {
  persona: Persona;
  onClose: () => void;
}

export default function PersonaDetail({ persona, onClose }: Props) {
  return (
    <div className="boot-up glass-card rounded-lg overflow-hidden">
      {/* Header Bar */}
      <div
        className="px-5 py-3 flex items-center justify-between border-b"
        style={{ borderColor: `${persona.color}20` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-xs"
            style={{
              backgroundColor: `${persona.color}20`,
              color: persona.color,
            }}
          >
            {persona.title}
          </div>
          <div>
            <h2 className="font-mono font-bold text-sm" style={{ color: persona.color }}>
              {persona.fullTitle}
            </h2>
            <p className="text-terminal-dim font-mono text-[10px]">
              {persona.skills.length} skills loaded | {persona.leaders.length} leaders tracked
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-terminal-dim hover:text-amber-neon font-mono text-xs transition-colors px-2 py-1 rounded hover:bg-terminal-bg/50"
        >
          [ESC]
        </button>
      </div>

      <div className="p-5 space-y-6">
        {/* Skills Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-neon font-mono text-xs font-bold">
              {'>'} SKILL REGISTRY
            </span>
            <span className="text-terminal-dim font-mono text-[10px]">
              ({persona.skills.length} loaded)
            </span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto terminal-feed">
            {persona.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-3 px-3 py-2 rounded bg-terminal-bg/40 hover:bg-terminal-bg/70 transition-colors group"
              >
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                    skill.source === "custom"
                      ? "bg-amber-neon/10 text-amber-neon"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {skill.source === "custom" ? "CUS" : "COM"}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-terminal-text font-mono text-xs group-hover:text-amber-neon transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-terminal-dim font-mono text-[10px] ml-2 hidden group-hover:inline">
                    {skill.description}
                  </span>
                </div>
                {skill.isDuplicate && (
                  <span className="text-yellow-500/70 font-mono text-[9px]">DUP</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leaders Section */}
        {persona.leaders.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-neon font-mono text-xs font-bold">
                {'>'} THOUGHT LEADERS
              </span>
              <span className="text-terminal-dim font-mono text-[10px]">
                (top 5 tracked)
              </span>
            </div>
            <div className="space-y-2">
              {persona.leaders.map((leader, i) => (
                <div
                  key={leader.name}
                  className="px-3 py-2.5 rounded bg-terminal-bg/40 hover:bg-terminal-bg/70 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-dim font-mono text-[10px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs font-bold" style={{ color: persona.color }}>
                        {leader.name}
                      </span>
                      {leader.twitterHandle && (
                        <span className="text-terminal-dim font-mono text-[10px]">
                          @{leader.twitterHandle}
                        </span>
                      )}
                    </div>
                    <span className="text-terminal-dim font-mono text-[10px]">
                      {leader.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 ml-6">
                    <span className="text-terminal-dim font-mono text-[10px]">
                      {leader.title}
                    </span>
                    <span className="text-terminal-dim font-mono text-[10px]">|</span>
                    <span className="text-terminal-dim font-mono text-[10px]">
                      {leader.domain}
                    </span>
                  </div>
                  <p className="text-terminal-text/60 font-mono text-[10px] mt-1 ml-6">
                    {leader.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
