import SiteHeader from "@/components/SiteHeader/site-header";
import AboutSection from "@/pages/about-page";
import HomeSection from "@/pages/home-page";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HomeSection />
      <AboutSection />
    </>
  );
}
