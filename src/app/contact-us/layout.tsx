import { NewsletterComponent } from "@/components/Newsletter/newsletter";

export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full pt-36 pb-16">
      <div className="container mx-auto flex flex-col gap-0">
        <div className="w-full rounded-xl rounded-b-none bg-gray-100 p-3 flex items-start justify-between gap-0">
          {children}
        </div>
        <NewsletterComponent />
      </div>
    </section>
  );
}
