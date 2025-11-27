import { BrandScrollable } from "@/components/BrandScrollable/brand-scrollabel";
import IndustriesHealthcarePage from "@/pages/industries-healthcare";
import IndustriesHeroSection from "@/pages/industries-hero-section";
import IndustriesIntroSection from "@/pages/industries-intro-section";

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHeroSection />
      <BrandScrollable />
      <IndustriesIntroSection />
      <IndustriesHealthcarePage />
    </>
  );
}
