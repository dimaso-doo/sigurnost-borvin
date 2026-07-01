"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact } from "@/lib/contact";

const navByLocale = {
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

function isActive(pathname: string, href: string) {
  if (href === "/" || href === "/en") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "sr";
  const navItems = navByLocale[locale];
  const phoneHref = `tel:${contact.mobile.replaceAll("/", "").replaceAll("-", "")}`;
  const contactHref = locale === "en" ? "/en/contact" : "/kontakt";
  const otherLocaleHref = locale === "en" ? "/" : "/en";

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>{locale === "en" ? "Fire protection equipment and service" : "Protivpožarna oprema i servis"}</span>
        <a href={phoneHref}>
          <Phone size={15} />
          {contact.mobile}
        </a>
      </div>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Sigurnost Borvin početna">
          <Image src="/logo-sigurnost-borvin.png" width={1271} height={1237} alt="Sigurnost Borvin" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Glavna navigacija">
          {navItems.map((item) => (
            <Link className={isActive(pathname, item.href) ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="nav-phone" href={phoneHref}>
            <Phone size={17} />
            {contact.mobile}
          </a>
          <Link className="nav-cta" href={contactHref}>
            <Mail size={17} />
            {locale === "en" ? "Send inquiry" : "Pošalji upit"}
          </Link>
        </div>
        <Link className="language-switch" href={otherLocaleHref} aria-label={locale === "en" ? "Srpski" : "English"}>
          <span>{locale === "en" ? "🇷🇸" : "🇬🇧"}</span>
          {locale === "en" ? "SR" : "EN"}
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Otvori meni">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobilna navigacija">
          {navItems.map((item) => (
            <Link
              className={isActive(pathname, item.href) ? "active" : ""}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={phoneHref}>
            <Phone size={17} />
            {contact.mobile}
          </a>
          <Link href={contactHref} onClick={() => setOpen(false)}>
            <Mail size={17} />
            {locale === "en" ? "Send inquiry" : "Pošalji upit"}
          </Link>
          <Link href={otherLocaleHref} onClick={() => setOpen(false)}>
            <span>{locale === "en" ? "🇷🇸" : "🇬🇧"}</span>
            {locale === "en" ? "Srpski" : "English"}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
