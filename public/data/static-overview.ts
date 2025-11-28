import { OverviewCardProps } from "@/types/types";
import { Building, Cpu, HeartHandshake, ReceiptText } from "lucide-react";

export const staticOverviewData: OverviewCardProps[] = [
  {
    Icon: HeartHandshake,
    title: "Healthcare",
    description:
      "Transformasi layanan kesehatan dengan komunikasi digital yang manusiawi dan efisien.",
    href: "/industry#healthcare",
  },
  {
    Icon: Cpu,
    title: "Technology",
    description:
      "Daya ungkit inovasi melalui automasi komunikasi yang cerdas dan terintegrasi.",
    href: "/industry#technology",
  },
  {
    Icon: Building,
    title: "Manufacturing",
    description:
      "Wujudkan operasional real-time dengan rantai pasok yang terhubung dan responsif.",
    href: "/industry#manufacturing",
  },
  {
    Icon: ReceiptText,
    title: "Retail",
    description:
      "Tingkatkan engagement pelanggan melalui pengalaman personal yang konsisten di semua channel.",
    href: "/industry#retail",
  },
];
