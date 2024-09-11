import express from 'express'
import authentication from '../middlewares/authentication.js'

import { postJob,getAdminJobs,getAllJobs,getJobById,updateJob } from '../controllers/job.controller.js';
const router = express.Router();
router.use(authentication)
router.post("/post",postJob);
router.get("/get",getAllJobs)
router.get("/getadminjobs",(getAdminJobs));
router.get("/get/:id",getJobById);
router.post("/update",updateJob)
export default router 