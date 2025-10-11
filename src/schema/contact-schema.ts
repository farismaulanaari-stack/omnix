import * as z from "zod";

export const contactSchema = z.object({
    name: z.string("name is required").min(3, "name must be at least 3 characters long"),
    company_name: z.string("company name is required").min(3, "company name must be at least 3 characters long"),
    phone_number: z.string("phone is required").min(3, "phone must be at least 3 characters long"),
    email: z.email("email is required").includes("@"),
    subject_message: z.string().optional(),
    message: z.string("message is required").min(10, "message must be at least 10 characters long"),
})