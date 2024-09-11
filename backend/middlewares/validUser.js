const validUser = (req,res,next)=>{
    if(req.role !== 'student'){
        return res.status(400).json({
            message:"student validation failed",
            success:false
        })
    }
    else{
        next();
    }
}
export default validUser