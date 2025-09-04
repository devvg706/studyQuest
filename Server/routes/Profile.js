const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/Auth");
const {
    deleteUser,
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getEnrolledCourses,
} = require("../controllers/Profile")
console.log(updateProfile,updateDisplayPicture)
console.log("this is the profile route");
router.delete("/deleteProfile",deleteUser);
router.put("/updateProfile",auth,updateProfile);
router.get("/getUserDetails",auth,getAllUserDetails);
router.get("/getEnrolledCourses",auth,getEnrolledCourses)
router.put("/updateDisplayPicture",auth,updateDisplayPicture)

module.exports = router;