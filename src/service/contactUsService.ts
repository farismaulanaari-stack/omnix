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
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log(emailjs);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
