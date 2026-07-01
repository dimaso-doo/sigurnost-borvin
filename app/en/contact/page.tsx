import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Contact",
  description: "Contact Sigurnost Borvin for fire protection equipment, service and safety systems."
};

export default function EnglishContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page contact-page">
        <section className="contact-layout">
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Request an offer, service visit or equipment assessment for your facility.</h1>
            <p>
              Send basic information about your facility and equipment. The team can respond by phone or email
              with the next step.
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
              Name and company
              <input type="text" name="name" placeholder="e.g. Mark Smith, ABC Ltd" />
            </label>
            <label>
              Phone or email
              <input type="text" name="contact" placeholder="How should we contact you?" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Briefly describe what you need" rows={5} />
            </label>
            <button type="button">
              <Send size={18} />
              Send inquiry
            </button>
          </form>
        </section>
        <section className="map-section">
          <div className="map-copy">
            <span className="eyebrow">Location</span>
            <h2>Our location</h2>
            <strong>Vladike Ćirića 17, Novi Sad</strong>
            <p>Visit us or send an inquiry for service, equipment and protection systems.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Vladike%20%C4%86iri%C4%87a%2017%2C%2021000%20Novi%20Sad" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Sigurnost Borvin location"
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
