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

interface PricingCardData {
  data: PricingCardProps[];
}

const variantClassname = {
  starter: "bg-green-500",
  professional: "bg-blue-500",
  enterprise: "bg-indigo-500",
};

export function PricingCard({ data }: PricingCardData) {
  return (
    <>
      {data.map((card, index) => (
        <Card
          key={index}
          className="w-full h-[800px] ring ring-black/20 border-none bg-white shadow-none rounded-4xl rounded-b-none p-0"
        >
          <CardHeader className="p-5 flex flex-col gap-4">
            <PricingIcon variant={card.variant} />
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
                <span className="text-lg font-medium text-black/50">
                  /month
                </span>
              </h2>
            </div>
            <div className="w-full">
              <Button
                className={`w-full p-6 ${
                  variantClassname[card.variant]
                } rounded-lg`}
              >
                <p className="text-base">choose this plan</p>
              </Button>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-black">includes:</h2>
              </div>
              <ul className="w-full h-full flex flex-col gap-10">
                {card.listFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="w-full flex items-center gap-2">
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
