import Image from "next/image";
import Link from "next/link";
import SolutionsHeroImage from "../../public/images/solutions-hero-section.svg";

import { Button } from "@/components/ui/button";

export default function SolutionsHeroSection() {
  return (
    <section className="w-full pt-36 pb-36 px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center justify-between lg:flex-row">
          <div className="w-fit flex flex-col gap-5 lg:w-full">
            <div className="w-fit px-6 py-2 bg-indigo-100 rounded-full ring-2 ring-indigo-600">
              <p className="text-sm font-semibold text-black">
                modern communication solutions in one platform
              </p>
            </div>
            <h2 className="text-4xl font-bold text-black leading-snug">
              Improve the Efficiency, Scalability, and Accuracy of Your Business
              Communications.
            </h2>
            <Link href={"/contact-us"}>
              <Button className="w-fit h-fit px-6 py-2.5 bg-indigo-600 rounded-full hover:bg-indigo-700">
                <p className="text-base text-white font-semibold">
                  get started with omnix
                </p>
              </Button>
            </Link>
          </div>
          <div className="w-fit flex flex-row justify-end items-center lg:w-full">
            <Image src={SolutionsHeroImage} alt="solutions hero image" />
          </div>
        </div>
      </div>
    </section>
  );
}
