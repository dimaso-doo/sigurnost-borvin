"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/contact";

const footerNav = {
  sr: [
    { href: "/", label: "Početna" },
    { href: "/usluge", label: "Usluge" },
    { href: "/katalog", label: "Katalog" },
    { href: "/reference", label: "Reference" },
    { href: "/blog", label: "Saveti" },
    { href: "/kontakt", label: "Kontakt" }
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/catalog", label: "Catalog" },
    { href: "/en/references", label: "References" },
    { href: "/en/blog", label: "Insights" },
    { href: "/en/contact", label: "Contact" }
  ]
};

export function SiteFooter() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "sr";
  const navItems = footerNav[locale];
  const legalLinks =
    locale === "en"
      ? [
          { href: "/en/privacy-policy", label: "Privacy Policy" },
          { href: "/en/terms-and-conditions", label: "Terms and Conditions" }
        ]
      : [
          { href: "/politika-privatnosti", label: "Politika privatnosti" },
          { href: "/uslovi-koriscenja", label: "Uslovi korišćenja" }
        ];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Image src="/logo-sigurnost-borvin.png" width={1271} height={1237} alt="Sigurnost Borvin" />
          <p>
            {locale === "en"
              ? "Fire protection equipment, service and safety systems for commercial and residential facilities."
              : "D.o.o. za proizvodnju i servisiranje vatrogasne opreme. Oprema, servis i sistemi zaštite za poslovne i stambene objekte."}
          </p>
        </div>
        <div>
          <h3>{locale === "en" ? "Navigation" : "Navigacija"}</h3>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href={`tel:${contact.phone.replaceAll("/", "")}`}>{contact.phone}</a>
          <a href={`tel:${contact.mobile.replaceAll("/", "")}`}>{contact.mobile}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.address}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sigurnost Borvin. All rights reserved.</span>
        <div className="footer-legal">
          {legalLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
