import { AdminAiChat } from "@/components/AdminAiChat";
import { AdminLogin } from "@/components/AdminLogin";
import { getAdminConfig, isAdminAuthenticated } from "@/lib/adminAuth";
import { adminCollections } from "@/lib/data";

export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false
  }
};

export default async function AdminPreviewPage() {
  const isAuthenticated = await isAdminAuthenticated();
  const { password, sessionSecret } = getAdminConfig();
  const isConfigured = Boolean(password && sessionSecret);

  return (
    <main className="admin-preview">
      {isAuthenticated ? <AdminAiChat collections={adminCollections} /> : <AdminLogin isConfigured={isConfigured} />}
    </main>
  );
}
