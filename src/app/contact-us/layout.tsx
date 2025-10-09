export default function ContactPageLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="w-full h-screen">
            <div className="container w-full h-full flex items-center justify-center">
                { children }
            </div>
        </section>
    )
}