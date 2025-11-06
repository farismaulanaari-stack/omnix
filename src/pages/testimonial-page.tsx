import { TestimonialCard } from "@/components/TestimonialCard/testimonial-card";

const testimonials = [
  {
    name: "Sarah Gunawan",
    role: "Customer Support Lead",
    company: "BelanjaMart",
    rating: 4.9,
    testimonial:
      "Omnix has completely transformed how our support team handles customer inquiries. With the unified inbox, we reduced response time by 47% in the first month. Everything is organized, measurable, and incredibly efficient.",
  },
  {
    name: "Rifqi Al-Farizi",
    role: "Founder",
    company: "KopiKita",
    rating: 5.0,
    testimonial:
      "Gila sih, enak banget pakai Omnix. Dulu harus buka WhatsApp sama IG satu-satu, sekarang tinggal buka satu dashboard. Hemat waktu banget dan bikin jualan makin ngebut!",
  },
  {
    name: "Amanda Lim",
    role: "Marketing Specialist",
    company: "HealthOne Clinic",
    rating: 4.8,
    testimonial:
      "Broadcast Automation helped us streamline appointment reminders and health announcements. Everything is consistent, personalized, and easy to track.",
  },
  {
    name: "Bima Prasetyo",
    role: "Customer Experience Manager",
    company: "TeknoLoka",
    rating: 4.9,
    testimonial:
      "The analytics dashboard is a game-changer. Finally, we can see which channels perform best and how our agents handle customers. The insights are incredibly valuable for scaling our CX operations.",
  },
  {
    name: "Nadia Kurniawan",
    role: "Online Seller",
    company: "Freelance",
    rating: 4.7,
    testimonial:
      "Aku suka banget fitur auto-reply Omnix! Toko online-ku jadi keliatan profesional banget. Pas aku lagi offline pun pelanggan tetap dapet respon cepat. Bener-bener ngebantu!",
  },
  {
    name: "Jonathan Lee",
    role: "Operations Supervisor",
    company: "BrightWave Manufacturing",
    rating: 4.8,
    testimonial:
      "Omnix allows our team to handle internal escalation and customer communication without delay. The role-based access ensures data is secure and agents stay focused on their responsibilities.",
  },
  {
    name: "Sinta Dewi",
    role: "Customer Relations",
    company: "MedikaCare",
    rating: 4.9,
    testimonial:
      "Omnix makes it easy to handle hundreds of patient messages daily. The automation and tagging system really save us time while keeping the experience human and warm.",
  },
  {
    name: "Arif Maulana",
    role: "Sales Executive",
    company: "RetailPoint",
    rating: 4.8,
    testimonial:
      "Sejak tim kami pakai Omnix, koordinasi antara sales dan support jadi super cepat. Fitur team collaboration-nya bener-bener bikin workflow kami jauh lebih rapi.",
  },
  {
    name: "Diana Kusumo",
    role: "Marketing Manager",
    company: "FinSync",
    rating: 4.9,
    testimonial:
      "Omnix helps us run targeted broadcast campaigns effortlessly. The engagement analytics give us exactly what we need to optimize our next move.",
  },
  {
    name: "Michael Tan",
    role: "Product Manager",
    company: "Inovatech",
    rating: 5.0,
    testimonial:
      "The secure and reliable infrastructure of Omnix gives us peace of mind. We can focus on delivering great customer experience without worrying about data safety.",
  },
];

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
          {testimonials.map((testimonial, index) => (
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
