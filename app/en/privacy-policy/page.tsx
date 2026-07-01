import { ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Privacy Policy",
  description: "How Sigurnost Borvin collects, uses and protects website visitor data."
};

export default function EnglishPrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <SectionTitle
          eyebrow="Privacy"
          title="Privacy Policy"
          text="This page explains which data we may receive through the website and how we use it when you send an inquiry or contact us."
          align="center"
        />
        <article className="legal-card">
          <div className="legal-intro">
            <ShieldCheck size={30} />
            <p>
              Sigurnost Borvin uses data responsibly and only for client communication, quotation preparation,
              service organization and website improvement.
            </p>
          </div>

          <h2>Data we collect</h2>
          <p>
            When you fill out a contact form or contact us directly, we may receive your name, company name,
            phone number, email address, message and details about the facility or equipment you are asking about.
          </p>

          <h2>How we use data</h2>
          <p>
            We use data to answer inquiries, prepare quotations, arrange service or delivery and keep a basic
            record of client communication.
          </p>

          <h2>Analytics and cookies</h2>
          <p>
            The website may use Google Analytics to understand which pages are visited and how visitors use the
            website. This helps us improve content and make information easier to find.
          </p>

          <h2>Data sharing</h2>
          <p>
            We do not sell personal data. Data may be shared only when required to perform a service, meet a legal
            obligation or maintain the website technically.
          </p>

          <h2>Privacy contact</h2>
          <p>
            For privacy questions, contact us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
