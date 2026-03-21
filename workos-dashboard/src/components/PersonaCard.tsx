"use client";

import { useState } from "react";
import type { Persona } from "@/types";

interface Props {
  persona: Persona;
  index: number;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export default function PersonaCard({ persona, index, onSelect, isSelected }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const skillCount = persona.skills.length;
  const leaderCount = persona.leaders.length;
  const customCount = persona.skills.filter((s) => s.source === "custom").length;
  const communityCount = persona.skills.filter((s) => s.source === "community").length;

  return (
    <button
      onClick={() => onSelect(persona.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        boot-up boot-delay-${index + 1}
        glass-card glow-amber-hover rounded-lg p-5 text-left w-full
        transition-all duration-300 cursor-pointer
        ${isSelected ? "ring-1 ring-amber-neon/50 glow-amber" : ""}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
            style={{
              backgroundColor: `${persona.color}15`,
              color: persona.color,
              border: `1px solid ${persona.color}30`,
            }}
          >
            {persona.title}
          </div>
          <div>
            <h3 className="text-amber-neon font-mono font-bold text-sm">
              {persona.fullTitle}
            </h3>
            <p className="text-terminal-dim font-mono text-[10px] mt-0.5">
              {persona.prefix}://
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: persona.color }}
          />
          <span className="text-terminal-dim font-mono text-[10px]">ACTIVE</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-terminal-text font-mono text-xs leading-relaxed mb-4 line-clamp-2">
        {persona.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-terminal-bg/60 rounded px-2 py-1.5">
          <div className="text-amber-neon font-mono font-bold text-lg">{skillCount}</div>
          <div className="text-terminal-dim font-mono text-[9px]">SKILLS</div>
        </div>
        <div className="bg-terminal-bg/60 rounded px-2 py-1.5">
          <div className="font-mono font-bold text-lg" style={{ color: persona.color }}>
            {leaderCount}
          </div>
          <div className="text-terminal-dim font-mono text-[9px]">LEADERS</div>
        </div>
        <div className="bg-terminal-bg/60 rounded px-2 py-1.5">
          <div className="text-terminal-text font-mono font-bold text-lg">
            {customCount}/{communityCount}
          </div>
          <div className="text-terminal-dim font-mono text-[9px]">CUS/COM</div>
        </div>
      </div>

      {/* Skill bar */}
      <div className="relative h-1 bg-terminal-bg rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{
            width: `${Math.min(100, skillCount * 5)}%`,
            background: `linear-gradient(90deg, ${persona.color}80, ${persona.color})`,
            boxShadow: isHovered ? `0 0 8px ${persona.color}60` : "none",
          }}
        />
      </div>

      {/* Expand hint */}
      <div
        className={`mt-3 text-center font-mono text-[10px] transition-opacity duration-200 ${
          isHovered ? "opacity-100 text-amber-neon" : "opacity-0"
        }`}
      >
        {'>'} CLICK TO INSPECT {'<'}
      </div>
    </button>
  );
}
