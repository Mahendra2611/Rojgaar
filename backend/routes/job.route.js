import express from 'express'
import authentication from '../middlewares/authentication.js'
import validAdmin from '../middlewares/validAdmin.js';
import { postJob,getAdminJobs,getAllJobs,getJobById,updateJob,deleteJob } from '../controllers/job.controller.js';
const router = express.Router();
router.use(authentication)
router.post("/post",validAdmin,postJob);
router.get("/get",getAllJobs)
router.get("/getadminjobs",validAdmin,(getAdminJobs));
router.get("/get/:id",getJobById);
router.post("/update",validAdmin,updateJob)
router.delete("/deletejob/:id",validAdmin,deleteJob)
export default router 