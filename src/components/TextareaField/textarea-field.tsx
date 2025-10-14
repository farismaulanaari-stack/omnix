"use client";

import { TextareaFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "../ui/input-group";
import { MessageSquareTextIcon } from "lucide-react";

export function TextareaField({
  label,
  htmlFor,
  error,
  errorMsg,
  ...props
}: TextareaFieldProps) {
  return (
    <Field data-invalid={error ? true : false}>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id={htmlFor}
          name={htmlFor}
          {...props}
          aria-invalid={error ? true : false}
        />
        <InputGroupAddon
          className={`w-full py-2 border-2 rounded-t-xl ${
            error ? "border-destructive" : ""
          }`}
          align={"block-start"}
        >
          <MessageSquareTextIcon
            className={`w-6 h-6 ${
              error ? "text-destructive" : "text-indigo-600"
            }`}
          />
          <p
            className={`text-sm font-medium ${
              error ? "text-destructive" : "text-black/50"
            }`}
          >
            {errorMsg ? errorMsg : "leave your message to omnix below."}
          </p>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
