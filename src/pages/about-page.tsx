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
    <section className="w-full pt-36 pb-16">
      <div className="container w-full mx-auto flex items-center justify-center">
        <div className="w-full flex items-center justify-center gap-6">
          <div className="w-1/2 h-[700px] bg-red-200 rounded-xl">
            <Card className="w-full h-full shadow-none flex flex-col gap-0 p-0 border-none">
              <CardHeader className="w-full flex flex-row items-center p-0">
                <span className="px-6 py-1 ring-2 ring-indigo-600 bg-indigo-200 rounded-full w-fit">
                  <p className="text-base font-semibold text-black">about us</p>
                </span>
              </CardHeader>
              <CardContent className="w-full h-full flex flex-col gap-5 px-0 py-10">
                <CardTitle className="text-4xl font-bold leading-normal">
                  Connecting Every Conversation, Empowering Every Business.
                </CardTitle>
                <CardDescription className="text-lg font-medium leading-relaxed text-black">
                  Built for modern businesses, <b>Omnix combines omnichannel
                  messaging</b> and <b>broadcast automation</b> in one powerful dashboard.
                  Whether you’re managing chats from WhatsApp, Telegram, or
                  Instagram, Omnix ensures every interaction feels seamless and
                  personal. With Omnix, businesses can strengthen customer
                  relationships, save time through automation, and make
                  data-driven communication effortless.
                </CardDescription>
              </CardContent>
              <Separator className="bg-black/30" />
              <CardFooter className="w-full h-1/2 flex items-center justify-center px-0">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full flex items-center justify-center">
                    <h2 className="font-medium text-7xl text-black">80%</h2>
                  </div>
                  <div className="w-full max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full flex items-center justify-center">
                    <h2 className="font-medium text-7xl text-black">80%</h2>
                  </div>
                  <div className="w-full max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full flex items-center justify-center">
                    <h2 className="font-medium text-7xl text-black">80%</h2>
                  </div>
                  <div className="w-full max-h-1/2">
                    <p className="text-sm font-medium text-black/50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="w-1/2 h-[700px] rounded-xl overflow-hidden">
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
