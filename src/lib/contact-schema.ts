import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(254, "Email address is too long"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(120, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
