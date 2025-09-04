const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const {otpVerificationEmail} = require("../mailTemplates/OTPEmailTemplate");
const OTPschema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
   },
   otp:{
    type:String,
    required:true,
   },
   createdAt:{
        type:Date,
        default:Date.now(),
        expires: 5*60,
    },  
});

//email sender pre middleware
const sendVerificationemail = async (email,otp) => {
    try{
        const htmlTemplate = otpVerificationEmail(email,otp);
        const verifyresponse = await mailSender(email,"Verification Email From StudyQuest",htmlTemplate);
        console.log("THIS IS THE RESPONSE OF VERIFYEMAIL",verifyresponse);
    }
    catch(error){
        console.log("ERROR OCCURED IN SENDING SIGNUP EMAIL",error);
    }
};

OTPschema.pre("save",async function(next){
    await sendVerificationemail(this.email,this.otp);
    next();

});

module.exports = mongoose.model("OTP", OTPschema);