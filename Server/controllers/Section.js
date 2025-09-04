const Course = require("../models/Course");
const Section = require("../models/Section");


exports.createSection = async (req,res) => {
    try{
        const {sectionName,courseId} = req.body;
        //data validation
        console.log("i have reached create section",req.body)
        if(!sectionName || !courseId){
            return req.status(401).json({
                message:"please fill all details to create a section",
                success:false,
            })
        }
        //create section
        const newSection = await Section.create({sectionName});
        //update the course schema
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,{
            $push:{
                courseContent:newSection._id,
            }
        },{new:true}).populate({
            path:"courseContent",
            populate:{
                path:"subSection",
            },
        }).exec();
        //return response
        return res.status(200).json({
            message:"course section created successfully",
            success:true,
            updatedCourseDetails,
        })

    }
    catch(error){
        console.log("this error occured while creating section",error);
        return res.status(500).json({
            message:"something went wrong while creating a new section",
            success:false,
        })
    }
    
    
}

//update section
exports.updateSection = async (req,res) => {
    try{
        const {sectionName, sectionId,courseId} = req.body;
        if(!sectionName || !sectionId){
            return req.status(401).json({
                message:"please fill all details to create a section",
                success:false,
            })
        }
        //update 
        const section = await Section.findByIdAndUpdate(sectionId,{sectionName:sectionName},{new:true});
        const updatedCourseDetails = await Course.findById(courseId).populate({
            path:"courseContent",
            populate:{
                path:"subSection",
            },
        }).exec();
        
        return res.status(200).json({
            message:" section updated successfully",
            success:true,
            updatedCourseDetails,
        })
    }
    catch(error){
        console.log("this error occured while updating section",error);
        return res.status(500).json({
            message:"something went wrong while updating a section",
            success:false,
        })
    }
    
}


//delete section

exports.deleteSection = async (req,res) => {
    try{
        const {sectionId} = req.params;
        const courseid = req.body.courseid;
        //delete
        const deleteSection = await Section.findByIdAndDelete(sectionId);
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
            data,
        })
    }
    catch(error){
        console.log("this error occured while deleting section",error);
        return res.status(500).json({
            message:"something went wrong while deleting a new section",
            success:false,
        })
    }
}