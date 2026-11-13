export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", children: [{ label: "Home 1", href: "/" }, { label: "Home 2", href: "/home-2" }] },
  {
    label: "Pages",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Services 2", href: "/services-2" },
      { label: "Single Service", href: "/services/transportation-and-distribution" },
      { label: "Production", href: "/production" },
      { label: "Certificates", href: "/certificates" },
      { label: "Shop", href: "/production/product-list" },
      { label: "Page 404", href: "/404" },
      { label: "Coming Soon", href: "/coming-soon" },
    ],
  },
  { label: "Blog", children: [{ label: "Blog", href: "/blog" }, { label: "Blog + Sidebar", href: "/blog-sidebar" }] },
  { label: "Contact", href: "/contact" },
];