"use client";

import { PricingCard } from "@/components/PricingCard/pricing-card";
import { staticPricingData } from "../../public/data/static-pricing";

export default function PricingPage() {
  return (
    <section
      className="px-4 w-full bg-linear-180 from-white from-50% to-indigo-600 pt-36 pb-16 lg:px-0 lg:pb-0"
      id="omnix-pricing-plan"
    >
      <div className="container mx-auto flex flex-col gap-20">
        <div className="w-full flex flex-col items-center gap-3.5">
          <div className="w-fit px-6 py-1 ring-2 ring-indigo-600 bg-indigo-200 rounded-full">
            <p className="text-lg font-semibold">omnix pricing plan</p>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-bold text-6xl text-center leading-tight">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg font-medium text-black/50 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa consequatur vel doloremque ipsa maxime illum, accusamus a
              inventore dolorem.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-end justify-between gap-6 overflow-hidden pt-2 lg:gap-4 lg:flex-row">
          <PricingCard data={staticPricingData} />
        </div>
      </div>
    </section>
  );
}
