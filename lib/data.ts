import {
  AlarmCheck,
  BellRing,
  BookOpenCheck,
  Building2,
  Camera,
  Droplets,
  FileCheck2,
  Flame,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { contact } from "@/lib/contact";

export { contact };

export const navItems = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/katalog", label: "Katalog" },
  { href: "/reference", label: "Reference" },
  { href: "/blog", label: "Saveti" },
  { href: "/kontakt", label: "Kontakt" }
];

export const services = [
  {
    title: "Servis PP aparata",
    text: "Pregled, punjenje, remont i evidencija vatrogasnih aparata za poslovne, stambene i industrijske objekte.",
    icon: Wrench
  },
  {
    title: "Hidrantska oprema",
    text: "Isporuka, pregled i održavanje hidrantskih ormara, creva, mlaznica, ventila i prateće opreme.",
    icon: Droplets
  },
  {
    title: "Dojava požara",
    text: "Rešenja za ranu detekciju, signalizaciju, održavanje i usklađivanje sistema dojave požara.",
    icon: BellRing
  },
  {
    title: "Alarmni sistemi",
    text: "Protivprovalni sistemi, senzori, kontrolne centrale i zaštita objekata prilagođena nameni prostora.",
    icon: AlarmCheck
  },
  {
    title: "Video nadzor",
    text: "Kamere, snimači i pregledne konfiguracije za kontrolu ulaza, magacina, lokala i poslovnih prostora.",
    icon: Camera
  },
  {
    title: "Dokumentacija i obuke",
    text: "Planovi, pravilnici, elaborati i obuke zaposlenih iz oblasti zaštite od požara i bezbednosti na radu.",
    icon: FileCheck2
  }
];

export const categories = [
  {
    title: "Protivpožarni aparati",
    eyebrow: "Ručni i prevozni",
    text: "Aparati tipa S, CO2 aparati i oprema za početno gašenje požara.",
    image: "/borvin-products/aparat_S6.png",
    icon: Flame
  },
  {
    title: "Hidrantski ormari",
    eyebrow: "Unutrašnja i spoljašnja zaštita",
    text: "Ormari, creva, mlaznice, ventili i kompletna hidrantska oprema.",
    image: "/borvin-products/ormar_zidni.png",
    icon: Droplets
  },
  {
    title: "Dojava požara",
    eyebrow: "Sistemi i održavanje",
    text: "Detektori, centrale, signalizacija i pouzdana tehnička zaštita.",
    image: "/borvin-products/javljaci.jpg",
    icon: BellRing
  },
  {
    title: "HTZ oprema",
    eyebrow: "Zaštita na radu",
    text: "Radna odeća, obuća i zaštitna oprema za bezbednije radno okruženje.",
    image: "/borvin-products/HTZ_slem.png",
    icon: HardHat
  },
  {
    title: "Rezervni delovi",
    eyebrow: "PPA i hidranti",
    text: "Delovi za održavanje, servisiranje i produženje veka opreme.",
    image: "/borvin-products/spojka_potisna.png",
    icon: PackageCheck
  },
  {
    title: "Monitoring objekata",
    eyebrow: "Tehnička zaštita",
    text: "Nadzor, alarmi i sistemi kontrole za stanbene i poslovne objekte.",
    image: "/borvin-products/alarmne_centrale_2.jpg",
    icon: ShieldCheck
  }
];

export const stats = [
  { value: "1997", label: "godina osnivanja" },
  { value: "24h", label: "fokus na ispravnost sistema" },
  { value: "360°", label: "oprema, servis i dokumentacija" }
];

export const references = [
  "Stambene zajednice",
  "Poslovni prostori",
  "Magacini i proizvodnja",
  "Javne ustanove",
  "Ugostiteljski objekti",
  "Maloprodajni lanci"
];

export const posts = [
  {
    title: "Kada se servisira protivpožarni aparat?",
    excerpt:
      "Redovan pregled nije samo formalnost. Ispravnost aparata je prva stvar koju inspekcija i korisnici očekuju u objektu.",
    tag: "Servis",
    icon: Wrench
  },
  {
    title: "Šta mora da ima hidrantski ormar?",
    excerpt:
      "Osnovna oprema mora biti dostupna, pravilno obeležena i spremna za upotrebu u trenutku kada je potrebna.",
    tag: "Oprema",
    icon: Droplets
  },
  {
    title: "Dojava požara u poslovnom prostoru",
    excerpt:
      "Pravovremena detekcija smanjuje rizik, ubrzava reakciju i štiti ljude, imovinu i kontinuitet poslovanja.",
    tag: "Sistemi",
    icon: BellRing
  },
  {
    title: "Obuka zaposlenih iz zaštite od požara",
    excerpt:
      "Zaposleni moraju da znaju kako da reaguju, kome se javljaju i koju opremu smeju da koriste.",
    tag: "Obuke",
    icon: BookOpenCheck
  }
];

export const adminCollections = [
  "Stranice",
  "Usluge",
  "Kategorije proizvoda",
  "Proizvodi",
  "Reference",
  "Blog saveti",
  "SEO podešavanja",
  "Kontakt podaci"
];

export const structuredLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sigurnost Borvin",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladike Ćirića 17",
    addressLocality: "Novi Sad",
    addressCountry: "RS"
  },
  telephone: contact.phone,
  email: contact.email,
  url: "https://sigurnost-borvin.co.rs",
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.text
    }
  }))
};

export const sectors = [
  { icon: Building2, title: "Objekti svih namena", text: "Od lokala i zgrada do proizvodnih i magacinskih prostora." },
  { icon: ShieldCheck, title: "Zakonska usklađenost", text: "Oprema, servis i dokumentacija za mirniji inspekcijski pregled." },
  { icon: PackageCheck, title: "Katalog spreman za shop", text: "Proizvodi su strukturirani tako da se kasnije dodaju cene i korpa." }
];
