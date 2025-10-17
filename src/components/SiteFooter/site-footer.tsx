import Image from "next/image";
import OmnixLogo from "../../../public/images/omnix-logo.svg";

import FacebookLogo from "../../../public/images/facebook_logo.png";
import InstagramLogo from "../../../public/images/instagram_logo.svg";
import TwitterLogo from "../../../public/images/twitter_logo.svg";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { MapPinnedIcon, PhoneIcon, MailsIcon } from "lucide-react";

export default function SiteFooter() {
  return (
    <>
      <section className="w-full h-[500px]"></section>
      <Separator orientation="horizontal" />
      <footer className="w-full h-[500px]">
        <div className="container mx-auto h-full flex flex-col gap-0">
          <div className="w-full h-full flex items-center justify-between gap-2 py-6">
            <Card className="w-full h-full rounded-none ring-0 border-none shadow-none">
              <CardHeader className="flex flex-col items-start gap-3">
                <Image
                  src={OmnixLogo}
                  alt="omnix-logo-image"
                  width={200}
                  height={200}
                />
                <CardDescription className="font-medium text-base">mulai terhubung dengan pelanggan anda di dalam satu platform.</CardDescription>
              </CardHeader>
              <CardContent className="w-full h-full py-6">
                <ul className="w-full h-full flex flex-col gap-6">
                  <li className="w-full h-fit">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-full bg-indigo-200">
                        <MapPinnedIcon className="w-7 h-7 text-indigo-600"/>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <CardTitle className="text-sm font-semibold">Location</CardTitle>
                        <CardDescription className="text-xs font-medium">Jl. Banteng No 76a, Kranji, Bekasi Barat, Kota Bekasi</CardDescription>
                      </div>
                    </div>
                  </li>
                  <li className="w-full h-fit">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 bg-indigo-200 rounded-full">
                        <PhoneIcon className="w-7 h-7 text-indigo-600"/>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <CardTitle className="text-sm font-semibold">Contact info</CardTitle>
                        <CardDescription className="flex flex-col gap-0">
                          <p className="text-xs font-medium text-muted-foreground">0000000000</p>
                          <p className="text-xs font-medium text-muted-foreground">0000000000</p>
                        </CardDescription>
                      </div>
                    </div>
                  </li>
                  <li className="w-full h-fit">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 bg-indigo-200 rounded-full">
                        <MailsIcon className="w-7 h-7 text-indigo-600"/>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <CardTitle className="text-sm font-semibold">Email info</CardTitle>
                        <CardDescription className="text-xs font-medium">haloomnix@omnixindonesia.com</CardDescription>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-full h-full rounded-none ring-0 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold capitalize">
                  navigation
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full h-full">
                <ul className="w-full h-full flex flex-col gap-4">
                  <li className="w-full h-fit">
                    <Link href={"#"}>
                      <CardTitle className="w-full">
                        <p className="text-base font-medium relative w-fit hover-effect">About us</p>
                      </CardTitle>
                    </Link>
                  </li>
                  <li className="w-full h-fit">
                    <Link href={"#"}>
                      <CardTitle className="w-full">
                        <p className="text-base font-medium relative w-fit hover-effect">Core features</p>
                      </CardTitle>
                    </Link>
                  </li>
                  <li className="w-full h-fit">
                    <Link href={"#"}>
                      <CardTitle className="w-full">
                        <p className="text-base font-medium relative w-fit hover-effect">Solutions</p>
                      </CardTitle>
                    </Link>
                  </li>
                  <li className="w-full h-fit">
                    <Link href={"#"}>
                      <CardTitle className="w-full">
                        <p className="text-base font-medium relative w-fit hover-effect">Industry</p>
                      </CardTitle>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-full h-full rounded-none ring-0 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold capitalize">
                  solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full h-full">
                <ul className="w-full h-full flex flex-col gap-3">
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-full h-full rounded-none ring-0 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold capitalize">
                  industry
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full h-full">
                <ul className="w-full h-full flex flex-col gap-3">
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                  <li className="w-full h-full"></li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Separator orientation="horizontal" />
          <div className="w-full h-fit py-6 flex items-center justify-between">
            <h4 className="font-medium text-sm text-black/50">
              Copyright 2025 @omnixindonesia
            </h4>
            <div className="w-fit flex items-center gap-5">
              <Link href={"#"} className="w-fit">
                <Image
                  src={FacebookLogo}
                  alt="facebokk-logo"
                  width={25}
                  height={25}
                  className="grayscale-100 transition-all duration-300 ease-in-out hover:grayscale-0"
                />
              </Link>
              <Link href={"#"} className="w-fit">
                <Image
                  src={InstagramLogo}
                  alt="facebokk-logo"
                  width={25}
                  height={25}
                  className="grayscale-100 transition-all duration-300 ease-in-out hover:grayscale-0"
                />
              </Link>
              <Link href={"#"} className="w-fit">
                <Image
                  src={TwitterLogo}
                  alt="facebokk-logo"
                  width={25}
                  height={25}
                  className="grayscale-100 transition-all duration-300 ease-in-out hover:grayscale-0"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
