const Profile  = require("../models/Profile");
const User = require("../models/User");
const Course = require("../models/Course");

const CourseProgress = require("../models/CourseProgress")



const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")
const { convertSecondsToDuration } = require("../utils/secToDuration")

exports.updateProfile = async (req,res) => {
    try{
        const {dateOfBirth = "" , about = "",contactNumber,gender} = req.body;
        console.log("this is the req body",req.body);
        const id = req.user.id;
        console.log("profile to update details",id)
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                message:"please enter mandatory details",
                success:false,
            })
        }
        const UserDetails = await User.findById(id);
        const profileId = UserDetails.additionalDetails._id;
        const update = await Profile.findByIdAndUpdate(profileId,{
            dateOfBirth:dateOfBirth,
            about:about,
            gender:gender,
            contactNumber:contactNumber,
        },{new:true});
        const updatedUserDetails = await User.findById(id).populate("additionalDetails").exec();
        updatedUserDetails.password = undefined;
        return res.status(200).json({
            message:"profile updated successfully",
            success:true,
            updatedUserDetails,
        });
    }
    catch(error){
        console.log("this error occured in updating profile",error);
        return res.status(500).json({
            message:"there was a error in updating profiel",
            success:false,
        });
    }
}

//delete profile
exports.deleteUser = async (req,res) => {
    try{
        const userId = req.user.id;
        const userDetails = await User.findOne(userId);
        if(userDetails){
            return res.status(401).json({
                message:"cannot find user details",
                success:false,
            })
        }
        //delete profile
        const profileId = userDetails.additionalDetails.id;
        await Profile.findByIdAndDelete(profileId);

        //unenroll student from cources
        //done in post schema middleware inside user schema
    

        //delete whole suer
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            message:"user deleted success",
            success:true,
        });
    }
    catch(error){
        console.log("this error occured in deleting user",error);
        return res.status(500).json({
            message:"there was a error in deleting user",
            success:false,
        });
    }
    
}
//getting user data
exports.getAllUserDetails = async (req,res) => {
    try{
        const id = req.user.id;
        console.log("this is the user id",id);
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        console.log("this is the user details",userDetails);
        return res.status(200).json({
            success:true,
            message:"user details fetched successfully",
            userDetails,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to fetch user deatils"
        })
    }
}

//getEnrolledCourses
exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id
    let userDetails = await User.findOne({
      _id: userId,
    })
      .populate({
        path: "courses",
        populate: {
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        },
      })
      .exec()
    userDetails = userDetails.toObject()
    var SubsectionLength = 0
    for (var i = 0; i < userDetails.courses.length; i++) {
      let totalDurationInSeconds = 0
      SubsectionLength = 0
      for (var j = 0; j < userDetails.courses[i].courseContent.length; j++) {
        totalDurationInSeconds += userDetails.courses[i].courseContent[
          j
        ].subSection.reduce((acc, curr) => acc + parseInt(curr.timeDuration), 0)
        userDetails.courses[i].totalDuration = convertSecondsToDuration(
          totalDurationInSeconds
        )
        SubsectionLength +=
          userDetails.courses[i].courseContent[j].subSection.length
      }
      let courseProgressCount = await CourseProgress.findOne({
        courseID: userDetails.courses[i]._id,
        userId: userId,
      })
      courseProgressCount = courseProgressCount?.completedVideos.length
      if (SubsectionLength === 0) {
        userDetails.courses[i].progressPercentage = 100
      } else {
        // To make it up to 2 decimal point
        const multiplier = Math.pow(10, 2)
        userDetails.courses[i].progressPercentage =
          Math.round(
            (courseProgressCount / SubsectionLength) * 100 * multiplier
          ) / multiplier
      }
    }

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find user with id: ${userDetails}`,
      })
    }
    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
//update profile photo
exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture
    const userId = req.user.id
    // console.log("File received:", req.file); // check if it's undefined
    // console.log("User:", req.user);          // if you rely on auth
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )
    // console.log(image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    )
    return res.status(200).json({
        message:"profile updated succesfully",
        success:true,
        updatedProfile,
    })
  } catch (error) {
    console.log("errror in main function")
    return res.status(500).json({
        
      success: false,
      message: error.message,
    })
  }
}
