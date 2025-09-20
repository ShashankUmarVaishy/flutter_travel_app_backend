import express from "express";
import dotenv from "dotenv";
import { createBid } from "./controller/banquets_and_venues.js";
import { errorHandler } from "./middleware/error-handler.js";
dotenv.config();
const app = express();
// explicitly type port as number
const port = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("This is s_squad_mini_project Server!");
});
app.post("/api/v1/banq_and_ven/bid", createBid);
// Error handling middleware (must be last)
app.use(errorHandler);
app.listen(port, () => {
    console.log(`S_Squad_mini_project server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map