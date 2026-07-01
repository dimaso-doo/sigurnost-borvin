import { categories, contact, services } from "@/lib/data";

export const enServices = [
  {
    ...services[0],
    title: "Fire extinguisher service",
    text: "Inspection, refilling, maintenance and service records for fire extinguishers in commercial, residential and industrial facilities."
  },
  {
    ...services[1],
    title: "Hydrant equipment",
    text: "Supply, inspection and maintenance of hydrant cabinets, hoses, nozzles, valves and supporting equipment."
  },
  {
    ...services[2],
    title: "Fire detection systems",
    text: "Solutions for early detection, signaling, maintenance and compliance of fire alarm systems."
  },
  {
    ...services[3],
    title: "Alarm systems",
    text: "Intrusion alarm systems, sensors, control panels and facility protection adapted to the purpose of the space."
  },
  {
    ...services[4],
    title: "Video surveillance",
    text: "Cameras, recorders and clear configurations for entrances, warehouses, retail spaces and offices."
  },
  {
    ...services[5],
    title: "Documentation and training",
    text: "Plans, rulebooks, reports and employee training in fire protection and workplace safety."
  }
];

export const enCategories = [
  {
    ...categories[0],
    title: "Fire extinguishers",
    eyebrow: "Portable and wheeled",
    text: "Powder, CO2 and supporting equipment for initial fire suppression."
  },
  {
    ...categories[1],
    title: "Hydrant cabinets",
    eyebrow: "Indoor and outdoor protection",
    text: "Cabinets, hoses, nozzles, valves and complete hydrant equipment."
  },
  {
    ...categories[2],
    title: "Fire detection",
    eyebrow: "Systems and maintenance",
    text: "Detectors, control panels, signaling and reliable technical protection."
  },
  {
    ...categories[3],
    title: "PPE equipment",
    eyebrow: "Workplace safety",
    text: "Work clothing, footwear and protective equipment for safer work environments."
  },
  {
    ...categories[4],
    title: "Spare parts",
    eyebrow: "Extinguishers and hydrants",
    text: "Parts for maintenance, servicing and extending the life of equipment."
  },
  {
    ...categories[5],
    title: "Facility monitoring",
    eyebrow: "Technical protection",
    text: "Monitoring, alarms and control systems for residential and commercial facilities."
  }
];

export const enPosts = [
  {
    title: "When should a fire extinguisher be serviced?",
    excerpt:
      "Regular inspection is not just paperwork. Correct equipment condition is the first thing inspections and users expect in a facility.",
    tag: "Service",
    icon: services[0].icon
  },
  {
    title: "What should a hydrant cabinet contain?",
    excerpt:
      "Basic equipment must be available, properly marked and ready to use when it is needed.",
    tag: "Equipment",
    icon: services[1].icon
  },
  {
    title: "Fire detection in commercial facilities",
    excerpt:
      "Early detection reduces risk, speeds up response and protects people, property and business continuity.",
    tag: "Systems",
    icon: services[2].icon
  },
  {
    title: "Employee fire protection training",
    excerpt:
      "Employees need to know how to react, who to notify and which equipment they are allowed to use.",
    tag: "Training",
    icon: services[5].icon
  }
];

export const enReferences = [
  "Residential buildings",
  "Commercial spaces",
  "Warehouses and production",
  "Public institutions",
  "Hospitality facilities",
  "Retail chains"
];

export const enSectors = [
  { title: "Facilities of all types", text: "From shops and buildings to production and warehouse spaces." },
  { title: "Regulatory compliance", text: "Equipment, service and documentation for a calmer inspection process." },
  { title: "Catalog ready for shop", text: "Products are structured so prices and cart can be added later." }
];

export const enContact = contact;
