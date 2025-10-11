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
          <FormField>
            <InputField 
              label="name"
              htmlFor="name"
              type="text"
            />
            <InputField 
              label="name"
              htmlFor="name"
              type="text"
            />
            <InputField 
              label="name"
              htmlFor="name"
              type="text"
            />
          </FormField>
      </Card>
    </>
  );
}
