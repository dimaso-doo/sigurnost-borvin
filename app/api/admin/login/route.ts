import { NextResponse } from "next/server";
import { adminSessionCookie, getAdminConfig } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const { password, sessionSecret } = getAdminConfig();
  const body = await request.json().catch(() => null);

  if (!password || !sessionSecret) {
    return NextResponse.json(
      { error: "Admin pristup nije podešen. Dodajte ADMIN_PASSWORD i ADMIN_SESSION_SECRET." },
      { status: 503 }
    );
  }

  if (body?.password !== password) {
    return NextResponse.json({ error: "Pogrešna lozinka." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminSessionCookie, sessionSecret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
