import * as SelectPrim from "@radix-ui/react-select";
import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface PricingIconProps {
  variant: "starter" | "professional" | "enterprise";
}

export interface PricingCardProps {
  variant: "starter" | "professional" | "enterprise";
  title: string;
  description: string;
  price: string;
  listFeatures: string[];
}

export interface IndustryCardProps extends HTMLAttributes<HTMLDivElement> {
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string | undefined;
}

export interface SolutionCardProps {
  title?: string;
  description?: string;
  href: string;
  Icon?: LucideIcon;
  className?: string;
}

export interface CustomBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "default" | "secondary" | "destructive" | "outline";
  children: React.ReactNode;
}

export interface FeaturesCardProps {
  index: number;
  title: string;
  description: string;
  image: string | StaticImport;
}

export interface FooterListItemProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

export interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | undefined;
  htmlFor: string | undefined;
  className: string | undefined;
  errorMsg: string | React.ReactElement | undefined;
}

export interface TextareaGroupProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string | undefined;
  htmlFor: string | undefined;
  className: string | undefined;
}

export interface SelectGroupProp
  extends React.ComponentProps<typeof SelectPrim.Root> {
  label: string;
  htmlFor: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  onvalchange: (service: string) => void;
}

export interface NewsLetterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string | undefined;
}

export interface NewsLetterData {
  email_address: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  formButton: boolean;
  loading?: boolean;
}

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  Icon?: LucideIcon;
  loading?: boolean;
}

export interface OverviewCardProps extends HTMLAttributes<HTMLDivElement> {
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}
