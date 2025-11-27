import Image from "next/image";
import TechnologyIllustration from "../../public/images/technology-illustration.svg";

export default function IndustriesTechnologyPage() {
  return (
    <section className="w-full h-screen px-6 lg:px-0" id="technology">
      <div className="container mx-auto h-full flex flex-row justify-center items-center">
        <div className="flex flex-col gap-10 justify-between items-center lg:flex-row lg:gap-0">
          <div className="w-fit flex flex-row justify-center items-center lg:w-full">
            <Image src={TechnologyIllustration} alt="healthcare illustration" />
          </div>
          <div className="w-fit flex flex-col gap-2 items-start lg:w-full">
            <p className="text-base font-semibold text-indigo-600">
              technology use case
            </p>
            <h2 className="text-4xl font-bold text-black max-w-2xl leading-snug">
              Support 10,000 Users Without Adding CS Team
            </h2>
            <p className="text-base font-medium text-black text-justify">
              24/7 chat support is answered automatically, so your team can stay
              focused on coding. Product updates? Broadcast them to all WhatsApp
              and Instagram users with one click. Intelligent chatbots handle
              90% of routine inquiries—response times can go from hours to
              seconds.
            </p>
            <p className="text-base font-medium text-black text-justify">
              All channels are in one dashboard, eliminating the hassle of
              opening multiple apps. Users say "the support is so fast!" and
              retention immediately increases. Want your startup to scale 10x
              faster? Activate Omnix now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
