import Link from "next/link";
import Image from "next/image";
import EmailIllustration from "../../public/images/email-illustration.svg";
import RobotIllustration from "../../public/images/robot-illustration.svg";
import TeamIllustration from "../../public/images/team-illustration.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ChartAreaIcon,
  GitForkIcon,
  InboxIcon,
  LockIcon,
  MegaphoneIcon,
  WaypointsIcon,
} from "lucide-react";

export default function SolutionsOverviewPage() {
  return (
    <section className="w-full pt-36 pb-16 px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-9">
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-3 lg:row-span-3"
            id="unified-inbox"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <InboxIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full lg:h-fit">
              <CardTitle className="text-2xl font-bold text-black">
                One Inbox for All Channels
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium max-w-sm">
                No more jumping between WhatsApp, Instagram, Telegram, or
                Facebook Messenger. Every customer message lands in a single,
                clean inbox—organized, searchable, and always up to date.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
            <div className="hidden w-fit h-fit flex-row items-end absolute bottom-0 right-0 xl:flex">
              <Image
                src={EmailIllustration}
                alt="email illustration"
                width={250}
                height={250}
              />
            </div>
          </Card>
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-2 lg:row-span-3 lg:col-start-4"
            id="analytic-dashboard"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <ChartAreaIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full">
              <CardTitle className="text-2xl font-bold text-black">
                Know Exactly What Works
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium">
                Real-time reports show your best-performing campaigns, busiest
                hours, agent performance, and revenue generated from chats. Stop
                guessing—start making data-driven decisions.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-2 lg:row-span-3 lg:row-start-4"
            id="broadcast-automation"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <MegaphoneIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full">
              <CardTitle className="text-2xl font-bold text-black">
                Reach Thousands in Seconds
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium">
                Send personalized promotions, announcements, or updates to your
                entire contact list instantly. Schedule campaigns, segment
                audiences, and track delivery & open rates—all from one click.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-3 lg:row-span-3 lg:col-start-3 lg:row-start-4"
            id="automation-chatbot"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <GitForkIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full lg:h-fit">
              <CardTitle className="text-2xl font-bold text-black">
                Never Sleep on Customer Chats
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium max-w-none lg:max-w-sm">
                AI-powered chatbot answers common questions 24/7 in seconds.
                Handles greetings, FAQs, order status, and seamlessly transfers
                complex issues to your team when needed.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
            <div className="hidden w-fit h-fit flex-row items-end absolute bottom-0 right-0 xl:flex">
              <Image
                src={RobotIllustration}
                alt="email illustration"
                width={250}
                height={250}
              />
            </div>
          </Card>
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-3 lg:row-span-3 lg:row-start-7"
            id="team-collaboration"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <WaypointsIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full lg:h-fit">
              <CardTitle className="text-2xl font-bold text-black">
                Your Team, Perfectly Synced
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium max-w-none lg:max-w-sm">
                Assign conversations, add internal notes, mention teammates, and
                see full chat history. Everyone stays on the same page—no more
                “who’s handling this?” confusion.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
            <div className="hidden w-fit h-fit flex-row items-end absolute bottom-0 right-0 xl:flex">
              <Image
                src={TeamIllustration}
                alt="email illustration"
                width={250}
                height={250}
              />
            </div>
          </Card>
          <Card
            className="min-h-[400px] flex flex-col gap-4 relative lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-7"
            id="secure-and-reilable"
          >
            <CardHeader className="w-full">
              <div className="w-fit p-2.5 bg-indigo-100 rounded-full">
                <LockIcon className="size-9 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 h-full">
              <CardTitle className="text-2xl font-bold text-black">
                Enterprise-Grade Security & Uptime
              </CardTitle>
              <CardDescription className="text-sm text-black font-medium max-w-none lg:max-w-sm">
                AI-powered chatbot answers common questions 24/7 in seconds.
                Handles greetings, FAQs, order status, and seamlessly transfers
                complex issues to your team when needed.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={"/contact-us"}>
                <Button className="w-fit h-fit px-6 py-2  rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <p className="text-base font-semibold text-white">
                    get started
                  </p>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
