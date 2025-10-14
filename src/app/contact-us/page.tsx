"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ContactUsData } from "@/types/types";
import { contactSchema } from "@/schema/contact-schema";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  UserRound,
  Mail,
  Building2,
  TextAlignStart,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { FormField } from "@/components/FormField/form-field";
import { InputField } from "@/components/InputField/input-field";
import { TextareaField } from "@/components/TextareaField/textarea-field";
import { InputGroupAddon } from "@/components/ui/input-group";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactUsData>();

  const onSubmit: SubmitHandler<ContactUsData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Card className="w-1/2 h-4/5 bg-indigo-100 ring ring-indigo-600/20 shadow-none rounded-r-none"></Card>
      <Card className="w-1/2 h-5/6 ring ring-black/20 shadow-none rounded-l-none py-6">
        <CardHeader className="w-full flex flex-col gap-3">
          <CardTitle className="text-4xl font-bold w-full">
            Send Us a Message
          </CardTitle>
          <CardDescription className="text-base font-medium text-black/50 w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            natus iusto quas nostrum illum minus molestias nulla iure dolorem
            sed!
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full h-full">
          <FormField
            className="w-full h-full"
            OnSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex items-center gap-3">
              <InputField
                type="text"
                label="name"
                htmlFor="name"
                placeholder="Jhon Doe"
                error={errors.name ? true : false}
                className="aria-invalid:placeholder:text-destructive"
                {...register("name", { required: true, minLength: 3 })}
              >
                <InputGroupAddon>
                  <UserRound className="w-5 h-5 text-indigo-600" />
                </InputGroupAddon>
              </InputField>
              <InputField
                type="text"
                label="company name"
                htmlFor="company_name"
                placeholder="omnix.inc"
                error={errors.company_name ? true : false}
                className="aria-invalid:placeholder:text-destructive"
                {...register("company_name", { required: true, minLength: 3 })}
              >
                <InputGroupAddon>
                  <Building2 className="w-5 h-5 text-indigo-600" />
                </InputGroupAddon>
              </InputField>
            </div>
            <div className="w-full flex items-center gap-3">
              <InputField
                type="text"
                label="phone number"
                htmlFor="phone_number"
                placeholder="+91 1234567890"
                error={errors.phone_number ? true : false}
                className="aria-invalid:placeholder:text-destructive"
                {...register("phone_number", {
                  required: true,
                  minLength: 6
                })}
              >
                <InputGroupAddon>
                  <Phone className="w-5 h-5 text-indigo-600" />
                </InputGroupAddon>
              </InputField>
              <InputField
                type="text"
                label="email"
                htmlFor="email"
                placeholder="example@mail.com"
                error={errors.email ? true : false}
                className="aria-invalid:placeholder:text-destructive"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              >
                <InputGroupAddon>
                  <Mail className="w-5 h-5 text-indigo-600" />
                </InputGroupAddon>
              </InputField>
            </div>
            <InputField
              type="text"
              label="subject message"
              htmlFor="subject_message"
              placeholder="i want to build custom platform with omnix"
              error={errors.subject_mesage ? true : false}
              className="aria-invalid:placeholder:text-destructive"
              {...register("subject_mesage")}
            >
              <InputGroupAddon>
                <TextAlignStart className="w-5 h-5 text-indigo-600" />
              </InputGroupAddon>
            </InputField>
            <TextareaField
              label="message"
              htmlFor="message"
              className="resize-y min-h-36 max-h-56"
              {...register("message", { required: true, minLength: 10 })}
            />
            <CardFooter className="w-full mt-auto px-0">
              <Button className="w-full">submit your message</Button>
            </CardFooter>
          </FormField>
        </CardContent>
      </Card>
    </>
  );
}
