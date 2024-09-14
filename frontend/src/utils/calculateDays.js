export const calculateDays = (originalDate)=>{
const oldDate = new Date(originalDate)
const currentDate = new Date();
const diff = currentDate-oldDate;
const days = Math.floor(diff/(1000*60*60*24))
console.log(days)
return days
}