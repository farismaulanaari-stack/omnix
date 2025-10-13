"use client";

import { InputFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";
import { Icon } from "lucide-react";

export function InputField({
  label,
  htmlFor,
  type,
  children,
  ...props
}: InputFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput type={type} id={htmlFor} name={htmlFor} {...props} />
        { children }
      </InputGroup>
    </Field>
  );
}
