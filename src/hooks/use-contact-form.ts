import { useLoading } from "./use-loading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema, type ContactUsTypes } from "@/schema/contact-schema";
import { toast } from "sonner";
import { contactUsService } from "@/service/contactUsService";

export function useContactForm() {
  const form = useForm<ContactUsTypes>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      full_name: "",
      email_address: "",
      company_or_organization: "",
      phone_number: "",
      omnix_service: "",
      message_text: "",
    },
  });

  const onSubmit = async (data: ContactUsTypes) => {
    await contactUsService(data);
    toast.success(`Congrats! ${data.full_name}, your message has been sent.`, {
      description: "The Omnix team has received your message.",
      className: "w-max p-4",
    });
    form.reset();
  };

  const { isLoading, trigger } = useLoading(1500, (data: ContactUsTypes) =>
    onSubmit(data)
  );

  return { isLoading, trigger, form };
}
