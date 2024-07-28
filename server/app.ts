import { urlencoded } from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes";
dotenv.config();

const mongoString = process.env.DATABASE_URL;
if (!mongoString) {
  console.error("Error: DATABASE_URL is not defined in .env file");
  process.exit(1);
}

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.use("/api", router);

export default app;
