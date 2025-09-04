const RatingAndReview = require("../models/RatingAndReview");
const User = require("../models/User");
const Course = require("../models/Course");
const mongoose = require("mongoose")

exports.createRating = async (req,res) => {
    try{
        const userId = req.user.id
        const {rating,review,courseId} = req.body;
        //check user is enrolled or not
        const courseDetails = await Course.findOne({
            _id:courseId,
            studentsEnrolled:{$elemMatch:{$eq:userId}}
        })
        if(!courseDetails){
            return re.status(401).json({
                success:false,
                message:"student is now enrolled in this course",
            })
        }
        //check if user has already reviewd the course or not
        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,
            course:courseId,
        });
        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"user has already reviewd",
            })
        }
        //create the entry and update the course with this rating
        const ratingandreview = await RatingAndReview.create({
            rating:rating,
            review:review,
            user:userId,
            course:courseId,
        });
        const updateCourse = await Course.findOneAndUpdate({_id:courseId},{
            $push:{ratingAndReviews:ratingandreview._id}
        },{new:true});

        return res.status(200).json({
            success:true,
            message:"rating and review created success"
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong in creating rating and review"
        })
    }
}
//get average rating

exports.getAverageRating = async (req,res) =>{
    try{
        const courseId = req.body.courseId;
        //calculate average
        const result = await RatingAndReview.aggregate([
            {
                $match:{
                    course : new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating:{$avg: "$rating"},
                }
            }
        ])
        if(result.length > 0){
            return res.status(200).json({
                success:true,
                averageRating:result[0].averageRating,
            })
        }
        return res.status(200).json({
            success:true,
            message:"Average rating is 0, no ratings given till now",
            averageRating:0,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong in rating and review"
        })
    }
}


exports.getAllRating = async (res,req) => {
    try{
        const allReviews = await RatingAndReview.find({})
                            .sort({rating:"desc"})
                            .populate({
                                path:"course",
                                select:"courseName"
                            })
                            .populate({
                                path:"user",
                                select:" firstName lastName image "
                            })
                            .exec();
        return res.status(200).json({
            success:true,
            message:"successfully fetched all rating and reviews",
            data:allReviews,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong in getting all rating and review"
        })
    }
   
}