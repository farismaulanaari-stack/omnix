"use client"

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Card className="w-1/2 h-4/5 bg-indigo-100 ring ring-indigo-600/20 shadow-none rounded-r-none"></Card>
      <Card className="w-1/2 h-5/6 ring ring-black/20 shadow-none rounded-l-none py-0">
        <form action="" className="w-full h-full py-6 flex flex-col justify-between gap-6">
            <CardHeader className="w-full flex flex-col gap-3">
                <CardTitle className="text-4xl font-bold w-full">Send Us a Message</CardTitle>
                <CardDescription className="text-base font-medium text-black/50 w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, natus iusto quas nostrum illum minus molestias nulla iure dolorem sed!</CardDescription>
            </CardHeader>
            <CardContent className="w-full h-full bg-orange-200"></CardContent>
            <CardFooter className="w-full h-[8%]">
                <Button type="submit" className="w-full h-full">
                    <p className="text-base font-medium">send your message</p>
                </Button>
            </CardFooter>
        </form>
      </Card>
    </>
  );
}
