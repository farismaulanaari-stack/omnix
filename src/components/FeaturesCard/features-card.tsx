import { FeaturesCardProps } from "@/types/types";
import { Card } from "../ui/card";

export function FeaturesCard({
    Icon,
    title,
    description,
    ctaHref,
    ...props
} : FeaturesCardProps) {
    return (
        <Card {...props}></Card>
    )
}