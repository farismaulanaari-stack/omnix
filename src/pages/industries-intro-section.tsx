import Image from "next/image";
import IndustriesIntroIllustration from "../../public/images/industries-intro-illustration.svg";

export default function IndustriesIntroSection() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-6" id="intro">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-fit flex flex-col gap-3 lg:w-full">
            <p className="text-base font-medium text-indigo-600">
              communications that adapt to your industry
            </p>
            <h2 className="text-4xl font-bold text-black leading-snug">
              An omnichannel communications platform, built to support every
              industry.
            </h2>
            <p className="text-base font-medium text-black">
              Every industry faces unique communication challenges. That's why
              Omnix is ​​designed to be flexible, scalable, and adaptive—so
              businesses of all sizes can deliver seamless digital experiences
              to their customers.
            </p>
            <p className="text-base font-medium text-black">
              With unified messaging, automation, and real-time insights, Omnix
              empowers organizations to communicate smarter, respond faster, and
              operate more efficiently across all channels.
            </p>
          </div>
          <div className="w-fit flex flex-row justify-end lg:w-full">
            <Image
              src={IndustriesIntroIllustration}
              alt="industries intro illustration"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
