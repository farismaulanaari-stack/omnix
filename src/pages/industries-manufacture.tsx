import Image from "next/image";
import ManufactureIllustration from "../../public/images/manufacture-illustration.svg";

export default function IndustriesManufacturePage() {
  return (
    <section className="w-full h-screen px-6 lg:px-0" id="manufacture">
      <div className="container mx-auto h-full flex flex-row justify-center items-center">
        <div className="flex flex-col gap-10 justify-between items-center lg:flex-row lg:gap-0">
          <div className="w-fit flex flex-row justify-center items-center lg:w-full">
            <Image
              src={ManufactureIllustration}
              alt="manufacture illustration"
            />
          </div>
          <div className="w-fit flex flex-col gap-2 items-start lg:w-full">
            <p className="text-base font-semibold text-indigo-600">
              manufacture use case
            </p>
            <h2 className="text-4xl font-bold text-black max-w-2xl leading-snug">
              Factory Without Walkie-Talkies & Paper Anymore
            </h2>
            <p className="text-base font-medium text-black text-justify">
              Machine breakdown → technicians immediately receive a notification
              and photo on WhatsApp. Shift reports, absences, and maintenance
              schedules are all automatically added to the group. Downtime is
              reduced by 40%, and coordination is as fast as regular chat.
            </p>
            <p className="text-base font-medium text-black text-justify">
              All production data is neatly recorded without manual Excel. Your
              factory is ready to enter the Industry 4.0 era in a matter of
              days. Start now, or your competitors will.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
