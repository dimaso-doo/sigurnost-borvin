import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";

const systemPrompt = `
Ti si AI asistent za administraciju sajta Sigurnost Borvin.
Pomažeš vlasniku da menja javni sadržaj: hero tekstove, usluge, katalog, reference, blog savete, SEO title/description i CTA tekstove.
Odgovaraj kratko na srpskom jeziku.
Kada korisnik traži izmenu sadržaja, vrati:
1. kratak predlog teksta,
2. gde tačno ide izmena,
3. SEO napomenu ako utiče na title, description, heading ili schema.
Nemoj tražiti osetljive ključeve kroz chat.
`;

async function saveDraftToSupabase(message: string, answer: string) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return;
  }

  await fetch(`${supabaseUrl}/rest/v1/content_drafts`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      source: "admin_ai_chat",
      prompt: message,
      response: answer
    })
  }).catch(() => null);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Niste prijavljeni." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const message = String(body?.message || "").trim();

  if (!message) {
    return NextResponse.json({ error: "Poruka je obavezna." }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      answer:
        "AI ključ još nije podešen. Dodajte OPENAI_API_KEY u Vercel Environment Variables. Kada se doda, ovaj chat može da predlaže izmene sadržaja i čuva draft u Supabase tabelu content_drafts."
    });
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      instructions: systemPrompt,
      input: message,
      store: false
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI servis trenutno nije dostupan." }, { status: 502 });
  }

  const data = await response.json();
  const answer =
    data.output_text ||
    data.output?.flatMap((item: { content?: Array<{ text?: string }> }) => item.content || [])
      .map((item: { text?: string }) => item.text)
      .filter(Boolean)
      .join("\n") ||
    "Nema odgovora.";

  await saveDraftToSupabase(message, answer);

  return NextResponse.json({ answer });
}
