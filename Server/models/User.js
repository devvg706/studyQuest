const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const { passwordUpdated }= require('../mailTemplates/passwordUpdateTemplate');
const { welcomeEmailTemplate } = require('../mailTemplates/welcomeEmailTemplate');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        //required:true,
    },
    accountType:{
        type:String,
        required:true,
        enum:["Admin", "Student", "Instructor"],
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courseProgress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courseProgress",
    }],
});

const sendWelcomeEmail = async (email,firstName) => {
    try{
        const htmlTemplate = welcomeEmailTemplate(email,firstName);
        const WelcomeResponse = await mailSender(email,"Welcome Email From StudyQuest",htmlTemplate);
        console.log("THIS IS THE RESPONSE OF welcome",WelcomeResponse);
    }
    catch(error){
        console.log("ERROR OCCURED IN SENDING Welcome EMAIL",error);
    }
};

userSchema.post("save",async function(doc){
    console.log("User created:", doc);
    await sendWelcomeEmail(doc.email,doc.firstName);

});
const UpdatePasswordEmail = async (email,firstName) => {
    try{
        const htmlTemplate = passwordUpdated(email,firstName);
        const PasswordUpdate = await mailSender(email,"Someone Changed password",htmlTemplate);
        console.log("THIS IS THE RESPONSE OF PASSWORD CHANGE--", PasswordUpdate);
    }
    catch(error){
        console.log("ERROR OCCURED IN SENDING password update EMAIL",error);
    };
};
userSchema.post("findOneAndUpdate", async function(doc) {
    if (!doc) return;
    const update = this.getUpdate();
    // Check if password is being updated
    if (
        (update && update.password) ||
        (update && update.$set && update.$set.password)
    ) {
        await UpdatePasswordEmail(doc.email,doc.firstName);
    }
});


module.exports = mongoose.model("User", userSchema);