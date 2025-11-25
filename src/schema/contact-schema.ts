import * as z from "zod";

export const contactUsSchema = z.object({
  full_name: z
    .string("full name is required")
    .min(3, "full name must be at least 3 characters long"),
  company_or_organization: z
    .string("company name is required")
    .min(3, "company name must be at least 3 characters long"),
  phone_number: z
    .string("phone is required")
    .min(3, "phone must be at least 3 characters long"),
  email_address: z.email("email is required").includes("@"),
  omnix_service: z.string("please choose a service."),
  message: z
    .string("message is required")
    .min(10, "message must be at least 10 characters long"),
});

export type ContactUsTypes = z.infer<typeof contactUsSchema>;
