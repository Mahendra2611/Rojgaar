import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";
export const postJob = async(req,res)=>{
try {
    console.log("post job called")
    const { title, description, requirements, salary, location, jobType, experienceLevel, position } = req.body;
    const userId = req.userId
    console.log(req.body)
    if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position ) {
        console.log("error")
        return res.status(400).json({
            message: "Some Inputs are missing",
            success: false
        })
    }
    console.log("comapny find")
    const companyId = await Company.findOne({userId:userId})
    console.log("cerate job")
    const job = await Job.create({
        title,
        description,
        requirements:requirements,
        salary:Number(salary),
        location,
        jobType,
        experienceLevel: experienceLevel,
        position,
        company: companyId,
        created_by: userId
    })
    return res.status(200).json({
        message:"JOb created successfully",
        job:job
    })
} catch (error) {
    console.log(error);
    return res.status(400).json({
        message:"Something went wrong in post job"
    })
}
}
export const getAllJobs = async(req,res)=>{
try {
    console.log("get all jobs called")
    const userId = req.userId
    const job = await Job.find({}).populate("company")
    console.log(job)
    if(!job){
        return res.status(400).json({
            message:"Jobs not found"
        })
    }
    console.log("job return")
    return res.status(200).json({
        job:job
    })
} catch (error) {
    
}
}
export const getAdminJobs = async(req,res)=>{
   try {
    const adminId = req.id;
    const job = await Job.find({ created_by: adminId }).populate({
        path:'company',
        createdAt:-1
    });
    if (!jobs) {
        return res.status(404).json({
            message: "Jobs not found.",
            success: false
        })
    };
    return res.status(200).json({
        jobs:job,
        success: true
    })
   } catch (error) {
    console.log(error);
    return res.status(400).josn({
        message:"Get admin job failed"
    })
   }

}
export const getJobById = async(req,res)=>{
    console.log("grt job called")
    try {
        const jobId = req.params.id;
        const userId = req.userId;
    const job = await Job.findById(jobId).populate('company').populate({path:"applications",job:jobId})
    console.log(job)
    if(!job){
        res.status(400).josn({
            message:"Jobs not found"
        })
    }
    //const hasApplied = job.applications.some((application)=>application.equals(userId))
    //console.log(hasApplied);
    return res.status(200).json({
        job:job
    })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            messgae:"something went wrong when fetching jobs"
        })
    }
}
export const updateJob = async(req,res)=>{
try {
    console.log("update job")
    const { title, description, requirements, salary, location, jobType, experienceLevel, position } = req.body;
    
    const {query:{id}} = req;
    console.log(id)
    console.log(req.body)
    if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position ) {
        console.log("error")
        return res.status(400).json({
            message: "Some Inputs are missing",
            success: false
        })
    }
   const newData = await Job.findByIdAndUpdate(id,req.body,{new:true})
   return res.status(200).json({
    message:"Data update successfully",
    success:true,
    job:newData
   })
} catch (error) {
    
}
}