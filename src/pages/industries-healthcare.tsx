import Image from "next/image";
import HealthcareIllustration from "../../public/images/healthcare-illustration.svg";

export default function IndustriesHealthcarePage() {
  return (
    <section className="w-full h-screen">
      <div className="container h-full mx-auto flex flex-row justify-center items-center">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="w-fit flex flex-row justify-center items-center lg:w-full">
            <Image src={HealthcareIllustration} alt="healthcare illustration" />
          </div>
          <div className="w-fit flex flex-col gap-2 items-start lg:w-full">
            <p className="text-base font-semibold text-indigo-600">
              healthcare use case
            </p>
            <h2 className="text-4xl font-bold text-black max-w-2xl leading-snug">
              Hospital & Clinic Communication That Never Sleeps
            </h2>
            <p className="text-base font-medium text-black">
              Forgot your appointment? Omnix sends automatic reminders via
              WhatsApp. Lab results are available → patients receive an
              immediate notification and can chat with their doctor anytime.
              Medication reminders, follow-ups, satisfaction surveys—all run
              automatically 24/7.
            </p>
            <p className="text-base font-medium text-black">
              No-shows dropped by 70%, queues disappeared, and the clinic's
              reputation instantly skyrocketed. One platform replaces all your
              walkie-talkies, SMS gateways, and Excel. Want your clinic to be
              the most modern in town? Omnix is ​​ready to go today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
