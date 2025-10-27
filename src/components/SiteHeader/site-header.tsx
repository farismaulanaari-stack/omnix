"use client";

import { useMobile } from "@/hooks/use-mobile";

import { MobileNavigation } from "../MobileNavigation/mobile-navigation";
import { DesktopNavigation } from "../DesktopNavigation/desktop-navigation";

export default function SiteHeader() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile ? (<MobileNavigation />) : (<DesktopNavigation />)}
    </>
  );
}
