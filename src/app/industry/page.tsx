import { BrandScrollable } from "@/components/BrandScrollable/brand-scrollabel";
import IndustriesHealthcarePage from "@/pages/industries-healthcare";
import IndustriesHeroSection from "@/pages/industries-hero-section";
import IndustriesIntroSection from "@/pages/industries-intro-section";
import IndustriesManufacturePage from "@/pages/industries-manufacture";
import IndustriesRetailPage from "@/pages/industries-retail";
import IndustriesTechnologyPage from "@/pages/industries-technology";

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHeroSection />
      <BrandScrollable />
      <IndustriesIntroSection />
      <IndustriesHealthcarePage />
      <IndustriesTechnologyPage />
      <IndustriesManufacturePage />
      <IndustriesRetailPage />
    </>
  );
}
