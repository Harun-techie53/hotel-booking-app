import { z } from "zod";

const myHotelSchema = z.object({
  name: z
    .string()
    .min(10, { message: "Minimum length of characters should be 10" })
    .max(60, { message: "Maximum length of characters should be 60" }),
  city: z.string(),
  country: z.string(),
  description: z.string().optional(),
  type: z.string().optional(),
  adultCount: z.string(),
  childCount: z.string().optional(),
  facilities: z.array(z.string()),
  pricePerNight: z.string(),
  starRating: z.string(),
  lastUpdated: z.date().optional(),
});

const updateMyHotelSchema = z.object({
  name: z
    .string()
    .min(10, { message: "Minimum length of characters should be 10" })
    .max(60, { message: "Maximum length of characters should be 60" })
    .optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  adultCount: z.string().optional(),
  childCount: z.string().optional(),
  facilities: z.array(z.string()).optional(),
  pricePerNight: z.string().optional(),
  starRating: z.string().optional(),
  lastUpdated: z.date().optional(),
  deleteCloudinaryImageIds: z.array(z.string()).optional(),
});

export { myHotelSchema, updateMyHotelSchema };
