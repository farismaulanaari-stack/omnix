export default function ContactPageLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="w-full h-screen">
            <div className="container mx-auto w-full h-full flex items-center justify-center">
                <div className="w-7xl h-[737px] p-2 shadow-sm ring ring-black/20 flex items-start justify-between rounded-xl">
                    <div className="w-1/2 h-full rounded-md bg-indigo-600"></div>
                    {children}
                </div>
            </div>
        </section>
    )
}