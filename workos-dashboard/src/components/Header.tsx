"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [time, setTime] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
      setUptime(Math.floor((Date.now() - start) / 1000));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <header className="border-b border-terminal-border bg-terminal-surface/80 backdrop-blur-sm">
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-neon text-glow font-bold text-xl tracking-widest font-mono">
              WORKOS
            </span>
            <span className="text-terminal-dim text-xs font-mono">v2.0.0</span>
          </div>
          <div className="h-4 w-px bg-terminal-border" />
          <span className="text-terminal-dim text-xs font-mono">
            AI EXECUTIVE COMMAND CENTER
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-terminal-dim">SYSTEMS NOMINAL</span>
          </div>
          <div className="text-terminal-dim">
            UPTIME <span className="text-amber-neon">{formatUptime(uptime)}</span>
          </div>
          <div className="text-terminal-dim">
            SYS.TIME <span className="text-amber-neon">{time}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
