import { FileCheck2 } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the Sigurnost Borvin website."
};

export default function EnglishTermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <SectionTitle
          eyebrow="Terms"
          title="Terms and Conditions"
          text="By using this website, you accept the basic rules related to content, inquiries, information and communication through the website."
          align="center"
        />
        <article className="legal-card">
          <div className="legal-intro">
            <FileCheck2 size={30} />
            <p>
              This website presents Sigurnost Borvin services, equipment and company information. The content is
              informational and does not replace a professional facility or equipment inspection.
            </p>
          </div>

          <h2>Website information</h2>
          <p>
            We aim to keep information accurate and up to date, but product availability, offer details and service
            information may change. For an exact offer, please send an inquiry or contact us directly.
          </p>

          <h2>Sending inquiries</h2>
          <p>
            By sending an inquiry, you confirm that the information you provide is accurate and that we may use it
            to reply, prepare an offer or agree on the next step.
          </p>

          <h2>Copyright</h2>
          <p>
            Texts, layout, visual identity and other website materials may not be copied or used without approval,
            unless stated otherwise.
          </p>

          <h2>Liability</h2>
          <p>
            Sigurnost Borvin is not responsible for damage caused by incorrect interpretation of website
            information. Specific facilities, equipment and obligations require professional review and agreement.
          </p>

          <h2>Contact</h2>
          <p>
            For website usage questions, contact us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
