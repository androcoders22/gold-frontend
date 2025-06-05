import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  aboutMe: z.string(),
  mainPhone: z.string().min(1, "Main phone number is required"),
  secondaryPhone: z.string(),
  address: z.string().min(1, "Address is required"),
});

export type ProfileInput = z.infer<typeof profileSchema>;
