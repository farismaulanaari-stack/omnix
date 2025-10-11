"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { UserRound, Mail, Building2, TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FormField } from "@/components/FormField/form-field";
import { InputField } from "@/components/InputField/input-field";
import { TextareaField } from "@/components/TextareaField/textarea-field";

export default function ContactPage() {
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
            <FormField className="w-full h-full">
              <div className="w-full flex items-center gap-3">
                <InputField 
                  type="text"
                  label="name"
                  htmlFor="name"
                  placeholder="Jhon Doe"
                />
                <InputField 
                  type="text"
                  label="company name"
                  htmlFor="company_name"
                  placeholder="omnix.inc"
                />
              </div>
              <div className="w-full flex items-center gap-3">
                <InputField 
                  type="text"
                  label="phone number"
                  htmlFor="phone_number"
                  placeholder="+91 1234567890"
                />
                <InputField 
                  type="text"
                  label="email"
                  htmlFor="email"
                  placeholder="example@mail.com"
                />
              </div>
              <InputField 
                type="text"
                label="subject message"
                htmlFor="subject_message"
                placeholder="i want to build custom platform with omnix"
              />
              <TextareaField label="message" htmlFor="message" className="resize-y min-h-36 max-h-56"/>
              <CardFooter className="w-full bg-blue-200 mt-auto">
                <Button className="w-full">submit your message</Button>
              </CardFooter>
            </FormField>
          </CardContent>
      </Card>
    </>
  );
}
