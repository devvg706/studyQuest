const express = require('express');
const app = express();

const cookieParser = require("cookie-parser")
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
const userRoutes = require("./routes/User")
const courseRoutes = require("./routes/Course")
const paymentRoutes = require("./routes/Payments")
const profileRoutes = require("./routes/Profile")

const {connectDB} = require("./config/database")

const {cloudinaryConnect}= require("./config/cloudinary")
const fileUpload = require("express-fileupload")

const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true, // Allow cookies to be sent with requests
}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);


//def route
app.get("/",(req,res) => {
    return res.status(200).json({
        message:"Welcome to the E-Learning Platform",
        success:true,
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
