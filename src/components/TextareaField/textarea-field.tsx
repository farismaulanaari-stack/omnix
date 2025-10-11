"use client";

import { TextareaFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupTextarea } from "../ui/input-group";

export function TextareaField({
    label,
    htmlFor,
    ...props
} : TextareaFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
            <InputGroup>
                <InputGroupTextarea id={htmlFor} name={htmlFor} {...props}/>
            </InputGroup>
        </Field>
    )
}