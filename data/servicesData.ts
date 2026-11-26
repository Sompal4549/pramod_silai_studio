export interface ServiceGalleryItem {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroDescription: string;
  aboutDescription: string;
  highlights: [string, string, string, string];
  collectionTitle: string;
  image: string;
  objectPosition?: string;
  gallery: [ServiceGalleryItem, ServiceGalleryItem, ServiceGalleryItem, ServiceGalleryItem];
  icon: string;
  featured?: boolean;
  seoDescription: string;
}

export const allServices: ServiceItem[] = [
  {
    id: "kurti-suit",
    title: "Kurti & Suit Stitching",
    subtitle: "Stylish & Comfortable",
    tagline: "Elegance in Every Daywear",
    heroDescription:
      "Trendy necklines, crisp salwar fittings, and comfortable everyday & festive stitching tailored to your exact measurements.",
    aboutDescription:
      "At Pramod Ladies Tailor, we stitch designer kurtis, patiala suits, straight-cut suits, and office-wear sets with breathable comfort and tailored precision. Whether cotton daily wear or heavy festive chanderi, every stitch is crafted to flatter your silhouette.",
    highlights: [
      "Daily Wear & Office Kurtis",
      "Patiala, Punjabi & Salwar Suits",
      "Custom Neck & Sleeve Patterns",
      "Interlock & Neat Inside Finishing",
    ],
    collectionTitle: "Our Kurti & Suit Collection",
    image: "/assets/svc-kurti.webp",
    gallery: [
      { src: "/assets/svc-kurti.webp", alt: "Embroidered Pink Kurti Neckline Stitching" },
      { src: "/assets/avatar-neha.webp", alt: "Embroidered Blue Kurti & Skirt Set", objectPosition: "50% 38%" },
      { src: "/assets/avatar-rita.webp", alt: "Maroon Zari Neckline Kurti", objectPosition: "58% 20%" },
      { src: "/assets/svc-anarkali.webp", alt: "Flared Emerald Designer Suit" },
    ],
    icon: "/assets/icon-svc-kurti.png",
    featured: true,
    seoDescription:
      "Custom kurti and salwar suit stitching in Chapra, Bihar. Trendy necklines, crisp fitting & neat finishing by Pramod Ladies Tailor.",
  },
  {
    id: "lehenga-gown",
    title: "Lehenga & Gown Stitching",
    subtitle: "For Your Special Moments",
    tagline: "Grace in Every Stitch",
    heroDescription:
      "Elegant designs, perfect fitting and premium finishing for your special occasions.",
    aboutDescription:
      "At Pramod Ladies Tailor, we specialize in stitching Lehenga and Gown with impeccable craftsmanship. Whether it's a bridal lehenga, party wear gown or designer outfit, we ensure perfect fitting, rich finishing and elegant look.",
    highlights: [
      "Bridal & Party Wear Lehenga",
      "Designer Gowns & Dresses",
      "Custom Designs & Patterns",
      "Premium Fabric Handling",
    ],
    collectionTitle: "Our Lehenga & Gown Collection",
    image: "/assets/svc-lehenga.webp",
    gallery: [
      { src: "/assets/svc-lehenga.webp", alt: "Bridal Pink Flared Embroidered Lehenga" },
      { src: "/assets/svc-frock.webp", alt: "Embroidered Floor Length Gown" },
      { src: "/assets/svc-lehenga.jpg", alt: "Bridal Crimson Lehenga Stitching" },
      { src: "/assets/svc-bridal.jpg", alt: "Royal Wedding Bridal Attire" },
    ],
    icon: "/assets/icon-svc-lehenga.png",
    featured: true,
    seoDescription:
      "Bridal lehenga and party gown stitching in Chapra, Bihar. Heavy embroidery handling, can-can setting & royal fit by Pramod Ladies Tailor.",
  },
  {
    id: "blouse",
    title: "Blouse Stitching",
    subtitle: "Perfect Fit Always",
    tagline: "Precision Fit, Classic & Trendy",
    heroDescription:
      "Prince-cut, padded, deep-back, and bridal maggam work blouses crafted for zero shoulder drop and effortless comfort.",
    aboutDescription:
      "A saree shines only when the blouse fits like a second skin. With 20+ years of cutting mastery, Parmod Sah stitches padded, princess-cut, katori, boat-neck, and designer tassel blouses with spotless inner lining and lasting shape.",
    highlights: [
      "Padded & Princess-Cut Blouses",
      "Katori & Traditional Belt Cut",
      "Deep Back, Latkan & Dori Designs",
      "Comfortable Pure Cotton Lining",
    ],
    collectionTitle: "Our Designer Blouse Collection",
    image: "/assets/svc-blouse.webp",
    gallery: [
      { src: "/assets/svc-blouse.webp", alt: "Deep Back Red Gold Zari Designer Blouse with Dori" },
      { src: "/assets/avatar-pooja.webp", alt: "Magenta Silk Saree Blouse", objectPosition: "50% 18%" },
      { src: "/assets/svc-blouse.jpg", alt: "Padded Princess Cut Blouse" },
      { src: "/assets/service-blouse.jpg", alt: "Festive Back Neck Blouse Pattern" },
    ],
    icon: "/assets/icon-svc-blouse.png",
    featured: true,
    seoDescription:
      "Best designer blouse tailor in Chapra, Bihar. Padded, princess-cut, katori & bridal blouse stitching with perfect shoulder fit.",
  },
  {
    id: "palazzo-pants",
    title: "Palazzo & Pants",
    subtitle: "Trendy & Elegant",
    tagline: "Tailored Flow & Structured Drape",
    heroDescription:
      "Flared palazzos, cigarette pants, sharara, and trouser-style bottoms with pocket detailing and zero bunching.",
    aboutDescription:
      "From wide-leg palazzos and pleated shararas to crisp ankle-length cigarette pants, we tailor bottom wear that pairs seamlessly with kurtis and crop tops. Elasticated back waists and concealed side zips ensure all-day ease.",
    highlights: [
      "Wide-Leg Palazzos & Culottes",
      "Slim Cigarette & Ankle Pants",
      "Flared Sharara & Gharara Sets",
      "Side Pockets & Half-Elastic Waist",
    ],
    collectionTitle: "Our Palazzo & Pants Collection",
    image: "/assets/svc-palazzo.webp",
    gallery: [
      { src: "/assets/svc-palazzo.webp", alt: "Crimson Red Flared Palazzo Stitching" },
      { src: "/assets/svc-kurti.webp", alt: "Embroidered Kurti Matching Pair" },
      { src: "/assets/avatar-neha.webp", alt: "Kurti with Mustard Flared Skirt", objectPosition: "50% 60%" },
      { src: "/assets/svc-palazzo.jpg", alt: "Tailored Designer Palazzo & Pants" },
    ],
    icon: "/assets/icon-svc-palazzo.png",
    featured: true,
    seoDescription:
      "Custom palazzo, cigarette pants & sharara stitching in Chapra, Bihar. Comfortable waistbands, side pockets & clean hemline finishing.",
  },
  {
    id: "frock-western",
    title: "Frock & Western Wear",
    subtitle: "For All Age Groups",
    tagline: "Modern Silhouettes, Chic Appeal",
    heroDescription:
      "Midi dresses, A-line frocks, jumpsuits, and Indo-western skirts stitched for clean drape and contemporary style.",
    aboutDescription:
      "Whether it's a breezy summer cotton frock, a structured bodycon or A-line western dress, or an Indo-western maxi gown, our master tailors deliver modern cuts with clean French seams and smooth zipper closures.",
    highlights: [
      "A-Line Dresses & Flare Frocks",
      "Midi, Maxi & Wrap Dresses",
      "Skirts, Tops & Co-ord Sets",
      "Clean Concealed Zipper Finish",
    ],
    collectionTitle: "Our Frock & Western Collection",
    image: "/assets/svc-frock.webp",
    gallery: [
      { src: "/assets/svc-frock.webp", alt: "Embroidered Floor Length Frock & Gown" },
      { src: "/assets/svc-party-frock.webp", alt: "Pink Floral Bell-Sleeve Party Frock" },
      { src: "/assets/svc-kids.webp", alt: "Lavender Floral Flared Gown" },
      { src: "/assets/svc-anarkali.webp", alt: "Emerald Flared Designer Wear" },
    ],
    icon: "/assets/icon-svc-frock.png",
    featured: true,
    seoDescription:
      "Custom frock, midi dress & ladies western wear stitching in Chapra, Bihar. Modern patterns & clean tailored fit by Pramod Ladies Tailor.",
  },
  {
    id: "anarkali",
    title: "Anarkali Suits",
    subtitle: "Grace in Every Stitch",
    tagline: "Timeless Royal Flare",
    heroDescription:
      "Kali-dar and floor-length Anarkali suits engineered with balanced panels for graceful movement and zero bulk at the waist.",
    aboutDescription:
      "A classic Anarkali demands precise math in every kali (panel). We cut and join each panel with even ghera (flare), soft inner lining, and exquisite neckline piping so you twirl effortlessly at weddings and celebrations.",
    highlights: [
      "12 to 24 Kali Flared Anarkali",
      "Floor-Length & Jacket Anarkalis",
      "Dori, Tassels & Piped Necklines",
      "Soft Crepe & Santoon Linings",
    ],
    collectionTitle: "Our Anarkali Suit Collection",
    image: "/assets/svc-anarkali.webp",
    gallery: [
      { src: "/assets/svc-anarkali.webp", alt: "Emerald Green Gold Zari Flared Anarkali Suit" },
      { src: "/assets/svc-bridal.webp", alt: "Crimson Zardozi Bridal Anarkali Suit" },
      { src: "/assets/svc-frock.webp", alt: "Floor Length Embroidered Gown" },
      { src: "/assets/svc-lehenga.webp", alt: "Bridal Flared Lehenga Anarkali" },
    ],
    icon: "/assets/icon-svc-anarkali.png",
    seoDescription:
      "Custom kali-dar & floor-length Anarkali suit stitching in Chapra, Bihar. Balanced flare & royal finishing by Pramod Ladies Tailor.",
  },
  {
    id: "saree-blouse-fall",
    title: "Saree Blouse & Saree Fall",
    subtitle: "Traditional with Style",
    tagline: "Complete Saree Draping Perfection",
    heroDescription:
      "Neat machine/hand-finished saree falls, invisible pico rolling, and pre-pleated ready-to-wear saree conversion.",
    aboutDescription:
      "Keep your Banarasi, Kanjeevaram, organza, and georgette sarees crisp and ready to drape. We attach shrink-tested cotton falls with invisible hemming, tidy pico edges, and matching tailored blouses under one roof.",
    highlights: [
      "Pre-Shrunk Colorfast Saree Fall",
      "Fine Invisible Hand Hemming & Pico",
      "Ready-to-Wear Pre-Pleated Sarees",
      "Matching Designer Blouse Tailoring",
    ],
    collectionTitle: "Our Saree Fall & Blouse Work",
    image: "/assets/svc-saree.webp",
    gallery: [
      { src: "/assets/svc-saree.webp", alt: "Yellow Silk Saree with Crimson Zari Border & Blouse" },
      { src: "/assets/svc-blouse.webp", alt: "Deep Back Red Gold Zari Blouse" },
      { src: "/assets/avatar-pooja.webp", alt: "Emerald Silk Saree & Matching Blouse", objectPosition: "50% 18%" },
      { src: "/assets/svc-bridal.webp", alt: "Festive Bridal Embroidery Work" },
    ],
    icon: "/assets/icon-svc-saree.png",
    seoDescription:
      "Neat saree fall, pico, ready-to-wear saree pleating & matching blouse stitching in Chapra, Bihar at Pramod Ladies Tailor.",
  },
  {
    id: "jackets-coats",
    title: "Jackets & Coats",
    subtitle: "Winter Style, Premium Fit",
    tagline: "Sharp Collars, Warm Sophistication",
    heroDescription:
      "Ethnic koti jackets, velvet blazers, long coats, and woollen tweed outerwear structured with proper shoulder padding and warm linings.",
    aboutDescription:
      "Elevate winter layering and ethnic ensembles with structured jackets and coats. From embroidered sleeveless velvet kotis over suits to tailored woollen blazers and trench coats, we handle heavy winter textiles cleanly.",
    highlights: [
      "Woollen Coats & Structured Blazers",
      "Ethnic Sleeveless & Full Kotis",
      "Velvet & Brocade Party Jackets",
      "Soft Satin & Warm Inner Linings",
    ],
    collectionTitle: "Our Jackets & Coats Collection",
    image: "/assets/svc-jacket.webp",
    gallery: [
      { src: "/assets/svc-jacket.webp", alt: "Crimson Jacquard Bandhgala Jacket with Brass Buttons" },
      { src: "/assets/svc-bridal.webp", alt: "Embroidered Festive Ethnic Layering" },
      { src: "/assets/avatar-rita.webp", alt: "Precision Neckline & Trim", objectPosition: "58% 20%" },
      { src: "/assets/svc-palazzo.webp", alt: "Tailored Matching Bottoms" },
    ],
    icon: "/assets/icon-svc-jacket.png",
    seoDescription:
      "Ladies blazer, winter coat & ethnic koti jacket stitching in Chapra, Bihar. Structured shoulders & warm inner lining.",
  },
  {
    id: "alterations",
    title: "Alterations & Repairs",
    subtitle: "Perfect Fit, Every Time",
    tagline: "Breathe New Life Into Your Wardrobe",
    heroDescription:
      "Readymade suit resizing, lehenga waist/length adjustments, zipper replacement, and precision garment refitting.",
    aboutDescription:
      "Bought a readymade outfit or have a cherished dress whose fit has changed? Our master alteration specialists adjust darts, shoulders, sleeves, hemlines, and zippers invisibly so every garment looks custom-made for you.",
    highlights: [
      "Readymade Lehenga & Gown Fitting",
      "Size Up / Size Down Waist & Bust",
      "Hemming, Sleeve & Neckline Tweaks",
      "Urgent Same-Day Express Repair",
    ],
    collectionTitle: "Our Alteration & Refitting Work",
    image: "/assets/svc-alteration.webp",
    gallery: [
      { src: "/assets/svc-alteration.webp", alt: "Tailor Measuring Cloth with Chalk Line & Tape" },
      { src: "/assets/svc-custom.webp", alt: "Precision Pattern Drafting & Alterations" },
      { src: "/assets/parmod-cutting-fabric.jpg", alt: "Master Tailor Pattern Adjusting" },
      { src: "/assets/svc-blouse.webp", alt: "Refitted Designer Zari Blouse" },
    ],
    icon: "/assets/icon-svc-alteration.png",
    seoDescription:
      "Quick & invisible ladies garment alteration in Chapra, Bihar. Readymade lehenga, blouse, kurti & gown resizing at Pramod Ladies Tailor.",
  },
  {
    id: "custom-design",
    title: "Custom Design & Stitching",
    subtitle: "Bring Your Ideas to Life",
    tagline: "Your Vision, Our Master Craft",
    heroDescription:
      "Show us a Pinterest, Instagram, or boutique photo and let Parmod Sah translate that design onto your own fabric with precision.",
    aboutDescription:
      "Have a unique boutique design saved on your phone? Bring your fabric and reference photo to Pramod Ladies Tailor. We draft bespoke patterns from scratch—recreating intricate necklines, bell sleeves, pleats, or draped silhouettes accurately.",
    highlights: [
      "Photo-to-Outfit Pattern Drafting",
      "Boutique Designer Neck & Sleeves",
      "Fabric Pairing & Lace Consultation",
      "Personalized Trial & Fitting Session",
    ],
    collectionTitle: "Our Custom Boutique Creations",
    image: "/assets/svc-custom.webp",
    gallery: [
      { src: "/assets/svc-custom.webp", alt: "Custom Dress Sketching with Lace Fabric & Pearls" },
      { src: "/assets/svc-alteration.webp", alt: "Exact Measurement & Chalk Patterning" },
      { src: "/assets/svc-kurti.webp", alt: "Custom Embroidered Pink Kurti" },
      { src: "/assets/svc-blouse.webp", alt: "Designer Dori Back Blouse" },
    ],
    icon: "/assets/icon-svc-custom.png",
    seoDescription:
      "Custom boutique ladies tailoring from reference photos in Chapra, Bihar. Bespoke cutting & fitting by Master Tailor Parmod Sah.",
  },
  {
    id: "bridal-festive",
    title: "Bridal & Festive Wear",
    subtitle: "For Your Big Day",
    tagline: "Unforgettable Bridal Trousseau Tailoring",
    heroDescription:
      "Heavy bridal velvet lehengas, haldi/mehendi outfits, trousseau saree blouses, and layered anarkalis stitched with heirloom care.",
    aboutDescription:
      "Your wedding trousseau deserves patience, skill, and artistry. We dedicate specialized fitting sessions for brides and family members—setting heavy double-can-can skirts, crafting velvet maggam blouses, and adding delicate handmade tassels.",
    highlights: [
      "Bridal Velvet & Silk Lehenga Sets",
      "Double Can-Can & Latkan Detailing",
      "Haldi, Mehendi & Sangeet Outfits",
      "Dedicated Bridal Trial & Adjustments",
    ],
    collectionTitle: "Our Bridal & Festive Collection",
    image: "/assets/svc-bridal.webp",
    gallery: [
      { src: "/assets/svc-bridal.webp", alt: "Crimson Red & Heavy Gold Zardozi Bridal Outfit" },
      { src: "/assets/svc-lehenga.webp", alt: "Pink Gold Zari Wedding Lehenga" },
      { src: "/assets/svc-blouse.webp", alt: "Festive Red Gold Wedding Blouse" },
      { src: "/assets/svc-anarkali.webp", alt: "Emerald Green Bridal Anarkali" },
    ],
    icon: "/assets/icon-svc-bridal.png",
    seoDescription:
      "Bridal trousseau, wedding lehenga & festive designer tailoring in Chapra, Bihar. Dedicated bridal trials by Pramod Ladies Tailor.",
  },
  {
    id: "kids-wear",
    title: "Kids Wear Stitching",
    subtitle: "Adorable & Comfortable",
    tagline: "Cute Cuts & Soft Skin-Friendly Finishes",
    heroDescription:
      "Party gowns, ethnic lehenga-cholis, cotton frocks, and birthday dresses for girls stitched with soft covered seams.",
    aboutDescription:
      "Children's skin needs zero irritation. We stitch adorable girls' party frocks, festive pattu pavadai, mini lehengas, and comfortable cotton dresses with soft cotton linings and concealed seams so little ones stay happy all day.",
    highlights: [
      "Kids Birthday Party Frocks & Gowns",
      "Festive Girls Lehenga & Choli Sets",
      "Itch-Free Soft Pure Cotton Linings",
      "Extra Seam Allowance for Growth",
    ],
    collectionTitle: "Our Kids Wear Collection",
    image: "/assets/svc-kids.webp",
    gallery: [
      { src: "/assets/svc-kids.webp", alt: "Adorable Girl in Purple Floral Party Gown" },
      { src: "/assets/svc-party-frock.webp", alt: "Pink Ruffled Net Birthday Party Frock" },
      { src: "/assets/svc-frock.webp", alt: "Embroidered Princess Gown" },
      { src: "/assets/svc-lehenga.webp", alt: "Kids Festive Ethnic Lehenga Set" },
    ],
    icon: "/assets/icon-svc-kids.png",
    seoDescription:
      "Girls party frocks, festive mini lehengas & comfortable kids wear stitching in Chapra, Bihar by Pramod Ladies Tailor.",
  },
];

export const featuredServices = allServices.filter((s) => s.featured);

export const serviceOptions = allServices.map((s) => s.title);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.id === slug);
}
