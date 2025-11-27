import { IndustryCardProps } from "@/types/types";

import { Cpu, Factory, ScanHeart, ReceiptText } from "lucide-react";

export const staticIndustryData: IndustryCardProps[] = [
  {
    title: "Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
    href: "/industry#technology",
    Icon: Cpu,
  },
  {
    title: "Manufacturing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
    href: "/industry#manufacture",
    Icon: Factory,
  },
  {
    title: "Healthcare",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
    href: "/industry#healthcare",
    Icon: ScanHeart,
  },
  {
    title: "Retail",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
    href: "/industry#retail",
    Icon: ReceiptText,
  },
];
