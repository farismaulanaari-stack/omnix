import Link from "next/link";
import Image from "next/image";
import IndustriesHeroImage from "../../public/images/industries-hero-image.png";

import { Button } from "@/components/ui/button";
import { OverviewCard } from "@/components/OverviewCard/overview-card";

import { staticOverviewData } from "../../public/data/static-overview";

export default function IndustriesHeroSection() {
  return (
    <>
      <section className="py-10 px-6 lg:px-0">
        <div className="container mx-auto flex flex-col gap-20">
          <div className="w-full flex flex-col items-center justify-between lg:flex-row">
            <div className="w-fit flex flex-col gap-4 lg:w-full">
              {/* tagline industries page */}
              <div className="w-fit px-6 py-1 bg-indigo-100 ring-2 ring-indigo-600 rounded-full">
                <p className="text-base font-semibold">
                  omnix for every industries
                </p>
              </div>
              {/* headline industries page */}
              <h2 className="text-3xl font-bold text-black leading-snug max-w-4xl lg:text-4xl">
                Built to Improve Customer Communication Across Industries.
              </h2>
              {/* descrption industries page */}
              <p className="text-base text-black font-medium max-w-xl">
                Whatever your industry, customers demand fast responses,
                accurate information, and seamless service. Omnix is ​​here to
                help you achieve all of that.
              </p>
              <div className="w-full flex flex-row gap-4 mt-4">
                <Link href={"/industry#intro"}>
                  <Button className="w-fit h-fit px-6 py-1.5 bg-indigo-100 ring-2 ring-indigo-600 rounded-full hover:bg-indigo-200">
                    <p className="text-base font-medium text-black">
                      learn omnix industries
                    </p>
                  </Button>
                </Link>
                <Link href={"/contact-us"}>
                  <Button className="w-fit h-fit px-6 py-1.5 bg-indigo-600 ring-2 ring-indigo-600 rounded-full hover:bg-indigo-700">
                    <p className="text-base font-medium text-white">
                      request demo
                    </p>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-fit flex flex-row justify-end lg:w-full">
              <Image
                src={IndustriesHeroImage}
                alt="industries hero image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 justify-between lg:flex-row">
            {staticOverviewData.map((overview, index) => (
              <OverviewCard
                key={index}
                title={overview.title}
                description={overview.description}
                href={overview.href}
                Icon={overview.Icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
