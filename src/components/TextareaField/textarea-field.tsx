"use client";

import { TextareaFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";

export function TextareaField({
    label,
    htmlFor,
    error,
    errorMsg,
    ...props
} : TextareaFieldProps) {
    return (
        <Field data-invalid={error ? true : false} >
            <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
            <InputGroup>
                <InputGroupTextarea id={htmlFor} name={htmlFor} {...props} aria-invalid={error ? true : false}/>
            </InputGroup>
        </Field>
    )
}