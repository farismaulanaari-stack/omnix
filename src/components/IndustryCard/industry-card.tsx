import { User2Icon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"

export function IndustryCard() {
    return (
        <Card className="w-full h-[90px] shadow-none p-2 border-none rounded-xl transition-all duration-200 ease-in-out hover:bg-indigo-50">
            <CardHeader className="w-full h-full p-0 flex flex-row items-center gap-2">
                <div className="w-1/3 h-full rounded-xl bg-indigo-50 flex items-center justify-center">
                    <User2Icon className="w-8 h-8 text-indigo-600"/>
                </div>
                <div className="w-full h-full flex flex-col">
                    <CardTitle className="text-indigo-600 font-semibold text-base">Industry</CardTitle>
                    <CardDescription className="font-medium text-sm">Lorem ipsum dolor sit amet consectetur.</CardDescription>
                </div>
            </CardHeader>
        </Card>
    )
}