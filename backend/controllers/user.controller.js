import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"
import cloudinary from "../utils/cloudinaryConfig.js";
export const register = async (req, res) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: "Input fiels are not correct",
            success:false
        })
    }
    const { fullName, email, password, phoneNumber, role } = req.body;
    try {
        const user = await User.findOne({ email });
        //console.log(user)
        if (user) {
            return res.status(400).json({
                message: "user already exist",
                success: false
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const userData = await User.create({
            fullName,
            email,
            password: hashPassword,
            phoneNumber,
            role
        })
       
       console.log(userData)
        const jwtToken = jwt.sign({
            user: {
                userId: userData._id,
            }
        },
            process.env.JWT_SECRET_KEY)

        return res.status(200).cookie('access-key', jwtToken, { maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: 'strict' }).json({
            message: "user registered in successfully",
            success: true,
            user: userData
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "user registeration failed",
            success:false
        })
    }
}
export const login = async (req, res) => {
    const result = validationResult(req);
    //console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: "Input fiels are not correct",
        })
    }
    const { email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({
                message: "Incorrect Email",
                success: false
            })
        }
        const hashPassword = user.password
        const verfiy = await bcrypt.compare(password, hashPassword)
        if (!verfiy) {
            return res.status(400).json({
                message: "Incorrect Password",
                success: false
            })
        }
        // if (role !== user.role) {
        //     return res.status(400).json({
        //         message: 'Account with this role doesnt exist',
        //         success: false,
        //     })
        // }
        const jwtToken = jwt.sign({
            user: {
                userId: user._id,
            }
        },
            process.env.JWT_SECRET_KEY)

            return res.status(200)
            .cookie('access-key', jwtToken, {
              sameSite: 'None',
              secure: true, // <--- Changed to true
              httpOnly: true, // <--- Added for security
            })
          
            .json({
                message: "User logged in successfully",
                success: true,
                user: user
            });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "user log in failed"
        })
    }
}
export const logout = (req, res) => {
    try {
       // res.cookie('access-key', "", { maxAge: 0 });
        res.status(200).json({
            message: "User log out successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "user log out failed"
        })
    }
}

export const updateProfile = async (req, res) => {
    try {
    
      const { fullName, phoneNumber, bio, skills } = req.body;
  
      if (!fullName || !phoneNumber ) {
        return res.status(400).json({
          message: 'Input fields are not correct',
        });
      }
  
      let DataToBeUpdated = {
        
      };
      if(fullName){
        DataToBeUpdated.fullName = fullName
      }
      if(phoneNumber){
        DataToBeUpdated.phoneNumber = phoneNumber
      }
     
    
      if(bio){
        DataToBeUpdated["profile.bio"] = bio
      }
      if(skills){
        DataToBeUpdated["profile.skills"] = skills
      }
      // Create an array to hold the promises for uploading files
      const uploadPromises = [];
  
      // Handle optional profile photo upload
      if (req.files.profilePhoto) {
        const photoUploadPromise = new Promise((resolve, reject) => {
          const profilePhotoPath = req.files.profilePhoto[0].path;
          resolve(profilePhotoPath); // Resolving the photo path after upload
        });
  
        // Add the photo upload promise to the array
        uploadPromises.push(photoUploadPromise);
      }
  
      // Handle optional resume upload
      if (req.files.resume) {
        const resumeUploadPromise = new Promise((resolve, reject) => {
          const resumePath = req.files.resume[0].path;
          const resumeOriginalName = req.files.resume[0].originalname;
          resolve({ resumePath, resumeOriginalName }); // Resolving the resume path and name after upload
        });
  
        // Add the resume upload promise to the array
        uploadPromises.push(resumeUploadPromise);
      }
  
      // Wait for all uploads to complete
      const uploadResults = await Promise.all(uploadPromises);
  
      // Update the DataToBeUpdated object with the paths from Cloudinary
      uploadResults.forEach((result, index) => {
        if (index === 0 && req.files.profilePhoto) {
          DataToBeUpdated["profile.profilePhoto"] = result;
        } else if (index === 1 && req.files.resume) {
          DataToBeUpdated["profile.resume"] = result.resumePath;
          DataToBeUpdated["profile.resumeOriginalName"] = result.resumeOriginalName;
        }
      });
  
      const id = req.userId; // Assuming you're getting user ID from the token
  console.log(DataToBeUpdated)
      await User.updateOne({ _id: id }, {$set:DataToBeUpdated});
      const updatedUser = await User.findOne({ _id: id }, { _id:0,password: 0 });
      console.log("update data")
  console.log(updatedUser)
      res.status(200).json({
        message: 'User updated successfully',
        success: true,
        user:updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: 'Internal server error',
      });
    }
  };
  