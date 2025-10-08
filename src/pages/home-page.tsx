import Image from "next/image";
import DummyDashboard from "../../public/images/dummy-dashboard.svg";

export default function HomeSection() {
  return (
    <section className="w-full" id="home-section">
      <div className="container w-full flex flex-col mx-auto">
        <div className="w-full h-[400px] flex flex-col gap-2 items-center justify-center">
          <div className="w-fit px-6 py-1.5 ring-2 ring-indigo-600 bg-indigo-200 rounded-full flex items-center justify-center">
            <p className="font-semibold text-lg text-black">
              #1 omnichannel tools for bussiness
            </p>
          </div>
          <div className="w-full max-w-5xl">
            <h2 className="text-5xl font-bold text-center leading-normal">
              mulai terhubung dengan pelanggan anda di dalam{" "}
              <mark className="bg-brush bg-transparent pb-6 inline-block">
                satu platform.
              </mark>
            </h2>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-gray-200 rounded-2xl rounded-b-none p-5 pb-0 max-h-[800px] overflow-hidden">
            <div className="w-full bg-white rounded-md rounded-b-none overflow-hidden">
              <Image
                src={DummyDashboard}
                alt="dummy-dashboard"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
