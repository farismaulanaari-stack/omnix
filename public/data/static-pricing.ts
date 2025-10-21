import { PricingCardProps } from "@/types/types";

export const staticPricingData: PricingCardProps[] = [
    {
        variant: "starter",
        title: "Starter (for small teams)",
        description: "Perfect for freelancers or small businesses who want to simplify client communication.",
        price: "&9,500",
        listFeatures: [
            "Unified Inbox (max 2 integrations)",
            "Basic Analytics Dashboard",
            "Auto-reply & Scheduling",
            "5 GB Cloud Storage",
            "Email Support",
        ]
    },
    {
        variant: "professional",
        title: "Professional (for Growing Teams)",
        description: "Designed for mid-sized teams that need powerful automation and deeper insights.",
        price: "&29,200",
        listFeatures: [
            "Up to 10 Integrations",
            "Smart Workflow Automation",
            "Advanced Analytics & Reporting",
            "Team Collaboration Tools",
            "Priority Support"
        ]
    },
    {
        variant: "enterprise",
        title: "Enterprise (Custom Solutions)",
        description: "Tailored for organizations that demand security, scalability, and dedicated support.",
        price: "contact us",
        listFeatures: [
            "Unlimited Integrations",
            "Dedicated Account Manager",
            "Custom API Access",
            "On-premise or Private Deployment",
            "24/7 Enterprise Support"
        ]
    }
]