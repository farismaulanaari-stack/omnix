"use client";

import { FieldGroup } from "../ui/field"

export function FormField({
    OnSubmit,
    children
} : Readonly<{
    OnSubmit?: () => void,
    children: React.ReactNode
}>) {
    return (
        <form className="w-full h-full" onSubmit={OnSubmit}>
            <FieldGroup className="w-full h-full px-6">
                { children }
            </FieldGroup>
        </form>
    )
}