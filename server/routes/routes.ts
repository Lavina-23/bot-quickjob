import express from "express";
import { createVacancy } from "../controllers/controller";
const router = express.Router();

router.post("/incoming", createVacancy);

export default router;
