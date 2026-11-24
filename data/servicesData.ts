export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: string;
  featured?: boolean;
}

export const allServices: ServiceItem[] = [
  {
    id: "kurti-suit",
    title: "Kurti & Suit Stitching",
    subtitle: "Stylish & Comfortable",
    image: "/assets/svc-kurti.jpg",
    icon: "/assets/icon-svc-kurti.png",
    featured: true,
  },
  {
    id: "lehenga-gown",
    title: "Lehenga & Gown Stitching",
    subtitle: "For Your Special Moments",
    image: "/assets/svc-lehenga.jpg",
    icon: "/assets/icon-svc-lehenga.png",
    featured: true,
  },
  {
    id: "blouse",
    title: "Blouse Stitching",
    subtitle: "Perfect Fit Always",
    image: "/assets/svc-blouse.jpg",
    icon: "/assets/icon-svc-blouse.png",
    featured: true,
  },
  {
    id: "palazzo-pants",
    title: "Palazzo & Pants",
    subtitle: "Trendy & Elegant",
    image: "/assets/svc-palazzo.jpg",
    icon: "/assets/icon-svc-palazzo.png",
    featured: true,
  },
  {
    id: "frock-western",
    title: "Frock & Western Wear",
    subtitle: "For All Age Groups",
    image: "/assets/svc-frock.jpg",
    icon: "/assets/icon-svc-frock.png",
    featured: true,
  },
  {
    id: "anarkali",
    title: "Anarkali Suits",
    subtitle: "Grace in Every Stitch",
    image: "/assets/svc-anarkali.jpg",
    icon: "/assets/icon-svc-anarkali.png",
  },
  {
    id: "saree-blouse-fall",
    title: "Saree Blouse & Saree Fall",
    subtitle: "Traditional with Style",
    image: "/assets/svc-saree.jpg",
    icon: "/assets/icon-svc-saree.png",
  },
  {
    id: "jackets-coats",
    title: "Jackets & Coats",
    subtitle: "Winter Style, Premium Fit",
    image: "/assets/svc-jacket.jpg",
    icon: "/assets/icon-svc-jacket.png",
  },
  {
    id: "alterations",
    title: "Alterations & Repairs",
    subtitle: "Perfect Fit, Every Time",
    image: "/assets/svc-alteration.jpg",
    icon: "/assets/icon-svc-alteration.png",
  },
  {
    id: "custom-design",
    title: "Custom Design & Stitching",
    subtitle: "Bring Your Ideas to Life",
    image: "/assets/svc-custom.jpg",
    icon: "/assets/icon-svc-custom.png",
  },
  {
    id: "bridal-festive",
    title: "Bridal & Festive Wear",
    subtitle: "For Your Big Day",
    image: "/assets/svc-bridal.jpg",
    icon: "/assets/icon-svc-bridal.png",
  },
  {
    id: "kids-wear",
    title: "Kids Wear Stitching",
    subtitle: "Adorable & Comfortable",
    image: "/assets/svc-kids.jpg",
    icon: "/assets/icon-svc-kids.png",
  },
];

export const featuredServices = allServices.filter((s) => s.featured);

export const serviceOptions = allServices.map((s) => s.title);
