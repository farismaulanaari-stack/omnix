"use client";

import { useContactForm } from "@/hooks/use-contact-form";
import { Controller } from "react-hook-form";

import { InputGroup } from "../InputGroup/input-group";
import { TextareaGroup } from "../TextareaGroup/textarea-group";
import { SelectGroup } from "../SelectGroup/select-group";
import { HorizontalInputWrapper } from "../HorizontalInputWrapper/horizontal-input-wrapper";
import { Form } from "../Form/form";

import { omnixServiceConstants } from "@/constants/omnix-service";

export function ContactForm() {
  const { form, isLoading, trigger } = useContactForm();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <Form onSubmit={handleSubmit(trigger)} formButton loading={isLoading}>
      <HorizontalInputWrapper>
        <InputGroup
          label="Full name"
          htmlFor="full_name"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="ex: Jhon Doe"
          errorMsg={errors.full_name?.message}
          aria-invalid={errors.full_name ? "true" : "false"}
          {...register("full_name")}
        />
        <InputGroup
          label="Email address"
          htmlFor="email_address"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="ex: jhondoe@email.com"
          errorMsg={errors.email_address?.message}
          aria-invalid={errors.email_address ? "true" : "false"}
          {...register("email_address")}
        />
      </HorizontalInputWrapper>
      <HorizontalInputWrapper>
        <InputGroup
          label="Company or Organization"
          htmlFor="company_or_organization"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="PT. Omnix Indonesia"
          errorMsg={errors.company_or_organization?.message}
          aria-invalid={errors.company_or_organization ? "true" : "false"}
          {...register("company_or_organization")}
        />
        <InputGroup
          label="Phone number"
          htmlFor="phone_number"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="ex: +62 8123456789"
          errorMsg={errors.phone_number?.message}
          aria-invalid={errors.phone_number ? "true" : "false"}
          {...register("phone_number")}
        />
      </HorizontalInputWrapper>
      <Controller
        control={control}
        name="omnix_service"
        render={({ field }) => (
          <SelectGroup
            label="Choose omnix service"
            htmlFor="omnix_service"
            placeholder="Select a service..."
            options={omnixServiceConstants}
            className="focus-visible:border-indigo-600 focus-visible:ring-indigo-100 focus-visible:ring-[3px]"
            value={field.value}
            onvalchange={field.onChange}
          />
        )}
      />
      <TextareaGroup
        label="Tell us about your business inquiries"
        htmlFor="message_text"
        className="text-base font-normal text-black min-h-[200px] resize-none"
        aria-invalid={errors.message_text ? "true" : "false"}
        {...register("message_text", {
          required: "Message text is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })}
      />
    </Form>
  );
}
