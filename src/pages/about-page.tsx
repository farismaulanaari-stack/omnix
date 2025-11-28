import Image from "next/image";
import MeetingImage from "../../public/images/meeting.jpg";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    // main section (about page)
    <section className="w-full pt-36 pb-16" id="about-omnix">
      {/* container section */}
      <div className="container w-full mx-auto">
        <div className="w-full flex flex-col-reverse items-center justify-start gap-10 px-5 lg:flex-row lg:gap-6">
          {/* about page content item */}
          <div className="w-full h-[700px] bg-red-200 rounded-xl lg:w-1/2">
            <Card className="w-full h-full shadow-none flex flex-col gap-0 p-0 border-none">
              <CardHeader className="w-full flex flex-row items-center pb-5 px-0">
                <span className="px-4 py-1 ring-2 ring-indigo-600 bg-indigo-200 rounded-full w-fit lg:px-6">
                  <p className="text-sm font-semibold text-black lg:text-base">
                    what is omnix, and what they do?
                  </p>
                </span>
              </CardHeader>
              <CardContent className="w-full h-fit flex flex-col gap-5 px-0 pb-10 lg:h-full lg:pb-0">
                <CardTitle className="text-2xl font-bold leading-normal lg:text-4xl">
                  Connecting Every Conversation, Empowering Every Business.
                </CardTitle>
                <CardDescription className="text-lg font-medium leading-relaxed text-black text-justify lg:text-lg">
                  Built for modern businesses,{" "}
                  <b>Omnix combines omnichannel messaging</b> and{" "}
                  <b>broadcast automation</b> in one powerful dashboard. Whether
                  you’re managing chats from WhatsApp, Telegram, or Instagram,
                  Omnix ensures every interaction feels seamless and personal.
                  With Omnix, businesses can strengthen customer relationships,
                  save time through automation, and make data-driven
                  communication effortless.
                </CardDescription>
              </CardContent>
              <Separator className="bg-black/30" />
              <CardFooter className="w-full h-full pt-5 flex flex-col items-center justify-center gap-3 px-0 lg:h-1/2 lg:pt-0 lg:flex-row">
                <div className="w-full h-full flex flex-row items-center gap-3 lg:flex-col lg:h-3/4">
                  <div className="w-fit h-full flex items-center justify-center lg:w-full">
                    <h2 className="font-semibold text-6xl text-black lg:text-7xl">
                      80%
                    </h2>
                  </div>
                  <div className="w-full h-fit max-h-full lg:max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      of businesses report faster response times with Omnix
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-row items-center gap-3 lg:flex-col lg:h-3/4">
                  <div className="w-fit h-full flex items-center justify-center lg:w-full">
                    <h2 className="font-semibold text-6xl text-black lg:text-7xl">
                      85%
                    </h2>
                  </div>
                  <div className="w-full h-fit max-h-full lg:max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      reduction in missed customer messages after switching to
                      Omnix
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-row items-center gap-3 lg:flex-col lg:h-3/4">
                  <div className="w-fit h-full flex items-center justify-center lg:w-full">
                    <h2 className="font-semibold text-6xl text-black lg:text-7xl">
                      24/7
                    </h2>
                  </div>
                  <div className="w-full h-fit max-h-full lg:max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      customer support coverage without adding extra staff
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full h-[700px] rounded-xl overflow-hidden lg:w-1/2">
            <Image
              src={MeetingImage}
              alt="meeting-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
