import SiteHeader from "@/components/SiteHeader/site-header";
import AboutSection from "@/pages/about-page";
import FeaturesPage from "@/pages/features-page";
import PricingPage from "@/pages/pricing-page";
import HomeSection from "@/pages/home-page";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeaturesPage />
      <PricingPage />
    </>
  );
}
