import { assetPath } from "./asset";

export const firm = {
  name: "Ca Ag Properties",
  phone: "(559) 555-0100",
  phoneHref: "tel:15595550100",
  email: "info@caagproperties.com",
  dre:
    "Broker of Record, California DRE № 01932246 · Firm License DRE № 01864461",
};

export const nav = [
  { label: "Properties", href: "#assets" },
  { label: "Services", href: "#about" },
  { label: "Water", href: "#assets" },
  { label: "Clientele", href: "#clientele" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const clients = [
  "North Valley Orchards",
  "Kings River Farms",
  "Westside Ranches",
  "Delta Land Co.",
  "Sierra Vista",
  "Tule Basin Partners",
  "Madera Tree Nuts",
  "Lost Hills Holdings",
];

export const pillars = [
  {
    n: "01",
    title: "In-house spatial analysis",
    body: "Parcel boundaries, water resources, soil classification, and crop history are built in-house on our GIS desk and drawn directly from source.",
  },
  {
    n: "02",
    title: "Senior attention",
    body: "A senior broker leads every transaction personally, from the first call through close. Clients are never handed between disconnected staff.",
  },
  {
    n: "03",
    title: "Long-standing relationships",
    body: "We have spent our careers inside California agriculture, alongside the growers, families, ranch managers, and dairy operators who work this ground.",
  },
];

export const assets = [
  {
    title: "Permanent Crops",
    body: "Almond, pistachio, walnut, citrus, stone fruit, and olive ground.",
    image: assetPath("/images/asset-permanent.png"),
    className: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[520px]",
  },
  {
    title: "Vineyards",
    body: "Wine grape and table grape acreage.",
    image: assetPath("/images/asset-vineyard.png"),
    className: "md:col-span-2 min-h-[240px]",
  },
  {
    title: "Dairy & Livestock",
    body: "Operating dairies, support land, and transition parcels.",
    image: assetPath("/images/asset-dairy.png"),
    className: "min-h-[240px]",
  },
  {
    title: "Row Crops",
    body: "Cotton, processing tomato, rice, and diversified field-crop ground.",
    image: assetPath("/images/asset-rowcrop.png"),
    className: "min-h-[240px]",
  },
  {
    title: "Water & Riparian",
    body: "Senior surface water rights, water district memberships, and riparian positions.",
    image: assetPath("/images/asset-water.png"),
    className: "md:col-span-4 min-h-[240px]",
  },
];

export const audiences = [
  {
    id: "institutional",
    label: "Institutional Investors",
    image: assetPath("/images/client-institutional.jpg"),
    lead: "Direct representation for farming vehicles, real estate investment trusts, and the institutional capital behind them, carried out with the documentation discipline that work requires.",
    detail:
      "Parcel, water, soil, and crop records are assembled before an offering goes out, so a committee can underwrite from the first look.",
  },
  {
    id: "offices",
    label: "Family Offices",
    image: assetPath("/images/client-offices.jpg"),
    lead: "Long-horizon representation for family offices building, holding, or trimming agricultural exposure, working inside existing mandates and governance.",
    detail:
      "Positions are built or reduced on the family’s timeline rather than a listing calendar.",
  },
  {
    id: "operators",
    label: "Vertically Integrated Operators",
    image: assetPath("/images/client-operators.jpg"),
    lead: "Representation for growers, packers, shippers, and processors who manage land as one part of a larger enterprise, structured around the operation as a whole.",
    detail:
      "Land decisions are weighed against processing capacity, labor, and the supply commitments already in place.",
  },
  {
    id: "family",
    label: "Family Farmers",
    image: assetPath("/images/client-family.jpg"),
    lead: "Representation for the families who own and work farmland, often across generations. Every engagement is handled directly and with discretion.",
    detail:
      "Terms are explained in plain language before anything is signed, and the same broker stays on the file through closing.",
  },
  {
    id: "hnw",
    label: "High and Ultra-High Net Worth",
    image: assetPath("/images/client-hnw.jpg"),
    lead: "Principals acquiring legacy holdings and premier estates, represented with discretion and the market knowledge to find what is not listed.",
    detail: "",
  },
];

export const team = [
  {
    name: "Cameron Kay",
    role: "Founder and Broker Associate",
    focus: "Market strategy, agricultural relationships, and negotiation",
  },
  {
    name: "Thuy Kirby",
    role: "Founder and Broker Associate",
    focus: "GIS, spatial analysis, and property intelligence",
  },
  {
    name: "Mel Kleinveldt-Lewis",
    role: "Founder and Broker Associate",
    focus: "Contracts, compliance, and transaction coordination",
  },
];
