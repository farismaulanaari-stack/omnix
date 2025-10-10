"use client";

import { Field, FieldSet, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { UserRound, Mail, Building2, TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Card className="w-1/2 h-4/5 bg-indigo-100 ring ring-indigo-600/20 shadow-none rounded-r-none"></Card>
      <Card className="w-1/2 h-5/6 ring ring-black/20 shadow-none rounded-l-none py-0">
        <form
          action=""
          className="w-full h-full py-6 flex flex-col justify-between gap-6"
        >
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
            <FieldSet className="w-full h-full">
              <FieldGroup className="w-full h-full">
                <div className="w-full flex items-center justify-between gap-6">
                  <Field>
                  <FieldLabel>name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput type="text"/>
                    <InputGroupAddon>
                      <UserRound className="text-indigo-600 w-5 h-5"/>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                  <Field>
                  <FieldLabel>company</FieldLabel>
                  <InputGroup>
                    <InputGroupInput type="text"/>
                    <InputGroupAddon>
                      <Building2 className="text-indigo-600 w-5 h-5"/>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                </div>
                <div className="w-full flex items-center justify-between gap-6">
                  <Field>
                  <FieldLabel>phone number</FieldLabel>
                  <InputGroup>
                    <InputGroupInput type="number"/>
                    <InputGroupAddon>
                      <p className="text-indigo-600">+62</p>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                  <Field>
                  <FieldLabel>email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput type="email"/>
                    <InputGroupAddon>
                      <Mail className="text-indigo-600 w-5 h-5"/>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                </div>
                <Field>
                  <FieldLabel>subject message</FieldLabel>
                  <InputGroup>
                    <InputGroupInput type="text"/>
                    <InputGroupAddon>
                      <TextAlignStart className="w-5 h-5 text-indigo-600"/>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field className="h-full">
                  <FieldLabel>message</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea className="h-full"/>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="w-full h-[8%]">
            <Button type="submit" className="w-full h-full">
              <p className="text-base font-medium">send your message</p>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
