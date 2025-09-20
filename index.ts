import express from "express";
import dotenv from "dotenv";
import type  { Request, Response } from "express";

dotenv.config();

const app = express();

// explicitly type port as number
const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response): void => {
  res.send("This is s_squad_mini_project Server!");
});

app.post("/api/v1/banq_and_ven/bid");

app.listen(port, (): void => {
  console.log(`S_Squad_mini_project server is running on port ${port}`);
});
