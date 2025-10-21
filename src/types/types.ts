import { LucideIcon } from "lucide-react";
import { FormHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

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