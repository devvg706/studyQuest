const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Course = require("../models/Course");
require("dotenv").config();

exports.createSubSection = async (req,res) => {
    try{
        const {sectionId,title,timeDuration,description,courseid} = req.body;
        console.log("req.files", req.files);
        const Video = req.files.video;
        //validation
        if(!sectionId || !title  || !description){
            return res.status(401).json({
                message:"please fill all details to create a subsection",
                success:false,
            })
        }
        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(Video,process.env.FOLDER_NAME);

        //create a subsection
        const subSectionCreate = await SubSection.create({title,description,videoUrl:uploadDetails.secure_url});

        //update section schema
        const updateSection = await Section.findByIdAndUpdate(sectionId,{
            $push:{subSection:subSectionCreate._id}
        },{new:true}).populate("subSection").exec();
        const data = await Course.findById(courseid)
                .populate({
                    path: "courseContent",
                    populate: {
                    path: "subSection"
                    }
                })
                .exec();

        //return
        return res.status(200).json({
            message:"subsection created successfully",
            success:true,
            subSectionCreate,
            updateSection,
            data,
        })


    }
    catch(error){
        console.log("this error occured while creating subsection",error);
        return res.status(500).json({
            message:"something went wrong while creating a new subsection",
            success:false,
        })
    }
}

//update subsection
exports.updateSubSection = async (req,res) => {
    try{
        const {subSectionId,title,timeDuration,description,courseid} = req.body;
        if(!subSectionId || !title || !timeDuration || !description){
            console.log("this error occured while upating section",error);
                return res.status(500).json({
                message:"please enter details ",
                success:false,
            })
        }
        const UpdateSubSection = await SubSection.findByIdAndUpdate(subSectionId,{
            title:title,
            timeDuration:timeDuration,
            description:description,

        },{new:true});
        const data = await Course.findById(courseid)
                                            .populate({
                                                path: "courseContent",
                                                populate: {
                                                path: "subSection"
                                                }
                                            })
                                            .exec();

        return res.status(200).json({
            message:" subsection updated successfully",
            success:true,
            UpdateSubSection,
            data,
        })
    }
    catch(error){
        console.log("this error occured while updating section",error);
        return res.status(500).json({
            message:"something went wrong while updating a  subsection",
            success:false,
        })
    }
}


//delete subsection

exports.deleteSubSection = async (req,res) => {
    try{
        const {subSectionId} = req.body;
        const courseid = req.body.courseid;
        const deleteSubSection = await SubSection.findByIdAndDelete(subSectionId);
        const data = await Course.findById(courseid)
                    .populate({
                        path: "courseContent",
                        populate: {
                        path: "subSection"
                        }
                    })
                    .exec();

        return res.status(200).json({
            message:"course section deleted successfully",
            success:true,
            data
        })
    }
    catch(error){
        console.log("this error occured while deleting subsection",error);
        return res.status(500).json({
            message:"something went wrong while deleting a new subsection",
            success:false,
        })
    }
}