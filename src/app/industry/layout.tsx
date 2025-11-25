export default function IndustriesPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-0">{children}</div>
    </section>
  );
}
