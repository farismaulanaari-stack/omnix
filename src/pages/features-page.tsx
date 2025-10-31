import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <section className="w-full px-3 pt-36 pb-16 lg:px-0">
      <div className="container w-full flex flex-col gap-20 mx-auto">
        <div className="w-full flex flex-col gap-3.5 items-center">
          <div className="w-fit px-4 py-1 bg-indigo-200 ring-2 ring-indigo-600 rounded-full lg:px-6">
            <p className="text-sm font-semibold text-black lg:text-lg">
              omnix core features
            </p>
          </div>
          <h2 className="text-4xl font-bold max-w-3xl text-center leading-tight lg:text-5xl">
            core features that make our platform unique
          </h2>
          <p className="text-base font-medium max-w-md text-center text-black/50 lg:text-lg lg:max-w-xl">
            Discover the power of our features spotlight and unleash the full
            potential of our platform
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-none border-none ring ring-border rounded-xl p-3.5 flex flex-col gap-2.5">
            <CardHeader className="w-full h-[200px] overflow-hidden p-0"></CardHeader>
            <CardContent className="w-full h-fit flex flex-col gap-1.5 p-0">
              <CardTitle className="flex flex-row items-center gap-2.5">
                <span className="text-2xl font-bold italic text-indigo-600">
                  01.
                </span>
                <p className="text-xl font-bold">Lorem, ipsum dolor.</p>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-black max-h-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nemo exercitationem atque consequatur natus ipsam
                veniam voluptates blanditiis officiis incidunt.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
