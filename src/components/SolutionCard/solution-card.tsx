import { SolutionCardProps } from "@/types/types";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "../ui/card";

import { cn } from "@/lib/utils";

export function SolutionCard({
  title,
  description,
  href,
  Icon,
  className,
}: SolutionCardProps) {
  return (
    <Card
      className={cn("shadow-none bg-white border-none w-full h-[95px] p-2.5 transition-all duration-200 ease-in-out hover:bg-indigo-100/50", className)}
    >
        <div className="w-full h-full p-0 flex items-center gap-2">
            <CardHeader className="w-[30%] h-full border-none shadow-none rounded-xl p-0 bg-indigo-50 flex items-center justify-center">
                {Icon && <Icon className="w-8 h-8 text-indigo-600"/>}
            </CardHeader>
            <CardContent className="p-0 w-full h-full flex flex-col gap-1.5">
                <CardTitle className="font-semibold text-indigo-600">{title ? title : "Lorem, ipsum dolor."}</CardTitle>
                <CardDescription className="font-medium text-sm">{description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}</CardDescription>
            </CardContent>
        </div>
    </Card>
  );
}
