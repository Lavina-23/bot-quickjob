import { urlencoded } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes";
dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use("/api", router);

const mongoString = process.env.DATABASE_URL;
if (!mongoString) {
  console.error("Error: DATABASE_URL is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

export default app;
