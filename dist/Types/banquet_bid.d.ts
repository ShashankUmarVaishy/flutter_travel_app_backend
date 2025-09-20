import { z } from "zod";
export declare const bidSchema: z.ZodObject<{
    EventType: z.ZodString;
    Country: z.ZodString;
    State: z.ZodString;
    City: z.ZodString;
    Dates: z.ZodArray<z.ZodString>;
    AdultCount: z.ZodNumber;
    CateringPreference: z.ZodString;
    Cuisine: z.ZodString;
    BudgetAmount: z.ZodNumber;
    AmountCurrency: z.ZodString;
    OffersWithin: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=banquet_bid.d.ts.map