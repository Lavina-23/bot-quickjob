import express from "express";
import { createVacancy, getVacancies } from "../controllers/controller";
const router = express.Router();

router.post("/postVacancy", createVacancy);
router.get("/getVacancy", getVacancies);

export default router;
