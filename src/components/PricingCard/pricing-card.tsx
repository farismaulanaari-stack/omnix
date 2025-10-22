"use client";

import { PricingCardProps } from "@/types/types";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { PricingIcon } from "../PricingIcons/pricing-icons";
import { CheckCheckIcon } from "lucide-react";
import { CustomBadge } from "../Badge/badge";

interface PricingCardData {
  data: PricingCardProps[];
}

const variantClassname = {
  starter: {
    backgroundButton: "bg-green-500",
    textButton: "choose this plan",
    hoverEffect: "hover:bg-green-700",
  },
  professional: {
    backgroundButton: "bg-blue-500",
    textButton: "choose this plan",
    hoverEffect: "hover:bg-blue-700",
  },
  enterprise: {
    backgroundButton: "bg-indigo-500",
    textButton: "contact us for more information",
    hoverEffect: "hover:bg-indigo-700",
  },
};

export function PricingCard({ data }: PricingCardData) {
  return (
    <>
      {data.map((card, index) => (
        <Card
          key={index}
          className={`w-full ${
            card.variant === "professional" ? "h-[800px] ring-2 ring-indigo-600" : "h-[750px] ring ring-black/20"
          } bg-white shadow-none rounded-4xl rounded-b-none p-0`}
        >
          <CardHeader className="p-5 flex flex-col gap-4">
            {card.variant === "professional"
            ? (<div className="w-full flex items-start justify-between">
              <PricingIcon variant={card.variant}/>
              <CustomBadge variant="outline" className="px-3 py-1 ring-2 ring-indigo-600 bg-indigo-50">
                <p className="text-xs font-semibold">most popular</p>
              </CustomBadge>
            </div>)
            : (<PricingIcon variant={card.variant} />)
            }
            <div className="w-full flex flex-col gap-2">
              <CardTitle className="text-xl font-bold">
                {card.title ? card.title : card.variant}
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                {card.description ? card.description : "please wait"}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="w-full h-full py-0 px-6 flex flex-col gap-6">
            <div className="w-full">
              <h2 className="font-semibold text-4xl text-black">
                {card.price ? card.price : "$0"}{" "}
                {card.variant === "enterprise" ? "" : (<span className="text-lg font-medium text-black/50">/month</span>)}
              </h2>
            </div>
            <div className="w-full">
              <Button
                className={`w-full p-6 ${
                  variantClassname[card.variant].backgroundButton
                } rounded-lg transition-all duration-200 ease-in-out ${
                  variantClassname[card.variant].hoverEffect
                }`}
              >
                <p className="text-base">
                  {variantClassname[card.variant].textButton}
                </p>
              </Button>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-black">includes:</h2>
              </div>
              <ul className="w-full h-full flex flex-col gap-10">
                {card.listFeatures.map((feature, index) => (
                  <li key={index} className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      {feature ? feature : "please wait"}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
