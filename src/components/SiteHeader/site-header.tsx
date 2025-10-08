import Image from "next/image";
import Link from "next/link";

import OmnixLogo from "../../../public/images/omnix-logo.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export default function SiteHeader() {
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
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="text-base font-medium text-black">solutions</p>
            </NavigationMenuTrigger>
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
