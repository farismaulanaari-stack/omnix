import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <section className="w-full pt-36 pb-16">
      <div className="container w-full flex flex-col gap-20 mx-auto">
        <div className="w-full flex flex-col gap-3.5 items-center">
          <div className="w-fit px-6 py-1 bg-indigo-200 ring-2 ring-indigo-600 rounded-full">
            <p className="text-lg font-semibold text-black">
              omnix core features
            </p>
          </div>
          <h2 className="text-6xl font-bold max-w-3xl text-center leading-tight">
            core features that make our platform unique
          </h2>
          <p className="text-lg font-medium max-w-xl text-center text-black/50">
            Discover the power of our features spotlight and unleash the full
            potential of our platform
          </p>
        </div>
        <div className="w-full min-h-[800px] grid grid-cols-7 grid-rows-6 gap-4">
          <Card className="col-span-3 row-span-3 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
          <Card className="col-span-2 row-span-3 col-start-4 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
          <Card className="col-span-2 row-span-3 col-start-6 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
          <Card className="col-span-2 row-span-3 row-start-4 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
          <Card className="col-span-2 row-span-3 col-start-3 row-start-4 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
          <Card className="col-span-3 row-span-3 col-start-5 row-start-4 shadow-none p-3 flex flex-col gap-3 relative">
            <CardHeader className="rounded-md shadow-none ring ring-black/20 h-[250px]"></CardHeader>
            <CardContent className="px-0">
              <CardTitle className="text-lg font-bold">Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius ex dolorem consectetur perferendis quas!</CardDescription>
            </CardContent>
          <CardFooter className="w-full px-0 flex items-center gap-0">
            <Button variant={"outline"} className="rounded-full px-6 py-0.5 h-8">
              <p className="text-sm font-medium">more about this feature</p>
            </Button>
            <Button variant={"outline"} className="w-8 h-8 rounded-full px-0">
              <ArrowUpRightIcon />
            </Button>
          </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
