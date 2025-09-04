const User = require('../models/User');
const mailSender = require('../utils/mailSender')
const bcrypt = require('bcrypt')


exports.resetPasswordToken = async (req,res) => {
    try{
        const email = req.body.email;
        //check user existence
        const UserExist = await User.findOne({email:email});
        if(!UserExist){
            return res.status(401).json({
                message:"user not registered please enter valid email",
                success:false,
            })
        }
        //generate token
        const token = crypto.randomUUID();
        //update the token for user schema and also update expiry time
        const updateDetails = await User.findOneAndUpdate({email:email},{
            token:token,
            resetPasswordExpires:Date.now() + 5*60*1000,
        },{new:true});
        //create url
        const url = `http://localhost:3000/update-password/${token}`
        
        //sendmail which contains url
        await mailSender(email,"password reset link",`password reset link ${url}`)

        return res.status(200).json({
            message:"resetpassword email send succesfull",
            success:true,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:error.message || "error in password reset",
            success:false,
        })
    }
}

exports.resetPassword = async (req,res) =>{
    try{
        //data fetch token we will get from frontend frontedn will fetch token from url and send in req ki body
        const {password,confirmPassword,token} = req.body;

        //validation
        if(password!==confirmPassword){
            return res.status(401).json({
                message:"confirm password and password dont match",
                success:false,
            })
        }
        //get userdetails using token and this is the reason we stored token in user schema
        const userDetails = await User.findOne({token});
        //check for vaild token
        if(!userDetails){
            return res.status(401).json({
                message:"please enter valid token",
                success:false,
            })
        }
        //token time check
        // if(userDetails.resetPasswordExpires > Date.now() ){
        //     return res.status(401).json({
        //         success:false,
        //         message:"please try again time overr",
        //     })
        // };
        //hash password
        const hashedpassword = await bcrypt.hash(password,10);

        //password update
         await User.findOneAndUpdate({token},{
            token:token,
            password:hashedpassword,
         },{new:true});
         return res.status(200).json({
            message:"password reset successfull",
            success:true,
            password:hashedpassword,
         });


    }
    catch(error){
        console.log("this error occured in reseting password",error);
        return res.status(500).json({
            message:"there was a error in resetting password",
            success:false,
        });
    }
    
}