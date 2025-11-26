"use client";

import { staticFeaturesData } from "../../public/data/static-features";
import { FeaturesCard } from "@/components/FeaturesCard/features-card";

export default function FeaturesPage() {
  return (
    <section
      className="w-full px-3 pt-36 pb-16 lg:px-0"
      id="omnix-core-features"
    >
      <div className="container w-full flex flex-col gap-20 mx-auto">
        <div className="w-full flex flex-col gap-3.5 items-center">
          <div className="w-fit px-4 py-1 bg-indigo-200 ring-2 ring-indigo-600 rounded-full lg:px-6">
            <p className="text-sm font-semibold text-black lg:text-lg">
              omnix core features
            </p>
          </div>
          <h2 className="text-4xl font-bold max-w-3xl text-center leading-tight lg:text-5xl">
            core features that make our platform unique
          </h2>
          <p className="text-base font-medium max-w-md text-center text-black/50 lg:text-lg lg:max-w-xl">
            Discover the power of our features spotlight and unleash the full
            potential of our platform
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {staticFeaturesData.map((feature) => (
            <FeaturesCard
              key={feature.index}
              title={feature.title}
              description={feature.description}
              index={feature.index}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
