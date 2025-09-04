const OTPGenerator = require("otp-generator");
const User = require("../models/User");
const OTP = require("../models/OTPEE");
const Profile = require('../models/Profile');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const mailSender = require('../utils/mailSender')

//sendotp
exports.sendOTP = async (req,res) => {
    try{
        const {email} = req.body;
        //check if already exist
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(401).json({
                message:"user already exist",
                success:false,
            })
        }
        var otp = OTPGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        console.log("the otp generated is:-",otp);

        //check if otp exist in db or not
        let otpExistence = await OTP.findOne({otp:otp});
        while(otpExistence){
            otp = OTPGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            })
            otpExistence = await OTP.findOne({otp:otp});
        }
        //create entry in db for otp
        const otpBody = await OTP.create({email,otp});
        //console.log("this is the otp body getting created--",otpBody);

        res.status(200).json({
            message:"otp sent successfully",
            success:true,
        })

    }
    catch(error){
        console.log("error occured in sending otp in auth controller",error);
        return res.statud(500).json({
            message:"errror occured in sending otp",
            success:false,
        })
    }
}

//signup
  //validation of data
  //confirm password and password check
  //check user exist or not
  //verify otp and after that create the entry in database for that
    //1.fetch the latest otp for email,
    //2.validate it from otp generated
    //3.hash the password
    //4.create the entry in database


//fetch the data
exports.signUp = async (req,res) =>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            otp,
        } = req.body;
        //checking cpass and pass same or not
        if(password!==confirmPassword){
            return res.status(400).json({
                message:"password and confirm password dont match",
                success:false,
            })
        }
        //checking user already exist or not
        const UserExist = await User.findOne({email});
        if(UserExist){
            return res.status(400).json({
                message:"User Already exist please login",
                success:false,
            })
        }
        //fetching latest otp from Db and cecking otp entered by user is same as otp generated if same then password hash and store in DB
        const LatestOTP = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        if(!LatestOTP[0] || otp !== LatestOTP[0].otp){
            return res.status(500).json({
                message:"otp invalid",
                success:false,
            })
        }
        //password hashing
        const HashedPassword = await bcrypt.hash(password,10);
        //upload userdata in DB
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        })
        const UserData = await User.create({
            firstName,
            lastName,
            email,
            password:HashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}`,
        })
        return res.status(200).json({
            message:"user created successfully",
            success:true,
            UserData,
        })
       

    }
    catch(error){
        console.log("error occured in signup code--",error);
        return res.status(500).json({
                message:"User cannot be registered please try again",
                succes:false,
        })
    }
}
//login
exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;
        
        const LoginUserExist = await User.findOne({email}).populate("additionalDetails").exec();
        //check if user has signed up first
        if(!LoginUserExist){
            return res.status(401).json({
                message:"user dont exit please signup",
                success:false,
            })
        }
        //password match
        const passwordCheck = await bcrypt.compare(password,LoginUserExist.password);
        if(!passwordCheck){
            return res.status(400).json({
                message:"please enter correct password",
                success:false,
            })
        }
        const payload = {
            email:LoginUserExist.email,
            id:LoginUserExist._id,
            accountType:LoginUserExist.accountType,
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"24h",
        });
        LoginUserExist.token = token;
        LoginUserExist.password = undefined;
        
        const options = {
            expires:new Date(Date.now()+ 3*24*60*60*1000),
            httpOnly:true,
        }
        res.cookie("token", token, options).status(200).json({
            message: "User logged in successfully",
            LoginUserExist,
            token,
            success: true,
        });

    }
    catch(error){
        console.log("something is wrong in login code--",error);
        return res.status(500).json({
            message:"error occured in login",
            success:false,
        })
    }

};

//changepassword

exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.user.id)

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword } = req.body

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    )
    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" })
    }

    // Update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10)
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    )
    // Return success response
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" })
  } catch (error) {
    // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
    console.error("Error occurred while updating password:", error)
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    })
  }
}