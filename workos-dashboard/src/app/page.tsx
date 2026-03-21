"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import PersonaCard from "@/components/PersonaCard";
import PersonaDetail from "@/components/PersonaDetail";
import TerminalFeed from "@/components/TerminalFeed";
import DuplicateAudit from "@/components/DuplicateAudit";
import StatsBar from "@/components/StatsBar";
import { getAllPersonas } from "@/lib/personas";
import type { Persona, PersonaId } from "@/types";

export default function Dashboard() {
  const [personas] = useState<Persona[]>(getAllPersonas);
  const [selectedId, setSelectedId] = useState<PersonaId | null>(null);
  const [bootComplete, setBootComplete] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);

  const selectedPersona = personas.find((p) => p.id === selectedId) || null;

  // Boot sequence animation
  useEffect(() => {
    const lines = [
      "WORKOS EXECUTIVE AI SYSTEM v2.0.0",
      "Initializing kernel modules...",
      `Loading ${personas.reduce((s, p) => s + p.skills.length, 0)} skills across ${personas.length} personas...`,
      "Connecting to intelligence feeds...",
      "Running deduplication audit...",
      "All systems nominal. Ready.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootComplete(true), 400);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [personas]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-terminal-bg flex items-center justify-center">
        <div className="max-w-xl w-full px-8">
          <div className="space-y-2">
            {bootLines.map((line, i) => (
              <div key={i} className="font-mono text-sm flex items-start gap-3">
                <span className="text-amber-neon shrink-0">
                  {i === bootLines.length - 1 && bootLines.length < 6 ? ">" : "✓"}
                </span>
                <span
                  className={
                    i === bootLines.length - 1
                      ? "text-amber-neon text-glow"
                      : "text-terminal-dim"
                  }
                >
                  {line}
                  {i === bootLines.length - 1 && bootLines.length < 6 && (
                    <span className="cursor-blink" />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-0.5 bg-terminal-border rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-neon rounded-full transition-all duration-300"
              style={{
                width: `${(bootLines.length / 6) * 100}%`,
                boxShadow: "0 0 10px rgba(255, 176, 0, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminal-bg">
      <Header />

      <main className="max-w-[1800px] mx-auto px-6 py-6 space-y-6">
        {/* Stats Overview */}
        <StatsBar />

        {/* Main Grid: Personas + Feed */}
        <div className="grid grid-cols-12 gap-6">
          {/* Persona Cards */}
          <div className="col-span-8">
            {selectedPersona ? (
              <PersonaDetail
                persona={selectedPersona}
                onClose={() => setSelectedId(null)}
              />
            ) : (
              <div className="grid grid-cols-4 gap-4">
                {personas.map((persona, i) => (
                  <PersonaCard
                    key={persona.id}
                    persona={persona}
                    index={i}
                    onSelect={(id) => setSelectedId(id as PersonaId)}
                    isSelected={selectedId === persona.id}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Intelligence Feed */}
          <div className="col-span-4 h-[600px]">
            <TerminalFeed />
          </div>
        </div>

        {/* Deduplication Audit */}
        <DuplicateAudit />

        {/* Footer */}
        <footer className="border-t border-terminal-border pt-4 pb-8 flex items-center justify-between">
          <span className="text-terminal-dim font-mono text-[10px]">
            WORKOS DASHBOARD | NEXT.JS + SUPABASE + TAILWIND | ENV-SECURED
          </span>
          <span className="text-terminal-dim font-mono text-[10px]">
            {new Date().getFullYear()} | ALL SECRETS VIA process.env
          </span>
        </footer>
      </main>
    </div>
  );
}
