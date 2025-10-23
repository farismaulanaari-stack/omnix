"use client";

import Image from "next/image";
import { FeaturesCardProps } from "@/types/types";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";

import { ArrowUpRightIcon } from "lucide-react";

export function FeaturesCard({
  title,
  description,
  ctaHref,
  image,
  ...props
}: FeaturesCardProps) {
  return (
    <Card className="col-span-3 row-span-3 shadow-none p-3 flex flex-col gap-3 relative">
      <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px] overflow-hidden">
        <Image 
            src={""}
            alt="card-image"
            className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardContent className="px-0">
        <CardTitle className="text-lg font-bold">
          Lorem ipsum dolor sit amet.
        </CardTitle>
        <CardDescription className="text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex
          dolorem consectetur perferendis quas!
        </CardDescription>
      </CardContent>
      <CardFooter className="w-full px-0 flex items-center gap-0">
        <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
          <p className="text-sm font-medium">more about this feature</p>
        </Button>
        <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
          <ArrowUpRightIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
