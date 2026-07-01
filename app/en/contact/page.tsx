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
              Topic
              <select name="topic" defaultValue="Fire extinguisher service">
                <option>Fire extinguisher service</option>
                <option>Hydrant equipment</option>
                <option>Fire detection</option>
                <option>Alarm systems</option>
                <option>Product catalog</option>
              </select>
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
      </main>
      <SiteFooter />
    </>
  );
}
