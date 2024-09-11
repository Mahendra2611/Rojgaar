export const registerSchema = {
    fullName:{
        notEmpty:true,
        isString:true,
    },
    email:{
        notEmpty:true,
        isEmail:true,
    },
    phoneNumber:{
        notEmpty:true,
        isLength:{
            options:{
                min:10,
                max:10
            }
        }
    },
    password:{
        notEmpty:true,
        isString:true,
        isLength:{
            options:{
                min:6,
            }
        }
    },
    role:{
        notEmpty:true,
        isString:true,
        matches:{
            options:/^student$|^recruiter$/
        }
    }
}