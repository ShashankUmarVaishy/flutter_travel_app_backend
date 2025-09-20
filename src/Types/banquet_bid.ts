import { z } from "zod";

export const bidSchema = z.object({
  EventType: z.string().min(1, "EventType is required"),
  Country: z.string().min(5, "Country is required"),
  State: z.string().min(5, "State is required"),
  City: z.string().min(5, "City is required"),
  Dates: z.array(z.string().datetime()).min(1, "At least one date is required"),
  AdultCount: z
    .number()
    .int()
    .positive("AdultCount must be a positive integer"),
  CateringPreference: z.string().min(3, "CateringPreference is required"),
  Cuisine: z.string().min(5, "Cuisine is required"),
  BudgetAmount: z
    .number()
    .int()
    .positive("BudgetAmount must be a positive integer"),
  AmountCurrency: z.string().min(1, "AmountCurrency is required"),
  OffersWithin: z.string().min(1, "OffersWithin is required"),
});