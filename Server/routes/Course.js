const express= require("express");
const router = express.Router();

const {
    createCourse,
    showAllCourses,
    getCourseDetails,
    editCourse,
    deleteCourse,
    getInstructorCourses,
} = require("../controllers/Course")



const {
    createCategory,
    showAllCategory,
    categoryPageDetails,
} = require("../controllers/Category")

const {
    createSection,
    updateSection,
    deleteSection,
} = require("../controllers/Section")

const {
    createSubSection,
    deleteSubSection,
    updateSubSection
} = require("../controllers/SubSection")

const {
    getAverageRating,
    createRating,
    getAllRating,
} = require("../controllers/RatingAndReview")


const {auth,isAdmin,isInstructor,isStudent}=require("../middlewares/Auth");


router.post("/createCourse",auth,isInstructor,createCourse)
router.post("/createSection",auth,isInstructor,createSection)
router.get("/showAllCourses",showAllCourses)
router.post("/getCourseDetails",getCourseDetails)
router.post("/updateSection",auth,isInstructor,updateSection)
router.post("/deleteSection",auth,isInstructor,deleteSection)
router.post("/editCourse",auth,isInstructor,editCourse)
router.delete("/deleteCourse", deleteCourse)
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)

router.post("/createCategory",auth,isAdmin,createCategory)
router.get("/showAllCategory",showAllCategory)


//pending
router.post("/addSubSection",auth,isInstructor,createSubSection)
router.post("/updatesubsection",auth,isInstructor,updateSubSection)
router.post("/deletesubsection",auth,isInstructor,deleteSubSection)

router.post("/createRating",auth,isStudent,createRating);
router.get("/getAverageRating",getAverageRating);
router.get("/getReviews",getAllRating);
router.post("/getCategoryPageDetails", categoryPageDetails);

module.exports = router;