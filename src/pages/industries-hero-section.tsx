import Image from "next/image";
import IndustriesHeroImage from "../../public/images/industries-hero-image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, CpuIcon } from "lucide-react";
import { staticOverviewData } from "../../public/data/static-overview";
import { OverviewCard } from "@/components/OverviewCard/overview-card";

export default function IndustriesHeroSection() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-20">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-fit flex flex-col gap-4 lg:w-full">
              {/* tagline industries page */}
              <div className="w-fit px-6 py-1 bg-indigo-100 ring-2 ring-indigo-600 rounded-full">
                <p className="text-base font-semibold">
                  omnix for every industries
                </p>
              </div>
              {/* headline industries page */}
              <h2 className="text-5xl font-bold text-black leading-snug max-w-4xl">
                Dibuat untuk Meningkatkan Komunikasi Pelanggan di Seluruh
                Industri.
              </h2>
              {/* descrption industries page */}
              <p className="text-base text-black font-medium max-w-xl">
                Apapun industri Anda, pelanggan menuntut respons cepat,
                informasi akurat, dan layanan tanpa hambatan. di sini Omnix
                membantu Anda menjalankan semua itu.
              </p>
              <div className="flex flex-row gap-4 mt-4">
                <Button className="w-fit h-fit px-6 py-1.5 bg-indigo-100 ring-2 ring-indigo-600 rounded-full hover:bg-indigo-200">
                  <p className="text-base font-medium text-black">
                    pelajari omnix
                  </p>
                </Button>
                <Button className="w-fit h-fit px-6 py-1.5 bg-indigo-600 ring-2 ring-indigo-600 rounded-full hover:bg-indigo-700">
                  <p className="text-base font-medium text-white">
                    request demo
                  </p>
                </Button>
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
          <div className="flex flex-row w-full gap-4 justify-between">
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
