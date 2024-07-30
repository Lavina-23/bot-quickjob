import cors from "cors";
import express from "express";
import { createVacancy, getVacancies } from "../controllers/controller";
const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

router.post("/postVacancy", createVacancy);
router.get("/getVacancy", cors(corsOptions), getVacancies);

export default router;
