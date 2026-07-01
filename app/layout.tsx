import type { Metadata } from "next";
import Script from "next/script";
import { Preloader } from "@/components/Preloader";
import { ScrollEffects } from "@/components/ScrollEffects";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sigurnost-borvin.co.rs";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Sigurnost Borvin",
  title: {
    default: "Sigurnost Borvin | Protivpožarna oprema i servis",
    template: "%s | Sigurnost Borvin"
  },
  description:
    "Protivpožarna oprema, servis vatrogasnih aparata, hidrantska oprema, dojava požara, alarmni sistemi i monitoring objekata.",
  keywords: [
    "Sigurnost Borvin",
    "protivpožarni aparati",
    "vatrogasni aparati",
    "hidrantska oprema",
    "dojava požara",
    "servis PP aparata",
    "Novi Sad"
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "M-pCbrue0RRWU8MJCJr2nPQAd7evkjeIV1YzjhEoK80"
  },
  alternates: {
    languages: {
      sr: "/",
      en: "/en"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Sigurnost Borvin",
    description: "Oprema, servis i sistemi za zaštitu od požara.",
    url: siteUrl,
    siteName: "Sigurnost Borvin",
    images: [
      {
        url: "/logo-sigurnost-borvin.png",
        width: 1200,
        height: 1200,
        alt: "Sigurnost Borvin logo"
      }
    ],
    locale: "sr_RS",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigurnost Borvin | Protivpožarna oprema i servis",
    description:
      "Protivpožarna oprema, servis vatrogasnih aparata, hidrantska oprema, dojava požara i alarmni sistemi.",
    images: ["/logo-sigurnost-borvin.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        {gaId ? (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Preloader />
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
