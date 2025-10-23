import { LucideIcon } from "lucide-react";
import { FormHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface ContactUsData {
    name: string;
    company_name: string;
    phone_number: string;
    email: string;
    subject_mesage?: string;
    message: string;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    errorMsg?: string | undefined;
    label: string;
    htmlFor: string;
    children?: React.ReactNode;
}

export interface FormFieldProps extends FormHTMLAttributes<HTMLFormElement> {
    OnSubmit?: () => void;
    children: React.ReactNode;
}

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    htmlFor: string;
    error?: boolean;
    errorMsg?: string | undefined;
}

export interface PricingIconProps {
    variant: "starter" | "professional" |  "enterprise";
}

export interface PricingCardProps {
    variant: "starter" | "professional" |  "enterprise";
    title: string;
    description: string;
    price: string;
    listFeatures: string[];
}

export interface IndustryCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    industry: "healthcare" | "retail" | "manufacturing" | "technology";
}

export interface SolutionCardProps {
    title?: string;
    description?: string;
    href?: string;
    Icon?: LucideIcon;
    className?: string;
}

export interface CustomBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant: "default" | "secondary" | "destructive" | "outline";
    children: React.ReactNode;
}

export interface FeaturesCardProps extends HTMLAttributes<HTMLDivElement> {
    Icon: LucideIcon;
    title: string;
    description: string;
    ctaHref: string;
}