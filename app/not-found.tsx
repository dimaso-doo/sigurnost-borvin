import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Home, PhoneCall } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <section className="not-found-panel">
          <div className="not-found-code">
            <Image src="/logo-sigurnost-borvin.png" width={220} height={214} alt="" />
            <strong>404</strong>
          </div>
          <div className="not-found-copy">
            <span className="eyebrow">Stranica nije pronađena</span>
            <h1>Izgleda da je ova ruta ostala bez signalizacije.</h1>
            <p>
              Možda je link promenjen, možda je stranica uklonjena, a možda je samo vreme da se vratimo na
              proverene putanje.
            </p>
            <div className="not-found-actions">
              <Link className="button primary" href="/">
                <Home size={18} />
                Početna
              </Link>
              <Link className="button ghost" href="/katalog">
                Katalog <ArrowRight size={18} />
              </Link>
              <a className="button ghost" href={`tel:${contact.mobile.replaceAll("/", "").replaceAll("-", "")}`}>
                <PhoneCall size={18} />
                {contact.mobile}
              </a>
            </div>
          </div>
          <div className="not-found-flame" aria-hidden="true">
            <Flame size={46} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
