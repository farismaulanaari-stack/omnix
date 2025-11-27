import { ContactUsTypes } from "@/schema/contact-schema";
import emailjs from "@emailjs/browser";

export const contactUsService = async (data: ContactUsTypes) => {
  try {
    if (data === undefined) {
      console.error("contact data is required");
    }

    const sendMessage = await emailjs.send(
      "service_5ng4tay",
      "template_cw25oia",
      {
        from_name: data.full_name,
        from_email: data.email_address,
        message: data.message_text,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log(emailjs);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
