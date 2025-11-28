import { FooterListItemProps } from "@/types/types";

export const staticFooterData: FooterListItemProps[] = [
  {
    title: "Navigation",
    items: [
      { label: "About omnix", href: "/#about-omnix" },
      { label: "Omnix core features", href: "/#omnix-core-features" },
      { label: "Omnix pricing plan", href: "/#omnix-pricing-plan" },
      { label: "Omnix testimonials", href: "/#omnix-testimonial" },
      { label: "Get in touch with omnix", href: "/contact-us" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Healthcare", href: "/industry#healthcare" },
      { label: "Technology", href: "/industry#technology" },
      { label: "Retail", href: "/industry#retail" },
      { label: "Manufacturing", href: "/industry#manufacture" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Unified inbox", href: "/solutions#unified-inbox" },
      { label: "Broadcast automation", href: "/solutions" },
      { label: "Smart-autoreply & AI chatbot", href: "/solutions" },
      { label: "Analytics dashboard", href: "/solutions" },
      { label: "Team collaboration", href: "/solutions" },
      { label: "Secure & reliable", href: "/solutions" },
    ],
  },
];
