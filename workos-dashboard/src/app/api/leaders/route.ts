import { NextResponse } from "next/server";
import { LEADER_REGISTRY } from "@/lib/personas";
import type { PersonaId } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const persona = searchParams.get("persona") as PersonaId | null;

  if (persona && LEADER_REGISTRY[persona]) {
    return NextResponse.json({
      persona,
      leaders: LEADER_REGISTRY[persona],
    });
  }

  return NextResponse.json(LEADER_REGISTRY);
}
