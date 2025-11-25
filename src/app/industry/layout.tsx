export default function IndustriesPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <div className="container mx-auto px-4 flex flex-row gap-20 lg:px-0 lg:flex-col">
        {children}
      </div>
    </section>
  );
}
