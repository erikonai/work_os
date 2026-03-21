import { NextResponse } from "next/server";
import { scrapeAll, scrapePersona } from "@/lib/scraper";
import type { PersonaId } from "@/types";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const persona = searchParams.get("persona") as PersonaId | null;

  // Simple API key check via env var
  const apiKey = request.headers.get("x-api-key");
  const expectedKey = process.env.SCRAPER_API_KEY;
  if (expectedKey && apiKey !== expectedKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const items = persona ? await scrapePersona(persona) : await scrapeAll();

    return NextResponse.json({
      success: true,
      count: items.length,
      items,
      scrapedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Scraper failed", details: String(error) },
      { status: 500 }
    );
  }
}
