const validAdmin = (req,res,next)=>{
    if(req.role !== 'recruiter'){
        return res.status(400).json({
            message:"admin validation failed",
            success:false
        })
    }
    else{
        next();
    }
}
export default validAdmin