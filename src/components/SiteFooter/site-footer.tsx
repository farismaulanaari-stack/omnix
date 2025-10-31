"use client";

import Image from "next/image";
import OmnixLogo from "../../../public/images/omnix-logo.svg";
import OmnixLogoInvert from "../../../public/images/omnix-logo-invert.svg";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  MapPinnedIcon,
  PhoneIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import { staticFooterData } from "../../../public/data/static-footer";
import { FooterListItemProps } from "@/types/types";

export default function SiteFooter() {
  return (
    <>
      <FooterBanner />
      <Separator orientation="horizontal" />
      <footer className="w-full">
        <div className="container mx-auto h-full flex flex-col gap-0 px-3">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
            {/* about omnix */}
            <Card className="border-none ring-0 shadow-none p-2.5 flex flex-col gap-4">
              <CardHeader className="p-0 flex flex-col gap-2.5">
                <Image
                  src={OmnixLogo}
                  alt="omnix logo"
                  width={200}
                  height={200}
                />
                <CardDescription className="text-lg font-medium text-black/50">
                  make everything easy in your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-row items-center justify-start p-0">
                <ul className="w-full flex flex-col gap-4">
                  <li className="w-fit flex flex-row items-start gap-2.5">
                    <span className="w-fit rounded-xl bg-indigo-100 flex flex-row items-center justify-center p-2.5">
                      <MapPinnedIcon className="text-indigo-600" size={24} />
                    </span>
                    <div className="w-fit flex flex-col gap-0">
                      <CardTitle className="text-sm font-semibold">
                        Office address
                      </CardTitle>
                      <CardDescription className="text-xs font-medium max-w-[230px]">
                        Jl. Dewa No. 72a RT 014 RW 004, Kranji, Kota Bekasi.
                      </CardDescription>
                    </div>
                  </li>
                  <li className="w-fit flex flex-row items-start gap-2.5">
                    <span className="w-fit rounded-xl bg-indigo-100 flex flex-row items-center justify-center p-2.5">
                      <PhoneIcon className="text-indigo-600" size={24} />
                    </span>
                    <div className="w-fit flex flex-col gap-0">
                      <CardTitle className="text-sm font-semibold">
                        Contact info
                      </CardTitle>
                      <CardDescription className="text-xs font-medium max-w-[230px]">
                        +62 21 1234 5678
                      </CardDescription>
                    </div>
                  </li>
                  <li className="w-fit flex flex-row items-start gap-2.5">
                    <span className="w-fit rounded-xl bg-indigo-100 flex flex-row items-center justify-center p-2.5">
                      <InstagramIcon className="text-indigo-600" size={24} />
                    </span>
                    <div className="w-fit flex flex-col gap-0">
                      <CardTitle className="text-sm font-semibold">
                        Our instagram account
                      </CardTitle>
                      <CardDescription className="text-xs font-medium max-w-[230px]">
                        @omnixindonesia
                      </CardDescription>
                    </div>
                  </li>
                  <li className="w-fit flex flex-row items-start gap-2.5">
                    <span className="w-fit rounded-xl bg-indigo-100 flex flex-row items-center justify-center p-2.5">
                      <FacebookIcon className="text-indigo-600" size={24} />
                    </span>
                    <div className="w-fit flex flex-col gap-0">
                      <CardTitle className="text-sm font-semibold">
                        Our facebook account
                      </CardTitle>
                      <CardDescription className="text-xs font-medium max-w-[230px]">
                        @omnixindonesia
                      </CardDescription>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {staticFooterData.map((data, index) => (
              <FooterListItem
                key={index}
                title={data.title}
                items={data.items}
              />
            ))}
            {/* footer list mapping */}
          </div>
          <Separator orientation="horizontal" />
          {/* footer credit component */}
          <FooterCredit />
        </div>
      </footer>
    </>
  );
}

function FooterCredit() {
  return (
    <div className="w-full h-fit py-6 flex items-center justify-between px-3 lg:px-0">
      <Image src={OmnixLogo} alt="omnix logo image" width={150} height={150} />
      <h4 className="font-medium text-sm text-black/50">
        Copyright 2025 @omnixindonesia
      </h4>
    </div>
  );
}

function FooterListItem({ title, items }: FooterListItemProps) {
  return (
    <Card className="border-none ring-0 shadow-none py-2.5 px-0 flex flex-col gap-0">
      <CardHeader className="w-full py-2.5 px-0">
        <CardTitle className="text-4xl font-bold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-row items-center justify-start p-0">
        <ul className="flex flex-col gap-3.5">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-fit relative hover-effect cursor-pointer"
            >
              <Link href={item.href}>
                <p className="text-lg font-medium text-black">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function FooterBanner() {
  return (
    <section className="w-full h-[500px] px-3 xl:px-0">
      <div className="container mx-auto w-full h-full py-3">
        <div className="w-full h-full rounded-xl bg-pattern overflow-hidden">
          <div className="w-full h-full flex flex-col justify-between p-6 lg:w-1/2">
            <Image
              src={OmnixLogoInvert}
              alt="omnix logo"
              width={250}
              height={250}
            />
            <h2 className="text-4xl font-bold text-white max-w-xl leading-snug lg:text-5xl">
              Use Omnix, and make your business easier
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
