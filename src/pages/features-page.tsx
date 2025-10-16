import { Card } from "@/components/ui/card";

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
          <Card className="col-span-3 row-span-3 shadow-none"></Card>
          <Card className="col-span-2 row-span-3 col-start-4 shadow-none"></Card>
          <Card className="col-span-2 row-span-3 col-start-6 shadow-none"></Card>
          <Card className="col-span-2 row-span-3 row-start-4 shadow-none"></Card>
          <Card className="col-span-2 row-span-3 col-start-3 row-start-4 shadow-none"></Card>
          <Card className="col-span-3 row-span-3 col-start-5 row-start-4 shadow-none"></Card>
        </div>
      </div>
    </section>
  );
}
