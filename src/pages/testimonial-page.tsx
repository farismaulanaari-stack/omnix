import { TestimonialCard } from "@/components/TestimonialCard/testimonial-card";
import { staticTestimonialsData } from "../../public/data/static-testimonials";

export default function TestimonialPage() {
  return (
    // main section (testimonial page)
    <section className="w-full pt-36 pb-16 px-3 lg:px-0">
      {/* container section */}
      <div className="container mx-auto flex flex-col gap-10">
        {/* content items */}
        <div className="w-full flex flex-col items-center gap-3">
          <div className="w-fit px-6 py-1 bg-indigo-100 ring-2 ring-indigo-600 rounded-full">
            <p className="font-semibold text-base">omnix testimonials</p>
          </div>
          <h2 className="capitalize text-5xl font-bold text-center leading-snug lg:leading-normal">
            more than 17,000 happy users
          </h2>
          <p className="text-sm font-medium text-black/60 text-center max-w-2xl leading-relaxed lg:text-base lg:leading-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt neque
            quos dolores, tempore deserunt repellat culpa, nihil ad beatae magni
            nulla consequuntur facere at accusantium.
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* mapping testimonial components */}
          {staticTestimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
