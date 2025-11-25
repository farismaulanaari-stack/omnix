"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { InputGroup } from "../InputGroup/input-group";
import { TextareaGroup } from "../TextareaGroup/textarea-group";
import { SelectGroup } from "../SelectGroup/select-group";
import { HorizontalInputWrapper } from "../HorizontalInputWrapper/horizontal-input-wrapper";

import { ContactUsData } from "@/types/types";
import { Form } from "../Form/form";
import { useLoading } from "@/hooks/use-loading";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm<ContactUsData>();

  const onSubmit: SubmitHandler<ContactUsData> = (data) => {
    if (isValid) reset();
    toast.success(`congrats! ${data.full_name}, your message has been sent.`, {
      description:
        "The message you created has been sent and received by Omnix",
      className: "w-max p-4",
    });
    console.log(data);
  };

  const { isLoading, trigger } = useLoading(1500, onSubmit);

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
          {...register("full_name", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Full name must be at least 3 characters",
            },
          })}
        />
        <InputGroup
          label="Email address"
          htmlFor="email_address"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="ex: jhondoe@email.com"
          errorMsg={errors.email_address?.message}
          aria-invalid={errors.email_address ? "true" : "false"}
          {...register("email_address", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
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
          {...register("company_or_organization", {
            required: "Company or Organization is required",
            minLength: {
              value: 3,
              message: "Company or Organization must be at least 3 characters",
            },
          })}
        />
        <InputGroup
          label="Phone number"
          htmlFor="phone_number"
          className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
          placeholder="ex: +62 8123456789"
          errorMsg={errors.phone_number?.message}
          aria-invalid={errors.phone_number ? "true" : "false"}
          {...register("phone_number", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 characters",
            },
          })}
        />
      </HorizontalInputWrapper>
      <Controller
        control={control}
        name="omnix_service"
        rules={{
          required: {
            value: true,
            message: "omnix service is required, please choose one.",
          },
        }}
        render={({ field }) => (
          <SelectGroup
            label="Choose omnix service"
            htmlFor="omnix_service"
            placeholder="Select a service..."
            options={[
              { label: "Service A", value: "service_a" },
              { label: "Service B", value: "service_b" },
              { label: "Service C", value: "service_c" },
            ]}
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
