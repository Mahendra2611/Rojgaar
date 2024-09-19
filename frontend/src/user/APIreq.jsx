
export const handleSavee = async(jobId)=>{
  //console.log("handle save called")
  try {
    const response =  await fetch(`http://localhost:3000/savelater/post?id=${jobId}`,{
      method:"POST",
      credentials:"include",
     })
     const data  = await response.json();
    // console.log(data.message)
    return data.message
  } catch (error) {
    //console.log(error(
    return "Something went wrong"
  }
}
export const handleRemovee = async(jobId)=>{
  //console.log("handle remove called")
  try {
    const response =  await fetch(`http://localhost:3000/savelater/delete?id=${jobId}`,{
      method:"DELETE",
      credentials:"include",
     })
     const data  = await response.json();
     if(response.ok){
      return true;
     }
     else{
      return false;
     }
     //console.log(data.message)
     
  } catch (error) {
    //console.log(error)
    return false;
  }
}
