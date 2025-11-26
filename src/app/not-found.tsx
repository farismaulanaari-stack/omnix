"use client";

import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../../public/images/not-found.svg";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const pathName = usePathname()?.split("/")[1];
  console.log(pathName);
  return (
    <section className="w-full h-screen">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <div className="w-fit">
          <Image
            src={NotFoundImage}
            alt="not found image"
            // width={600}
            // height={600}
          />
        </div>
        <div className="w-fit flex flex-col items-center gap-3">
          <h2 className="text-4xl font-bold text-black">
            oops! looks like you're lost
          </h2>
          <p className="text-base text-black/50 font-medium max-w-sm text-center">
            you shouldn't be here, besides {`"${pathName}"`} address was never
            on omnix...
          </p>
          <Link href={"/"}>
            <Button className="w-fit h-fit px-6 py-2 bg-indigo-600 rounded-full hover:bg-indigo-700">
              <p className="text-base font-medium text-white">
                take me away from here
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
