import { v2 as cloudinary } from 'cloudinary';
console.log("cloudinary called")
console.log({
    cloud_name:"dhu4gzm7k",
    api_key: "698411874675693",
    api_secret: "7TruPMU1vOfxrl_TCYb7c6X-clw",
});

cloudinary.config({
    cloud_name: "dhu4gzm7k",
    api_key: "698411874675693",
    api_secret: "7TruPMU1vOfxrl_TCYb7c6X-clw",
  });
  
export default cloudinary