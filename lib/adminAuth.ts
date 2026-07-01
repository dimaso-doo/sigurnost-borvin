import { cookies } from "next/headers";

export const adminSessionCookie = "borvin_admin_session";

export function getAdminConfig() {
  return {
    password: process.env.ADMIN_PASSWORD,
    sessionSecret: process.env.ADMIN_SESSION_SECRET
  };
}

export async function isAdminAuthenticated() {
  const { sessionSecret } = getAdminConfig();

  if (!sessionSecret) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(adminSessionCookie)?.value === sessionSecret;
}
