"use client";

import Image from "next/image";

// import semua logo yang kamu punya
import AmdIcon from "../../../public/images/icons/AMD_icon.svg";
import SamsungIcon from "../../../public/images/icons/samsung_icon.svg";
import AmazonIcon from "../../../public/images/icons/amazon_icon.svg";
import IkeaIcon from "../../../public/images/icons/ikea_icon.svg";
import LgElectronicsIcon from "../../../public/images/icons/lg_icon.svg";
import AstonMartinIcon from "../../../public/images/icons/aston_martin_icon.svg";
import AnytimeFitnessIcon from "../../../public/images/icons/anytime_fitness_icon.svg";
import KimiaFarmaIcon from "../../../public/images/icons/kimia_farma_icon.svg";

export function BrandScrollable() {
  const brands = [
    { src: AmdIcon, alt: "AMD" },
    { src: SamsungIcon, alt: "Samsung" },
    { src: AmazonIcon, alt: "Amazon" },
    { src: IkeaIcon, alt: "IKEA" },
    { src: LgElectronicsIcon, alt: "lg electronics" },
    { src: AstonMartinIcon, alt: "Aston Martin" },
    { src: AnytimeFitnessIcon, alt: "Anytime Fitness" },
    { src: KimiaFarmaIcon, alt: "Kimia Farma" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div className="w-full mb-14">
        <p className="text-base text-center font-semibold text-indigo-600">
          industrial partner's
        </p>
        <h2 className="text-2xl font-bold text-center capitalize">
          trusted by our beloved partners
        </h2>
      </div>
      {/* gradient kanan kiri */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3/12 bg-gradient-to-r from-white from-20% to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-3/12 bg-gradient-to-l from-white from-20% to-transparent z-10" />

      {/* container animasi scroll */}
      <div className="flex w-max animate-infinite-scroll">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-6 mx-20"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={150}
              height={150}
              className="object-contain grayscale-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
