import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { IndustryCardProps } from "@/types/types"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from "../ui/card"

const cardSizes = cva(
    {
        variants: {
            variant: {
                default: "shadow-none p-2 border-none rounded-xl transition-all duration-200 ease-in-out hover:bg-indigo-100/50"
            },
            size: {
                sm: "w-full h-[60px]",
                md: "w-full h-[90px]",
                lg: "w-full h-[150px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "sm"
        }
    }
)

export function IndustryCard({
    Icon,
    title,
    description,
    href,
    size,
    className,
    ...props
} : IndustryCardProps & VariantProps<typeof cardSizes>) {
    return (
        <Card className={cn(size, className)} {...props}>
            <CardHeader className="w-full h-full p-0 flex flex-row items-center gap-2">
                <div className="w-1/3 h-full rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-indigo-600"/>
                </div>
                <div className="w-full h-full flex flex-col">
                    <CardTitle className="text-indigo-600 font-semibold text-base">{title}</CardTitle>
                    <CardDescription className="font-medium text-xs">{description}</CardDescription>
                </div>
            </CardHeader>
        </Card>
    )
}