import express from "express";
import { detailRequest } from "../controllers/apiV1.controller.js";

const router = express.Router();
router.post("/detail-request", detailRequest);
export default router;
