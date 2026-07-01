import { Lock, PencilLine } from "lucide-react";
import { adminCollections } from "@/lib/data";

export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPreviewPage() {
  return (
    <main className="admin-preview">
      <section>
        <Lock size={30} />
        <span>Admin panel koncept</span>
        <h1>CMS zona za klijenta</h1>
        <p>
          U produkciji ovde ide Payload CMS sa prijavom, rolama i kolekcijama koje uređuju javni sajt.
        </p>
        <div className="admin-list">
          {adminCollections.map((item) => (
            <div key={item}>
              <PencilLine size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
