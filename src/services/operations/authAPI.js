import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints


export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, { email });
      console.log("reset password token response", response);  // Debug output

      // Corrected condition
      if (!response || response.status !== 200) {
        toast.error("please enter valid email ID")
        throw new Error(response?.data?.message || "Failed to send email");
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);  // This now gets called correctly
    } catch (error) {
      console.error("reset password token error", error);
      toast.error("Please enter valid Email ID 🤨" || "Failed to send email");
      setEmailSent(false);
    }
    dispatch(setLoading(false));
  };
}


export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)
      console.log("IMAGE ON LOGIN", response.data.LoginUserExist.image);
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      if(response.data.LoginUserExist){
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.LoginUserExist?.image
          ? response.data.LoginUserExist.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.LoginUserExist.firstName}${response.data.LoginUserExist.lastName}`
        dispatch(setUser({ ...response.data.LoginUserExist, image: userImage })) //If LoginUserExist already had an image key, this new value (userImage) will replace it.If it didn’t have one, it will just add a new image property.
        localStorage.setItem("user", JSON.stringify({ ...response.data.LoginUserExist, image: userImage }))
      }
      else{
        dispatch(setUser(null));
        localStorage.removeItem("user");
      }
      
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")

    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    //dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}


export function resetPassword(password,confirmPassword,token){
  return async(dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST",RESETPASSWORD_API,{
        password,confirmPassword,token
      });
      console.log("reset password",response);
      if(!response.data.success){
        throw new Error(response.data.message);
      }
      toast.success("Password has been Reset")
    }
    catch(error){
      console.log("RESET Password TOKEN Error",error);
      toast.error("Reset password failed");
    }
    dispatch(setLoading(false));
  }
}