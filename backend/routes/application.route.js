import express from "express";
import authentication from "../middlewares/authentication.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
import validAdmin from "../middlewares/validAdmin.js";
const router = express.Router();
router.use(authentication)
router.get("/apply/:id",applyJob)
router.get("/get", getAppliedJobs)
router.get("/:id/applicants", validAdmin,getApplicants)
router.post("/status/:id/update", validAdmin,updateStatus)
 

export default router;