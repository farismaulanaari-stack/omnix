import { SolutionCardProps } from "@/types/types";

import {
  Headset,
  ChartNoAxesCombined,
  Users,
  ChartPie,
  GitFork,
  Inbox,
  Megaphone,
  ChartArea,
  Waypoints,
  Lock,
} from "lucide-react";

export const staticSolutionsData: SolutionCardProps[] = [
  {
    title: "Unified Inbox",
    description:
      "All messages from every channel in one clean, powerful inbox.",
    href: "/solutions#unified-inbox",
    Icon: Inbox,
    className: "col-span-3",
  },
  {
    title: "Broadcast Automation",
    description:
      "Send thousands of personalized messages — scheduled and tracked.",
    href: "/solutions#broadcast-automation",
    Icon: Megaphone,
    className: "col-span-3 col-start-4",
  },
  {
    title: "Smart Auto-Reply & Chatbot",
    description:
      "AI chatbot answers 24/7, hands off to humans only when needed.",
    href: "/solutions#automation-chatbot",
    Icon: GitFork,
    className: "col-span-3 row-start-2",
  },
  {
    title: "Analytics Dashboard",
    description: "Solusi berbasis data untuk evaluasi performa.",
    href: "/solutions#analytic-dashboard",
    Icon: ChartArea,
    className: "col-span-3 col-start-4",
  },
  {
    title: "ITeam Collaboration",
    description: "Solusi untuk menghubungkan Omnix ke platform lain.",
    href: "/solutions#team-collaboration",
    Icon: Waypoints,
    className: "col-span-3 row-start-3",
  },
  {
    title: "Secure & Reliable",
    description:
      "Bank-level security, automatic backups, 99.9% uptime guaranteed.",
    href: "/solutions#secure",
    Icon: Lock,
    className: "col-span-3 col-start-4",
  },
];
