import { z } from "zod";

export const postSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description must be less than 1000 characters"),
  image: z.string().optional(),
});

export type PostFormData = z.infer<typeof postSchema>;
