import { OverviewCardProps } from "@/types/types";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function OverviewCard({
  Icon,
  title,
  description,
  href,
  ...props
}: OverviewCardProps) {
  return (
    <Card className={cn("flex flex-col", props.className)} {...props}>
      <CardHeader>
        {Icon && <Icon className="size-8 text-indigo-600" />}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={href}
          className="flex flex-row items-center gap-1 transition duration-300 ease-in-out hover:gap-1.5"
        >
          <p className="text-sm font-medium text-black">overview</p>
          <ChevronRight className="size-5 text-indigo-600" />
        </Link>
      </CardFooter>
    </Card>
  );
}
