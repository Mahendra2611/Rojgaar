import { Company } from "../models/company.model.js";
import { validationResult } from "express-validator";
export const registerCompany = async(req,res)=>{
    
   
    
    const { name, description, website, location } = req.body;
    console.log("register called")
   
    console.log(req.body)
    if (!name || !description || !website ||!location ) {
        return res.status(400).json({
            message: "Input fiels are not correct"
        })
    }
    const file = req.file;
    console.log(file)
    const userId = req.userId
    try {
        // const company = await Company.findOne({userId:userId});
        // console.log(company)
        // if (company) {
        //     return res.status(400).json({
        //         message: "You can create only 1 company",
        //         success: false
        //     })
        // }
       
        const companyData = await Company.create({
           name,
           description,
           website,
           logo:file.path,
           location,
           userId:userId
        })
       

        return res.status(200).json({
            message: "company registered  successfully",
            success: true,
            company: companyData
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "company registeration failed"
        })
    }
}
export const getCompany = async(req,res)=>{
try {
    const userId = req.userId;
    const company =await Company.find({userId:userId},{userId:0});
    console.log(company)
    return res.status(200).json({
        companies:company
    })
} catch (error) {
    console.log(error);
    return res.status(400).json({
        message: "company searching failed"
    })
}
}
export const getCompanyById = async(req,res)=>{
    try {
        const id = req.params.id;
       
        const company = await Company.findOne({_id:id},{userId:0});
        if(!company){
            return res.status(400).json({
                message:"Companies not found"
            })
        }
        return res.status(200).json({
            company:company
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "company searching failed"
        })
    }
}
export const updateCompany = async(req,res)=>{
    try {
        const { name, description, website, location } = req.body;

        console.log(req.body)
        const file = req.file;
        console.log(file)
        // // idhar cloudinary ayega
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        // const logo = cloudResponse.secure_url;
    
        const updateData = {};
        if(name){
            updateData['name'] = name;
        }
        if(description){
            updateData['description'] = description;
        }
        if(name){
            updateData['website'] = website;
        }
        if(name){
            updateData['location'] = location;
        }
        if(file){
            updateData['logo'] = file.path;
        }
        console.log(updateData)
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true});
        console.log(company)
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true,
            company:company
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message:"Something went wrong"
        })
    }
}