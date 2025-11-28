import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";

import { TestimonialCardProps } from "@/types/types";

export function TestimonialCard({
  name,
  role,
  company,
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="ring ring-border border-none shadow-md p-4 transition-all duration-300 hover:shadow-lg relative">
      <CardHeader className="flex flex-row justify-between items-center p-0">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="w-16 h-16">
            <AvatarImage />
            <AvatarFallback className="font-regular">
              {name.charAt(0) + name.charAt(1)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-indigo-">
            <CardTitle className="capitalize">{name}</CardTitle>
            <CardDescription className="capitalize">{`${role}, ${company}`}</CardDescription>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1"></div>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="lowercase">{testimonial}</CardDescription>
      </CardContent>
    </Card>
  );
}
