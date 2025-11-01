"use client";

import Image from "next/image";
import { FeaturesCardProps } from "@/types/types";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";

export function FeaturesCard({
  index,
  title,
  description,
  image,
}: FeaturesCardProps) {
  return (
    <Card className="border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl">
      <CardHeader className="w-full h-[200px] overflow-hidden p-0 flex items-center justify-start">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="h-full object-contain"
        />
      </CardHeader>
      <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
        <CardTitle className="flex flex-row items-center gap-2.5">
          <span className="text-2xl font-bold italic text-indigo-600">
            0{index}.
          </span>
          <p className="text-xl font-bold">{title}</p>
        </CardTitle>
        <CardDescription className="text-sm font-medium text-black max-h-16">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
