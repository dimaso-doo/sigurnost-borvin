"use client";

import Link from "next/link";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/contact";

export function ContactBand() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "sr";
  const contactHref = locale === "en" ? "/en/contact" : "/kontakt";

  return (
    <section className="contact-band">
      <div>
        <span>{locale === "en" ? "Ready for an equipment check?" : "Spremni za pregled opreme?"}</span>
        <h2>{locale === "en" ? "Send an inquiry or schedule service" : "Pošaljite upit ili zakažite servis"}</h2>
      </div>
      <div className="contact-actions">
        <a href={`tel:${contact.mobile.replaceAll("/", "").replaceAll("-", "")}`}>
          <Phone size={18} />
          {locale === "en" ? "Call" : "Pozovi"}
        </a>
        <a href={`mailto:${contact.email}`}>
          <Mail size={18} />
          Email
        </a>
        <Link href={contactHref}>
          <CalendarCheck size={18} />
          {locale === "en" ? "Schedule" : "Zakaži"}
        </Link>
      </div>
    </section>
  );
}
