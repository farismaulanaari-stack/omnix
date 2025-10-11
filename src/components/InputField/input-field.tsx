"use client";

import { InputFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";

export function InputField({
  label,
  htmlFor,
  type,
  addOn,
  addOnElement,
  ...props
}: InputFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput type={type} id={htmlFor} {...props} />
        {addOn ? <InputGroupAddon></InputGroupAddon> : ""}
      </InputGroup>
    </Field>
  );
}
