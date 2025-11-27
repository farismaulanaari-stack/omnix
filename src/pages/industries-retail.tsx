import Image from "next/image";
import RetailIllustration from "../../public/images/retail-illustration.svg";

export default function IndustriesRetailPage() {
  return (
    <section className="w-full h-screen px-6 lg:px-0" id="manufacture">
      <div className="container mx-auto h-full flex flex-row justify-center items-center">
        <div className="flex flex-col gap-10 justify-between items-center lg:flex-row lg:gap-0">
          <div className="w-fit flex flex-row justify-center items-center lg:w-full">
            <Image src={RetailIllustration} alt="retail illustration" />
          </div>
          <div className="w-fit flex flex-col gap-2 items-start lg:w-full">
            <p className="text-base font-semibold text-indigo-600">
              retail use case
            </p>
            <h2 className="text-4xl font-bold text-black max-w-2xl leading-snug">
              24-Hour Automatic Closing, Even While You Sleep
            </h2>
            <p className="text-base font-medium text-black text-justify">
              Cart abandoned → Omnix sends reminders + special discounts,
              increasing conversions 3x. Flash sales & receipt updates reach
              thousands of customers in 3 seconds. 24/7 customer service is
              answered by a chatbot, so you can still take time off. All chats &
              transactions are neatly in one place — no more hassle of opening
              WhatsApp multiple times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
