import { CheckCircleIcon } from "lucide-react";

export default function SolutionsIntroSection() {
  return (
    <section className="w-full pt-36 pb-16 px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-6 justify-between items-center lg:flex-row lg:gap-0 lg:items-start">
          <div className="w-fit flex flex-col gap-2 lg:w-full lg:gap-3">
            <p className="text-indigo-600 font-semibold text-sm lg:text-base">
              Perfect for you who struggling with
            </p>
            <h2 className="text-2xl font-bold text-black max-w-3xl lg:text-4xl">
              One Platform to End All Customer Communication Chaos
            </h2>
          </div>
          <div className="w-fit flex flex-row justify-center items-center lg:w-full">
            <ul className="w-full h-full flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Switching between 10 different apps just to reply to customers
                </h3>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Sending broadcasts manually or using messy Excel lists
                </h3>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Missing chats at night & weekends because no one’s online
                </h3>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Team giving wrong answers due to missing conversation history
                </h3>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Guessing which campaign actually drives sales
                </h3>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl max-w-xl font-semibold leading-snug lg:text-2xl">
                  Worried about data leaks or sudden server downtime
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
