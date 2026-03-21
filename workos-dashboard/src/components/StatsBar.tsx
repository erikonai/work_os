"use client";

import { SKILL_REGISTRY, LEADER_REGISTRY, DUPLICATE_GROUPS } from "@/lib/personas";
import type { PersonaId } from "@/types";

export default function StatsBar() {
  const totalSkills = SKILL_REGISTRY.length;
  const customSkills = SKILL_REGISTRY.filter((s) => s.source === "custom").length;
  const communitySkills = SKILL_REGISTRY.filter((s) => s.source === "community").length;
  const totalLeaders = Object.values(LEADER_REGISTRY).flat().length;
  const personas = Object.keys(LEADER_REGISTRY).filter((p) => p !== "general").length;
  const duplicates = DUPLICATE_GROUPS.reduce((sum, g) => sum + g.duplicates.length, 0);

  const stats = [
    { label: "TOTAL SKILLS", value: totalSkills, color: "#FFB000" },
    { label: "CUSTOM", value: customSkills, color: "#FFB000" },
    { label: "COMMUNITY", value: communitySkills, color: "#00BFFF" },
    { label: "PERSONAS", value: personas, color: "#00FF88" },
    { label: "LEADERS", value: totalLeaders, color: "#B388FF" },
    { label: "DUPLICATES", value: duplicates, color: "#FF4444" },
  ];

  return (
    <div className="boot-up boot-delay-1 grid grid-cols-6 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-card rounded-lg px-4 py-3 flex flex-col items-center"
        >
          <span
            className="font-mono font-bold text-2xl"
            style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}40` }}
          >
            {stat.value}
          </span>
          <span className="text-terminal-dim font-mono text-[9px] mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
