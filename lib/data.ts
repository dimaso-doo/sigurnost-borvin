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

export function postSlug(title: string) {
  return title
    .toLowerCase()
    .replaceAll("č", "c")
    .replaceAll("ć", "c")
    .replaceAll("š", "s")
    .replaceAll("đ", "dj")
    .replaceAll("ž", "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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
    image: "/catalog-products/fire-extinguishers.png",
    icon: Flame
  },
  {
    title: "Hidrantski ormari",
    eyebrow: "Unutrašnja i spoljašnja zaštita",
    text: "Ormari, creva, mlaznice, ventili i kompletna hidrantska oprema.",
    image: "/catalog-products/hydrant-cabinets.png",
    icon: Droplets
  },
  {
    title: "Dojava požara",
    eyebrow: "Sistemi i održavanje",
    text: "Detektori, centrale, signalizacija i pouzdana tehnička zaštita.",
    image: "/catalog-products/fire-detection.png",
    icon: BellRing
  },
  {
    title: "HTZ oprema",
    eyebrow: "Zaštita na radu",
    text: "Radna odeća, obuća i zaštitna oprema za bezbednije radno okruženje.",
    image: "/catalog-products/ppe-equipment.png",
    icon: HardHat
  },
  {
    title: "Rezervni delovi",
    eyebrow: "PPA i hidranti",
    text: "Delovi za održavanje, servisiranje i produženje veka opreme.",
    image: "/catalog-products/spare-parts.png",
    icon: PackageCheck
  },
  {
    title: "Monitoring objekata",
    eyebrow: "Tehnička zaštita",
    text: "Nadzor, alarmi i sistemi kontrole za stanbene i poslovne objekte.",
    image: "/catalog-products/monitoring.png",
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
      "Redovan pregled ne služi samo za papir. Ispravan aparat je ono na šta se oslanjate kada nema vremena za improvizaciju.",
    tag: "Servis",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20Extinguisher%20Service.jpg",
    icon: Wrench
  },
  {
    title: "Šta mora da ima hidrantski ormar?",
    excerpt:
      "Crevo, mlaznica i ventil moraju biti na svom mestu, vidljivi i spremni za upotrebu bez traženja i pomeranja stvari.",
    tag: "Oprema",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20hose%20cabinet%20on%20wall.jpg",
    icon: Droplets
  },
  {
    title: "Dojava požara u poslovnom prostoru",
    excerpt:
      "Dobra dojava kupuje dragoceno vreme. Što ranije sistem reaguje, lakše se štite ljudi, oprema i posao.",
    tag: "Sistemi",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20alarm%20panel%20in%20a%20apartment.jpg",
    icon: BellRing
  },
  {
    title: "Obuka zaposlenih iz zaštite od požara",
    excerpt:
      "U kriznom trenutku pomaže samo ono što je jasno. Ljudi treba da znaju kome se javljaju i šta smeju da urade.",
    tag: "Obuke",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20extinguisher%20training.jpg",
    icon: BookOpenCheck
  },
  {
    title: "Kako odabrati PP aparat za lokal?",
    excerpt: "Nije svaki aparat za svaki lokal. Važni su površina, namena prostora i ono što se u njemu svakog dana koristi.",
    tag: "Aparati",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/FireExtinguisherABC.jpg",
    icon: Flame
  },
  {
    title: "Pregled hidrantske mreže pre inspekcije",
    excerpt: "Pre kontrole vredi proveriti ono najosnovnije: pristup ormarima, stanje creva, mlaznice, ventile i oznake.",
    tag: "Hidranti",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20hose.jpg",
    icon: Droplets
  },
  {
    title: "Zašto je evidencija servisa važna?",
    excerpt: "Dobra evidencija skida brigu sa dnevnog reda. Vidite šta je urađeno, šta ističe i šta treba planirati na vreme.",
    tag: "Dokumentacija",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90",
    icon: FileCheck2
  },
  {
    title: "Alarmni sistem u malom poslovnom prostoru",
    excerpt: "Mali prostor ne traži komplikovan sistem, već pametan raspored senzora i centralu koja je laka za korišćenje.",
    tag: "Alarmi",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Notifier%20Fire%20Systems%20fire%20alarm.JPG",
    icon: AlarmCheck
  },
  {
    title: "Video nadzor kao dopuna tehničkoj zaštiti",
    excerpt: "Kamere najviše znače kada se zna šta prate, ko ima pristup snimku i kako se snimci koriste u praksi.",
    tag: "Nadzor",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90",
    icon: Camera
  },
  {
    title: "HTZ oprema za svakodnevni rad",
    excerpt: "Obuća, rukavice i šlemovi nisu detalj sa liste nabavke. To je oprema koju ljudi nose svaki dan da bi radili sigurnije.",
    tag: "HTZ",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90",
    icon: HardHat
  },
  {
    title: "Kada zameniti staru opremu?",
    excerpt: "Ako su oznake nečitke, delovi oštećeni ili se vidi korozija, oprema više ne uliva poverenje i treba je proveriti.",
    tag: "Održavanje",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Close%20up%20of%20the%20fire%20extinguisher%20dial.jpg",
    icon: Wrench
  },
  {
    title: "Šta upravnik zgrade treba da proverava?",
    excerpt: "Upravnik najviše pomaže kada redovno pogleda zajedničke prostore, aparate, hidrante i prohodnost evakuacije.",
    tag: "Zgrade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
    icon: Building2
  },
  {
    title: "Dojava požara i lažni alarmi",
    excerpt: "Lažni alarmi brzo umore korisnike. Redovno održavanje pomaže da sistem ostane pouzdan kada zaista treba da reaguje.",
    tag: "Dojava",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire-Alarm-System-Devices.jpg",
    icon: BellRing
  },
  {
    title: "Plan evakuacije kao praktičan alat",
    excerpt: "Plan evakuacije treba da bude jasan na prvi pogled i postavljen tamo gde ga ljudi zaista mogu videti.",
    tag: "Evakuacija",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
    icon: ShieldCheck
  },
  {
    title: "Rezervni delovi za brži servis",
    excerpt: "Kada su osnovni delovi dostupni, servis ide brže i oprema se lakše vraća u ispravno stanje bez nepotrebnog čekanja.",
    tag: "Delovi",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fire%20engine%20hosebed%20closeup.jpg",
    icon: PackageCheck
  },
  {
    title: "Kako pripremiti objekat za pregled?",
    excerpt: "Pre pregleda oslobodite pristup opremi, proverite oznake i pripremite dokumentaciju. To odmah skraćuje ceo proces.",
    tag: "Kontrola",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=90",
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
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://sigurnost-borvin.co.rs/#business",
  name: "Sigurnost Borvin",
  legalName: "Sigurnost Borvin d.o.o.",
  description:
    "Protivpožarna oprema, servis vatrogasnih aparata, hidrantska oprema, dojava požara i sistemi zaštite za poslovne i stambene objekte.",
  image: "https://sigurnost-borvin.co.rs/logo-sigurnost-borvin.png",
  logo: "https://sigurnost-borvin.co.rs/logo-sigurnost-borvin.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladike Ćirića 17",
    addressLocality: "Novi Sad",
    addressRegion: "Vojvodina",
    addressCountry: "RS"
  },
  telephone: contact.phone,
  email: contact.email,
  url: "https://sigurnost-borvin.co.rs",
  areaServed: ["Novi Sad", "Vojvodina", "Srbija"],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.mobile,
    email: contact.email,
    contactType: "customer service",
    areaServed: "RS",
    availableLanguage: ["sr", "en"]
  },
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
