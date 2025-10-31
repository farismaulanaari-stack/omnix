import { FooterListItemProps } from "@/types/types";

export const staticFooterData: FooterListItemProps[] = [
  {
    title: "Navigation",
    items: [
      { label: "About omnix", href: "/about" },
      { label: "Omnix core features", href: "/features" },
      { label: "Omnix pricing plan", href: "/pricing" },
      { label: "Get in touch with omnix", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Unified inbox", href: "/solutions" },
      { label: "Broadcast automation", href: "/solutions" },
      { label: "Smart-autoreply & AI chatbot", href: "/solutions" },
      { label: "Analytics dashboard", href: "/solutions" },
      { label: "Team collaboration", href: "/solutions" },
      { label: "Secure & reliable", href: "/solutions" },
    ],
  },
];
