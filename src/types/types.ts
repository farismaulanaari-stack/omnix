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
    label: string;
    htmlFor: string;
    type?: string;
    children?: React.ReactNode;
}

export interface FormFieldProps extends FormHTMLAttributes<HTMLFormElement> {
    OnSubmit?: () => void;
    children: React.ReactNode;
}

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    htmlFor: string;
}