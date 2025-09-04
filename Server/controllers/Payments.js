const {instance} = require("../config/razorpay");
const mongoose = require("mongoose")
const Course = require("../models/Course");
const crypto = require("crypto");
const User = require("../models/User")

const mailSender = require("../utils/mailSender");
const {enrollmentConfirmationEmailTemplate} = require("../mailTemplates/courseEnrolledmailTemplate")
const {paymentSuccessMailTemplate} = require("../mailTemplates/paymentSuccessMailTemplate")

exports.capturePayment = async (req,res) => {
    const {courses} = req.body;
    // console.log("PRINTING COURSES FROM PAYMENT.JS",courses)
    const userId = req.user.id;
    if(courses.length === 0){
        return res.json({
            success:false,
            message:"please provide course Id"
        })
    }
    let totalAmount  = 0;
    for(const course_id of courses){
        console.log("PRINTING COURSE ID",course_id)
        let course;
        try{
            course = await Course.findById(course_id);
            if(!course){
                return res.status(200).json({
                    success:false,
                    message:"Could not find the course"
                })
            }
            const uid = new mongoose.Types.ObjectId(userId);//converting userid from string to objectid so that we do course.studentsEnrolled.includes(uid) as course.studentsEnrolled contains objectids and not ids as a string
            if(course.studentsEnrolled.includes(uid)){
                return res.status(200).json({
                    success:false,
                    message:"student is already enrolled"
                })
            }
            totalAmount = totalAmount + Number(course.price);
            console.log("Total amount to be captured:", totalAmount);
        }
        catch(error){
            console.log("this error occured in capture payment controller loop",error)
            return res.status(500).json({
                success:false,
                message:"something went wrong in loop of capture controller"
            })
        }
    }
   
    const options = {
        amount:totalAmount*100,
        currency:"INR",
        receipt:Math.random(Date.now()).toString(),
    }
    try{
        const paymentResponse = await instance.orders.create(options);
        res.json({
            success:true,
            message:paymentResponse,
            key: process.env.RAZORPAY_KEY,
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"something went wrong in capture payment controller"
        })
    }

}
// exports.capturePayment = async (req,res) => {
//     try{
//         const {course_Id} = req.body;
//         const {userId} = req.user.id;  //req.user ke andar pura payload ki value hai in object form thats why req.user.id

//         if(!course_Id){
//             return res.json({
//                 message:"please provide valid course id",
//                 success:false,
//             })
//         }
//         //fetch course details
//         let courseDetails;
//         courseDetails = await Course.findById(course_Id);
//         //fetch user details
//         const userDetails = await User.findById(userId);
//         const amount = courseDetails.price;
//         const currency = "INR";
//         let options = {
//             amount:amount*100,
//             currency,
//             receipt:Math.random(Date.now()).toString(),
//             notes:{
//                 courseId:course_Id,
//                 userId,
//             }
//         }
//         const paymentRespone = await instance.orders.create(options);
//         console.log(paymentRespone);
//         return res.status(200).json({
//             success:true,
//             courseName:courseDetails.courseName,
//             courseDescription:courseDetails.courseDescription,
//             thumbnail:courseDetails.thumbnail,
//             orderId:paymentRespone.id,
//             currency:paymentRespone.currency,
//             amount:paymentRespone.amount,
//         })
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             message:error.message,
//             success:false,
//         })
//     }  

// };

//verify signature 
// exports.verifySignature = async (req,res) =>{
//     const webhookSecret = "12345678";

//     const signature = req.headers("x-razorpay-signature");

//     const shasum = crypto.createHmac("sha256",webhookSecret);
//     shasum.update(JSON.stringify(req.body));
//     const digest = shasum.digest("hex");

//     if(signature === digest){
//         console.log("payment is authorised");
//         const {courseId,userId} = req.body.payload.payment.entity.notes;
//         try{
//             const enrolledCourse = await Course.findOneAndUpdate({_id:courseId},
//                 {$push:{studentsEnrolled:userId}},
//                 {new:true}
//             );
//             if(!enrolledCourse){
//                 return res.status(500).json({
//                     success:false,
//                     message:"course not found",
//                 })
//             }
//             console.log(enrolledCourse);

//             //find the student and add the course to their list enrolled courses
//             const enrolledStudent = await User.findOneAndUpdate({_id:userId},
//                 {$push:{courses:courseId}},
//                 {new:true},

//             )
//             console.log(enrolledStudent);
            
//             const htmlTemplate = courseEnrollmentEmail(enrolledStudent.firstName,enrolledCourse.courseName,enrolledCourse.price);
//             console.log("THIS IS THE RESPONSE OF welcome",WelcomeResponse);
//             const emailResponse = await mailSender(enrolledStudent.email,"Welcome Email From StudyQuest",htmlTemplate);
//             console.log("THIS IS THE RESPONSE OF welcome",emailResponse);

//             return res.status(200).json({
//                 success:true,
//                 message:"payment verified and course enrolled successfully",
//             })

//         } 
//         catch(error){
//             console.log("this errror occured while verifying signature",error);
//             return res.status(500).json({
//                 message:"something went wrong while verifiying signature or sending email ",
//                 success:false,
//             })
//         }
//     }
//     else{
//         return res.status(500).json({
//                 message:"invalid request",
//                 success:false,
//         });
//     }
// }
exports.verifySignature = async (req,res) => {
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_payment_id = req.body.razorpay_payment_id;
    const razorpay_signature = req.body?.razorpay_signature;
    const courses = req.body?.courses;
    const userId  = req.user.id;
    if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !courses || !userId ){
        return res.status(500).json({
            success:false,
            message:"payment failed credentials missing"
        })
    }
    let body = razorpay_order_id + "|" + razorpay_payment_id;
    console.log("PRINTING PROCESS.ENV.RAZORPAY_SECRET", process.env.RAZORPAY_SECRET)
    const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET).update(body.toString()).digest("hex");
    if(expectedSignature === razorpay_signature){
        await enrollStudents(courses,userId,res);

        return res.status(200).json({
            success:true,
            message:"Payment Verified",
        })

    }
    return res.status(200).json({
        success:"false",
        message:"Payment Failed"
    })
}
const enrollStudents = async (courses,userId,res) => {
    try{
        if(!courses || !userId){
        return res.status(400).json({
            success:false,
            message:"please provide data for courses || userid"
        })
    }
    for(const courseId of courses){
        //find the course and enroll student in it 
        const enrolledCourses = await Course.findOneAndUpdate({_id:courseId},{
            $push:{studentsEnrolled:userId}
        },{new:true})
        if(!enrolledCourses){
            return res.status(500).json({
                success:true,
                message:"Course not Found"
            })
        }
        //find the student and add the course to their list of enrolledcourses
        const enrolledStudent = await User.findByIdAndUpdate(userId,{$push:{courses:courseId}},{new:true})
        const htmlTemplate = enrollmentConfirmationEmailTemplate(enrolledCourses.courseName,enrolledStudent.firstName, enrolledCourses.price);
        const emailResponse = await mailSender(
            enrolledStudent.email,
            `successfully Enrolled into ${enrolledCourses.courseName}`,
            htmlTemplate,
        )
        console.log("THIS IS THE RESPONSE OF ENROLLMENT EMAIL",emailResponse);
    }
    }
    catch(error){
        console.log("the error ocured in verify signature controller",error);
        return res.status(500).json({
            success:false,
            message:"something went wrong in verify signature controller"
        })
    }
    
}
exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body

  const userId = req.user.id

  if (!orderId || !paymentId || !amount || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the details" })
  }

  try {
    const enrolledStudent = await User.findById(userId)
    const htmlTemplate = paymentSuccessMailTemplate(enrolledStudent.firstName, amount / 100, orderId, paymentId)
    await mailSender(
      enrolledStudent.email,
      `Payment Received`,
      htmlTemplate
    );
    return res.status(200).json({
        success:true,
        message:"Payment success email sent"
    })
  } catch (error) {
    console.log("error in sending mail", error)
    return res
      .status(400)
      .json({ success: false, message: "Could not send email" })
  }
}