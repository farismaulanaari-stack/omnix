"use client";

import { cn } from "@/lib/utils";

import { formFooterProps, FormProps } from "@/types/types";
import { CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";

export function Form({ children, formButton = false, ...props }: FormProps) {
  return (
    <form className={cn("w-full h-full", props.className)}>
      <CardContent className="w-full h-full flex flex-col gap-6">
        {children}
      </CardContent>
    </form>
  );
}

export function FormFooter({ children, ...props }: formFooterProps) {
  return <CardFooter>{children}</CardFooter>;
}
