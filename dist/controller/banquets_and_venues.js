import { z } from "zod";
import { PrismaClient } from "../../generated/prisma/index.js";
import { createError } from "../middleware/error-handler.js";
import { bidSchema } from "../Types/banquet_bid.js";
const prisma = new PrismaClient();
export const createBid = async (req, res, next) => {
    try {
        console.log(req.body);
        const validatedData = bidSchema.parse(req.body);
        const bidData = {
            ...validatedData,
            Dates: validatedData.Dates.map((date) => new Date(date)),
        };
        const newBid = await prisma.banquet_Bid.create({
            data: bidData,
        });
        res.status(201).json({
            success: true,
            message: "Bid created successfully",
            data: newBid,
        });
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.issues.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            }));
            next(createError(`Validation failed: ${errorMessages
                .map((e) => e.message)
                .join(", ")}`, 400));
        }
        else {
            next(createError(error.message, 500));
        }
    }
};
//# sourceMappingURL=banquets_and_venues.js.map