"use client";

import Image from "next/image";
import DashboardMock from "../../public/images/dashboard_example.svg";
import MobileMock from "../../public/images/mobile.svg";

export default function Home() {
  return (
    <>
      <section className="w-full bg-white px-6" id="home-section">
        <div className="container w-full flex flex-col gap-6 mx-auto md:gap-0">
          {/* Title section */}
          <div className="flex flex-col items-center justify-center text-center gap-6 py-16 md:py-24 md:gap-3">
            <div className="px-6 py-1 ring-2 ring-indigo-600 bg-indigo-50 rounded-full">
              <p className="font-semibold text-xl text-black">
                #1 omnichannel tools for business
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-snug text-black md:text-6xl md:leading-snug md:max-w-6xl md:text-center">
              mulai terhubung dengan pelanggan anda dalam{" "}
              <mark className="pb-7 bg-transparent bg-brush md:py-10">
                satu platform
              </mark>
            </h2>
          </div>

          {/* Mock section */}
          <div className="w-full flex justify-center">
            {/* Mobile mock */}
            <div className="block w-full overflow-hidden md:hidden">
              <Image
                src={MobileMock}
                alt="mobile-mock-image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dashboard mock */}
            <div className="hidden w-full overflow-hidden md:block">
              <div className="p-6 bg-gray-200 rounded-xl">
                <Image
                  src={DashboardMock}
                  alt="dashboard-mock-image"
                  className="w-full h-full object-cover object-top rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
