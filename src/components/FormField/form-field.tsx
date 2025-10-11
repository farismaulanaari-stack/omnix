"use client";

import { FieldGroup } from "../ui/field"
import { FormFieldProps } from "@/types/types";

export function FormField({
    OnSubmit,
    children,
    ...props
} : FormFieldProps) {
    return (
        <form onSubmit={OnSubmit} {...props}>
            <FieldGroup className="w-full h-full">
                { children }
            </FieldGroup>
        </form>
    )
}