"use client";

import { InputFieldProps } from "@/types/types";
import { Field, FieldLabel, FieldError } from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
} from "../ui/input-group";

export function InputField({
  label,
  htmlFor,
  children,
  error,
  errorMsg,
  ...props
}: InputFieldProps) {
  return (
    <Field data-invalid={error ? true : false} >
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput id={htmlFor} name={htmlFor} {...props} aria-invalid={error ? true : false}/>
        { children }
      </InputGroup>
      {errorMsg && <FieldError errors={errorMsg}/>}
    </Field>
  );
}
