import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktirajte Sigurnost Borvin za protivpožarnu opremu, servis i sisteme zaštite."
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page contact-page">
        <section className="contact-layout">
          <div>
            <span className="eyebrow">Kontakt</span>
            <h1>Zatražite ponudu, servis ili procenu opreme za vaš objekat.</h1>
            <p>
              Pošaljite osnovne informacije o objektu i opremi. Tim može da odgovori telefonom ili emailom
              sa sledećim korakom.
            </p>
            <div className="contact-list">
              <a href={`tel:${contact.phone.replaceAll("/", "")}`}>
                <Phone size={20} />
                {contact.phone}
              </a>
              <a href={`tel:${contact.mobile.replaceAll("/", "")}`}>
                <Phone size={20} />
                {contact.mobile}
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail size={20} />
                {contact.email}
              </a>
              <span>
                <MapPin size={20} />
                {contact.address}
              </span>
            </div>
          </div>
          <form className="contact-form">
            <label>
              Ime i firma
              <input type="text" name="name" placeholder="npr. Marko Petrović, ABC doo" />
            </label>
            <label>
              Telefon ili email
              <input type="text" name="contact" placeholder="Kako da vas kontaktiramo" />
            </label>
            <label>
              Poruka
              <textarea name="message" placeholder="Ukratko opišite šta vam je potrebno" rows={5} />
            </label>
            <button type="button">
              <Send size={18} />
              Pošalji upit
            </button>
          </form>
        </section>
        <section className="map-section">
          <div className="map-copy">
            <span className="eyebrow">Lokacija</span>
            <h2>Naša lokacija</h2>
            <strong>Vladike Ćirića 17, Novi Sad</strong>
            <p>Posetite nas ili pošaljite upit za servis, opremu i sisteme zaštite.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Vladike%20%C4%86iri%C4%87a%2017%2C%2021000%20Novi%20Sad" target="_blank" rel="noreferrer">
              Otvori u Google Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Sigurnost Borvin lokacija"
              src="https://www.google.com/maps?q=Vladike%20%C4%86iri%C4%87a%2017%2C%2021000%20Novi%20Sad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
