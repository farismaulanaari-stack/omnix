import { IndustryCardProps } from "@/types/types";

import { Cpu, Factory, ScanHeart, ReceiptText } from "lucide-react";

export const staticIndustryData: IndustryCardProps[] = [
    {
        industry: "technology",
        title: "Technology",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
        href: "#",
        Icon: Cpu
    },
    {
        industry: "manufacturing",
        title: "Manufacturing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
        href: "#",
        Icon: Factory
    },
    {
        industry: "healthcare",
        title: "Healthcare",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
        href: "#",
        Icon: ScanHeart
    },
    {
        industry: "retail",
        title: "Retail",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.",
        href: "#",
        Icon: ReceiptText
    },
]