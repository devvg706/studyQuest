const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/Auth");
const {
    resetPasswordToken,
    resetPassword
} = require("../controllers/ResetPassword");

const {
    sendOTP,
    signUp,
    login,
    changePassword,
} = require("../controllers/auth");
router.post("/login",login)
router.post("/signup",signUp)
router.post("/sendotp",sendOTP)
router.post("/changepassword",auth,changePassword)
router.post("/reset-password-token",resetPasswordToken)
router.post("/reset-password",resetPassword)

router.post("/test", auth , (req,res) => {
    res.status(200).json({
        message: "This is a protected route",
        success: true,
        user: req.user
    });
})
module.exports = router