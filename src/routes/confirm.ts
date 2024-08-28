import { Router } from "express";
import { confirmCorrect } from "../controllers/confirmController";

const router = Router();

router.patch("/", confirmCorrect);


export default router;