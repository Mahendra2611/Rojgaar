export const loginSchema = {
    email:{
        notEmpty:true,
        isEmail:true,
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
    // role:{
    //     notEmpty:true,
    //     isString:true,
    //     matches:{
    //         options:/^student$|^recuiter$/
    //     }
    // }
}