import express from "express";
import { RegisterAPI } from "../controller/service.js";
const router = express.Router();

router.post("/create-user", RegisterAPI);
router.post("/personal-information", RegisterAPI);

export default router;
