const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require("../models/User");

//auth
exports.auth = async (req,res,next) => {
    
    const token = 
    req.cookies.token 
    // || req.body.token
    || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
    return res.status(401).json({
      success: false,
      message: "token missing",
    });
  }
    
    try{
        if(!token){
        return res.status(401).json({
            success:false,
            message:"token missing",
        })};
        console.log(token)
        try{
            const verifytoken =  jwt.verify(token,process.env.JWT_SECRET);
            req.user = verifytoken;
            console.log("this is jwt verify response",verifytoken);
            next(); 
        }
        catch(error){
            return res.status(500).json({
                message:"cannot verify token******300000",
                success:false,
            });
        }   
    }
    catch(error){
        return res.status(500).json({
            message:error.message || "cannot verify token",
            success:false,

        })

    }
    
}


//isstudent

exports.isStudent = (req,res,next) => {
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                message:"this is protected route for student only",
                success:false,
            });
        }
        next();
        
    }
    catch(error){
        return res.status(500).json({
            message:"student role cannot be verified",
            success:false,
        })
    }
    
}

//isintructor
exports.isInstructor = (req,res,next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                message:"this is protected route for Instructor only",
                success:false,
            });
        }
        next();
        
    }
    catch(error){
        return res.status(500).json({
            message:"Instructor role cannot be verified",
            success:false,
        })
    }
    
}


//isaadmin
exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                message:"this is protected route for Admin only",
                success:false,
            });
        }
        next();
        
    }
    catch(error){
        return res.status(500).json({
            message:"Admin role cannot be verified",
            success:false,
        })
    }
    
}