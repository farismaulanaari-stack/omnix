import { PricingIcon } from "@/components/PricingIcons/pricing-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { CheckCheckIcon } from "lucide-react";

export default function PricingPage() {
  return (
    <section className="w-full bg-linear-180 from-white from-50% to-indigo-600 pt-36">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="w-full flex flex-col items-center gap-3.5">
          <div className="w-fit px-6 py-1 ring-2 ring-indigo-600 bg-indigo-200 rounded-full">
            <p className="text-lg font-semibold">omnix pricing plan</p>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-bold text-6xl text-center leading-tight">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg font-medium text-black/50 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa consequatur vel doloremque ipsa maxime illum, accusamus a
              inventore dolorem.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-6">
          <Card className="w-full h-[800px] ring ring-black/20 border-none bg-white shadow-none rounded-4xl rounded-b-none p-0">
            <CardHeader className="p-5 flex flex-col gap-4">
              <PricingIcon variant="starter" />
              <div className="w-full flex flex-col gap-2">
                <CardTitle className="text-xl font-bold">
                  Starter (for small teams)
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  Perfect for freelancers or small businesses who want to
                  simplify client communication.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="w-full h-full py-0 px-6 flex flex-col gap-6">
              <div className="w-full">
                <h2 className="font-semibold text-4xl text-black">
                  $9,500{" "}
                  <span className="text-lg font-medium text-black/50">
                    /month
                  </span>
                </h2>
              </div>
              <div className="w-full">
                <Button className="w-full p-6 bg-green-500 rounded-lg">
                  <p className="text-base">choose this plan</p>
                </Button>
              </div>
              <div className="w-full h-full flex flex-col gap-3">
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-black">
                    includes:
                  </h2>
                </div>
                <ul className="w-full h-full flex flex-col gap-10">
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-[800px] ring ring-black/20 border-none bg-white shadow-none rounded-4xl rounded-b-none p-0">
            <CardHeader className="p-5 flex flex-col gap-4">
              <PricingIcon variant="professional" />
              <div className="w-full flex flex-col gap-2">
                <CardTitle className="text-xl font-bold">
                  Professional (for Growing Teams)
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  Designed for mid-sized teams that need powerful automation and
                  deeper insights.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="w-full h-full py-0 px-6 flex flex-col gap-6">
              <div className="w-full">
                <h2 className="font-semibold text-4xl text-black">
                  $29,200{" "}
                  <span className="text-lg font-medium text-black/50">
                    /month
                  </span>
                </h2>
              </div>
              <div className="w-full">
                <Button className="w-full p-6 bg-blue-500 rounded-lg">
                  <p className="text-base">choose this plan</p>
                </Button>
              </div>
              <div className="w-full h-full flex flex-col gap-3">
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-black">
                    includes:
                  </h2>
                </div>
                <ul className="w-full h-full flex flex-col gap-10">
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-[800px] ring ring-black/20 border-none bg-white shadow-none rounded-4xl rounded-b-none p-0">
            <CardHeader className="p-5 flex flex-col gap-4">
              <PricingIcon variant="enterprise" />
              <div className="w-full flex flex-col gap-2">
                <CardTitle className="text-xl font-bold">
                  Enterprise (Custom Solutions)
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  Tailored for organizations that demand security, scalability,
                  and dedicated support.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="w-full h-full py-0 px-6 flex flex-col gap-6">
              <div className="w-full">
                <h2 className="font-semibold text-4xl text-black">
                  custom tailored
                </h2>
              </div>
              <div className="w-full">
                <Button className="w-full p-6 bg-indigo-500 rounded-lg">
                  <p className="text-base">contact us for more</p>
                </Button>
              </div>
              <div className="w-full h-full flex flex-col gap-3">
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-black">
                    includes:
                  </h2>
                </div>
                <ul className="w-full h-full flex flex-col gap-10">
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                  <li className="w-full flex items-center gap-2">
                    <CheckCheckIcon className="w-6 h-6 text-green-500" />
                    <h4 className="text-base text-black/50 font-medium">
                      Lorem, ipsum dolor.
                    </h4>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
