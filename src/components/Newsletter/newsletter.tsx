"use client";

import { useLoading } from "@/hooks/use-loading";
import { cn } from "@/lib/utils";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useForm, SubmitHandler } from "react-hook-form";
import { NewsLetterData, NewsLetterProps } from "@/types/types";
import { Spinner } from "../ui/spinner";

export function NewsletterComponent({ className }: NewsLetterProps) {
  // usestate for save loading state
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
  } = useForm<NewsLetterData>();

  const onSubmit: SubmitHandler<NewsLetterData> = (data) => {
    if (isValid) resetField("email_address");
    console.log(data);
  };

  // useLoading returns { isLoading, trigger }
  // trigger should be passed to react-hook-form's handleSubmit so
  // the loading lifecycle starts when the form is submitted.
  const { isLoading, trigger } = useLoading(1000, onSubmit);
  return (
    <div
      className={cn(
        "w-full h-[300px] bg-black rounded-xl rounded-t-none flex flex-row gap-3 justify-center items-center",
        className
      )}
    >
      <div className="w-full max-w-[996px] flex flex-col gap-6">
        <h2 className="text-white font-bold text-4xl max-w-3xl">
          Get all of our updates directly to your inbox. Sign up for our
          newsletter.
        </h2>
        <p className="text-white font-normal text-base max-w-xl">
          Lorem ipsum elit nascetur sed a elit et ullamcorper pretium elementum
          aenean lectus tincidunt nibh ut pellentesque pulvinar ipsum at.
        </p>
        <form
          onSubmit={handleSubmit(trigger)}
          className="flex flex-col items-start justify-center gap-3 w-fit"
        >
          <div className="flex flex-row items-center justify-between gap-3 w-fit">
            <Input
              type="email"
              className="bg-white placeholder:text-sm placeholder:font-medium focus-visible:border-indigo-100 focus-visible:ring-indigo-600 focus-visible:ring-[3px] aria-invalid:bg-red-100 aria-invalid:placeholder:text-red-600"
              placeholder="Enter your email address"
              aria-invalid={errors.email_address?.message ? true : false}
              {...register("email_address", {
                required: "email address is required",
                minLength: {
                  value: 5,
                  message: "minimal length of email address is 5",
                },
              })}
            />
            <Button
              variant={"default"}
              size={"default"}
              type="submit"
              className="bg-indigo-600 text-white px-6 hover:bg-indigo-950 active:bg-indigo-800 w-28"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <Spinner /> : "subscribe"}
            </Button>
          </div>
          {/* validation message */}
          {errors.email_address?.message && (
            <p className="text-sm text-red-600">
              {errors.email_address.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
