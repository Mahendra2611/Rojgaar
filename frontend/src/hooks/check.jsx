const StringRegExp = /^[a-zA-Z\s]+$/
const NumberRegExp = /^\d+$/
export const checkString = ( s)=>{
    const result = StringRegExp.test(s)
    return result
}
export const checkNumber = ( s)=>{
    const result = NumberRegExp.test(s)
    return result
}