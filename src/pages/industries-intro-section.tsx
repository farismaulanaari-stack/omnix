import Image from "next/image";
import IndustriesIntroIllustration from "../../public/images/industries-intro-illustration.svg";

export default function IndustriesIntroSection() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-fit flex flex-col gap-3 lg:w-full">
            <p className="text-base font-medium text-indigo-600">
              komunikasi yang beradaptasi dengan industri Anda
            </p>
            <h2 className="text-4xl font-bold text-black leading-snug">
              Platform komunikasi omnichannel, dibangun untuk mendukung setiap
              industri.
            </h2>
            <p className="text-base font-medium text-black">
              Setiap industri menghadapi tantangan komunikasi yang unik. Itulah
              sebabnya Omnix dirancang agar fleksibel, skalabel, dan
              adaptif—sehingga bisnis dari semua jenis dapat menghadirkan
              pengalaman digital yang lancar bagi pelanggan mereka.
            </p>
            <p className="text-base font-medium text-black">
              Dengan pesan terpadu, otomatisasi, dan wawasan waktu nyata, Omnix
              memberdayakan organisasi untuk berkomunikasi lebih cerdas,
              merespons lebih cepat, dan beroperasi lebih efisien di semua
              saluran.
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
