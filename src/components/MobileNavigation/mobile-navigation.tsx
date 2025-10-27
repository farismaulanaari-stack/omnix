"use client";

import Image from "next/image";
import OmnixLogo from "../../../public/images/omnix-logo.svg";;

import {
    NavigationMenu,
    NavigationMenuItem,
} from "../ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../ui/sheet";
import { Button } from "../ui/button";

import { MenuIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export function MobileNavigation() {
    return (
        <NavigationMenu className="w-full px-3 h-20 border-b border-b-black/20">
            <ul className="w-full h-full flex items-center justify-between">
                <NavigationMenuItem>
                    <Image
                        src={OmnixLogo}
                        alt="omnix-logo"
                        width={170}
                    />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button 
                                variant={"outline"}
                                size={"icon-lg"}
                                className="border-none ring-0 shadow-none"
                            >
                                <MenuIcon strokeWidth={2.5}/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="h-screen">
                            {/* header component (logo, title, and description) */}
                            <SheetHeader>
                                <div className="flex flex-col gap-3">
                                    <Image
                                        src={OmnixLogo}
                                        alt="omnix-logo"
                                        width={200}
                                    />
                                    <Separator />
                                    <div className="flex flex-col gap-1">
                                        <SheetTitle className="text-lg font-semibold">Hello! welcome to omnix.</SheetTitle>
                                        <SheetDescription className="text-base font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet debitis qui necessitatibus, cupiditate iure doloribus?</SheetDescription>
                                    </div>
                                </div>
                            </SheetHeader>
                            {/* content here */}
                            <div className="w-full h-full"></div>
                            {/* footer CTA */}
                            <SheetFooter className="w-full">
                                <Button variant={"outline"} className="ring-2 ring-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100" size={"lg"}>
                                    <p className="text-lg font-semibold capitalize">get in touch with us</p>
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </NavigationMenuItem>    
            </ul>
        </NavigationMenu>
    )
}
