import { NextResponse } from "next/server";
import { adminSessionCookie } from "@/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(adminSessionCookie);
  return response;
}
