export default function ContactPageLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="w-full h-screen">
            <div className="container mx-auto w-full h-full flex items-center justify-center">
                { children }
            </div>
        </section>
    )
}