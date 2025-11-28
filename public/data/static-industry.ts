import { IndustryCardProps } from "@/types/types";

import { Cpu, Factory, ScanHeart, ReceiptText } from "lucide-react";

export const staticIndustryData: IndustryCardProps[] = [
  {
    title: "Technology",
    description: "Supercharge innovation with smart, integrated automation.",
    href: "/industry#technology",
    Icon: Cpu,
  },
  {
    title: "Manufacturing",
    description:
      "Real-time operations through connected and responsive workflows.",
    href: "/industry#manufacture",
    Icon: Factory,
  },
  {
    title: "Healthcare",
    description: "Human-centered digital communication for modern healthcare.",
    href: "/industry#healthcare",
    Icon: ScanHeart,
  },
  {
    title: "Retail",
    description:
      "Deliver personalized customer experiences across every channel.",
    href: "/industry#retail",
    Icon: ReceiptText,
  },
];
