import emailjs from "@emailjs/browser";
import { NewsLetterData } from "@/types/types";

export const newsletterService = async (data: NewsLetterData) => {
  try {
    if (data === undefined) {
      console.error("newsletter data is required");
    }

    const sendEmail = await emailjs.send(
      "service_5ng4tay",
      "template_qkbviwe",
      { to_email: data.email_address },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log(sendEmail);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
