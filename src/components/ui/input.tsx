import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        dafultInput: "",
        defaultOmnix: "",
      },
    },
    defaultVariants: {
      variant: "dafultInput",
    },
  }
);

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input };
