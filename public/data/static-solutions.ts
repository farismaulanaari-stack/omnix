import { SolutionCardProps } from "@/types/types";

import { Headset, ChartNoAxesCombined, Users, ChartPie, GitFork } from "lucide-react";

export const staticSolutionsData: SolutionCardProps[] = [
    {
        title: "Customer Experience",
        description: "Fokus pada solusi komunikasi pelanggan lintas channel.",
        href: "#",
        Icon: Headset,
        className: "col-span-3"
    },
    {
        title: "Sales & Marketing",
        description: "Solusi untuk mempercepat penjualan dan engagement.",
        href: "#",
        Icon: ChartNoAxesCombined,
        className: "col-span-3 col-start-4"
    },
    {
        title: "Team Collaboration",
        description: "Fokus ke produktivitas tim internal.",
        href: "#",
        Icon: Users,
        className: "col-span-3 row-start-2"
    },
    {
        title: "Analytics & Insights",
        description: "Solusi berbasis data untuk evaluasi performa.",
        href: "#",
        Icon: ChartPie,
        className: "col-span-3 col-start-4"
    },
    {
        title: "Integration & Automation",
        description: "Solusi untuk menghubungkan Omnix ke platform lain.",
        href: "#",
        Icon: GitFork,
        className: "col-span-3 row-start-3"
    },
    {
        title: "Sales & Marketing",
        description: "Solusi untuk mempercepat penjualan dan engagement.",
        href: "#",
        Icon: ChartNoAxesCombined,
        className: "col-span-3 col-start-4"
    },
];