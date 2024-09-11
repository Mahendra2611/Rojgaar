import express from "express";
import connectDB from "./utils/connectDB.js";
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"
import jobRouter from "./routes/job.route.js"
import companyRoute from "./routes/company.route.js"
import applicationRouter from "./routes/application.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
// import { verificationEmail } from "./utils/verificationEmail.js";
dotenv.config()
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true
  };
const app = express();
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(express.json({ limit: '10mb' }));

app.use("/user",userRoute)
app.use("/company",companyRoute)
app.use("/job",jobRouter)
app.use("/application",applicationRouter)
// app.get("/email",verificationEmail)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
   connectDB();
    console.log(`Server Running on PORT ${PORT}`)
})