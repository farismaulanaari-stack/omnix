import { LucideIcon } from "lucide-react";
import { FormHTMLAttributes, InputHTMLAttributes } from "react";

export interface ContactUsData {
    name: string;
    company: string;
    phone: string;
    email: string;
    subject?: string;
    message: string;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    htmlFor: string;
    type?: string;
    addOn?: boolean;
    addOnElement?: LucideIcon;
}

export interface FormFieldProps extends FormHTMLAttributes<HTMLFormElement> {
    OnSubmit?: () => void;
    children: React.ReactNode;
}