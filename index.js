import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// explicitly type port as number
const port = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("This is s_squad_mini_project Server!");
});
app.post("/api/v1/banq_and_ven/bid");
app.listen(port, () => {
    console.log(`S_Squad_mini_project server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map