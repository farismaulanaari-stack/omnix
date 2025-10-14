import { User2Icon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"

export function IndustryCard() {
    return (
        <Card className="w-full h-full shadow-none ring ring-black/15 p-2 border-none">
            <CardHeader className="w-full h-full p-0 flex flex-row items-center gap-2">
                <div className="w-1/4 h-full rounded-md bg-indigo-200 flex items-center justify-center">
                    <User2Icon className="w-6 h-6 text-indigo-600"/>
                </div>
                <div className="w-full h-full flex flex-col">
                    <CardTitle className="text-indigo-600 font-semibold text-sm">Industry</CardTitle>
                    <CardDescription className="font-normal text-xs">Lorem ipsum dolor sit amet.</CardDescription>
                </div>
            </CardHeader>
        </Card>
    )
}