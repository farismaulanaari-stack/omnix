import Image from "next/image";
import Link from "next/link";

import OmnixLogo from "../../../public/images/omnix-logo.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

import { IndustryCard } from "../IndustryCard/industry-card";
import { staticIndustryData } from "../../../public/data/static-industry";

export default function SiteHeader() {
  console.log(staticIndustryData);
  console.log(staticIndustryData.slice(0, 2));
  console.log(staticIndustryData.slice(2, 4));
  return (
    <NavigationMenu className="h-20 ring ring-black/20" viewport={false}>
      <div className="container w-full flex items-center justify-between">
        <div className="w-fit">
          <Image
            src={OmnixLogo}
            alt="omnix-logo-image"
            width={200}
            height={200}
          />
        </div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#about"}>
                <p className="text-base font-medium text-black">about us</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#features"}>
                <p className="text-base font-medium text-black">features</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="text-base font-medium text-black">industry</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[700px] h-fit p-3 shadow-none border-none ring ring-black/20 left-1/2 -translate-x-1/2 data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-bottom-2">
              <div className="w-full h-full flex flex-col gap-4">
                <div className="w-full flex items-center gap-3">
                  {staticIndustryData.slice(0, 2).map((card, index) => (
                    <IndustryCard
                      key={index}
                      Icon={card.Icon}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      industry={card.industry}
                    />
                  ))}
                </div>
                <div className="w-full flex items-center gap-3">
                  {staticIndustryData.slice(2, 4).map((card, index) => (
                    <IndustryCard
                      key={index}
                      Icon={card.Icon}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      industry={card.industry}
                    />
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="text-base font-medium text-black">solutions</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[800px] h-[350px] shadow-none border-none ring ring-black/20 p-4 left-1/2 -translate-x-1/2 data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-bottom-2">
              <div className="min-w-full h-full grid grid-cols-6 grid-rows-3 gap-4">
                <div className="col-span-3 ring ring-black/20">1</div>
                <div className="col-span-3 col-start-4 ring ring-black/20">2</div>
                <div className="col-span-3 row-start-2 ring ring-black/20">3</div>
                <div className="col-span-3 col-start-4 row-start-2 ring ring-black/20">4</div>
                <div className="col-span-3 row-start-3 ring ring-black/20">5</div>
                <div className="col-span-3 col-start-4 row-start-3 ring ring-black/20">6</div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#pricing"}>
                <p className="text-base font-medium text-black">pricing</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="w-fit">
          <Button
            variant={"outline"}
            className="px-6 py-1.5 bg-indigo-200 ring-2 ring-indigo-400 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-100 hover:ring-2 hover:ring-indigo-600"
            asChild
          >
            <Link href={"/contact-us"}>
              <p className="text-base font-medium text-black">contact us</p>
            </Link>
          </Button>
        </div>
      </div>
    </NavigationMenu>
  );
}
