const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^.{8,}$/;
const phoneRegex = /^[1-9]\d{9}$/;

export const verify = (email,password,phone)=>{
const isEmail = emailRegex.test(email)
const isPhone = phoneRegex.test(phone)
const isPassword = passwordRegex.test(password)
//console.log(password)
//console.log(isPassword)
return [isEmail,isPassword,isPhone]
}

