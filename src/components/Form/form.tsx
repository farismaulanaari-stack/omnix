"use client";

import { cn } from "@/lib/utils";

import { FormButtonProps, FormProps } from "@/types/types";
import { CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import { Spinner } from "../ui/spinner";

export function Form({
  children,
  formButton = false,
  loading,
  ...props
}: FormProps) {
  return (
    <form
      className={cn(
        "w-full flex flex-col gap-6 bg-white py-6 rounded-md",
        props.className
      )}
      {...props}
    >
      <CardContent className="w-full h-full flex flex-col gap-6">
        {children}
      </CardContent>
      <CardFooter>
        {formButton && (
          <FormButton textButton="send your message" loading={loading} />
        )}
      </CardFooter>
    </form>
  );
}

function FormButton({
  textButton,
  Icon = SendIcon,
  loading,
  ...props
}: FormButtonProps) {
  return (
    <Button
      variant={"default"}
      size={"lg"}
      type="submit"
      className={cn(
        "w-full bg-linear-to-r from-indigo-600 to-indigo-800 flex flex-row gap-1 group",
        props.className
      )}
    >
      {loading ? (
        <Spinner className="size-5" />
      ) : (
        <>
          <p className="text-base font-semibold">
            {textButton ? textButton : "text button here"}
          </p>
          {Icon && (
            <Icon className="size-5 transition duration-500 ease-in-out group-hover:rotate-45" />
          )}
        </>
      )}
    </Button>
  );
}
