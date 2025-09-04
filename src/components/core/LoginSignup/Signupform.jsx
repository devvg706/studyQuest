import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { ACCOUNT_TYPE   } from '../../../utils/constants';
import Tab from '../../common/Tab'
import { useDispatch } from "react-redux"
import {setSignupData} from "../../../slices/authSlice"
import {sendOtp} from '../../../services/operations/authAPI'
const Signupform = ({setisloggedin}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showpassword,setshowpassword] = useState(false);
    const [showcpassword,setshowcpassword] = useState(false);
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
    const [signupformdata,setsignupformdata] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const changehandler = (event) => {
        setsignupformdata(prevformdata => {
            return {
                ...prevformdata,
                [event.target.name] : event.target.value
            }
        })
    }
    
    const tabData = [
        {
        id: 1,
        tabName: "Student",
        type: ACCOUNT_TYPE.STUDENT,
        },
        {
        id: 2,
        tabName: "Instructor",
        type: ACCOUNT_TYPE.INSTRUCTOR,
        },
    ];



    const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if (signupformdata.password !== signupformdata.confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...signupformdata,
      accountType, //this means if account type is present in signupformdata than that will be updated with the value and if not there than a new entry would be created in the signupformdata 
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(signupformdata.email, navigate))

    // Reset
    setsignupformdata({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }
  return (
    <div className="signup-container">
        {/* student and instructor */}
        <Tab tabData={tabData} accountType={accountType} setAccountType={setAccountType} />
        
  <form onSubmit={handleOnSubmit} className="mt-6 flex flex-col gap-6 w-full max-w-[480px]">
  {/* First and Last Name */}
  <div className="flex gap-4">
    <div className="flex flex-col w-1/2">
      <label htmlFor="firstName" className="text-sm text-richblack-5 mb-1">First Name<span className="text-pink-200">*</span></label>
      <input
        required
        type="text"
        id="firstName"
        name="firstName"
        value={signupformdata.firstName}
        onChange={changehandler}
        placeholder="Enter first name"
        className="bg-richblack-800 text-white p-3 rounded-md border border-richblack-700 placeholder:text-richblack-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
      />
    </div>
    <div className="flex flex-col w-1/2">
      <label htmlFor="lastname" className="text-sm text-richblack-5 mb-1">Last Name<span className="text-pink-200">*</span></label>
      <input
        required
        type="text"
        id="lastName"
        name="lastName"
        value={signupformdata.lastName}
        onChange={changehandler}
        placeholder="Enter last name"
        className="bg-richblack-800 text-white p-3 rounded-md border border-richblack-700 placeholder:text-richblack-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
      />
    </div>
  </div>

  {/* Email Address */}
  <div className="flex flex-col">
    <label htmlFor="email" className="text-sm text-richblack-5 mb-1">Email Address<span className="text-pink-200">*</span></label>
    <input
      required
      type="email"
      id="email"
      name="email"
      value={signupformdata.email}
      onChange={changehandler}
      placeholder="Enter email address"
      className="bg-richblack-800 text-white p-3 rounded-md border border-richblack-700 placeholder:text-richblack-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
    />
  </div>

  {/* Password and Confirm Password */}
  <div className="flex gap-4">
    <div className="flex flex-col w-1/2 relative">
      <label htmlFor="password" className="text-sm text-richblack-5 mb-1">Create Password<span className="text-pink-200">*</span></label>
      <input
        required
        type={showpassword ? "text" : "password"}
        id="password"
        name="password"
        value={signupformdata.password}
        onChange={changehandler}
        placeholder="Enter password"
        className="bg-richblack-800 text-white p-3 pr-10 rounded-md border border-richblack-700 placeholder:text-richblack-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
      />
      <span
        onClick={() => setshowpassword((prev) => !prev)}
        className="absolute right-3 top-10 text-xl text-richblack-300 cursor-pointer"
      >
        {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </span>
    </div>

    <div className="flex flex-col w-1/2 relative">
      <label htmlFor="confirmPassword" className="text-sm text-richblack-5 mb-1">Confirm Password<span className="text-pink-200">*</span></label>
      <input
        required
        type={showcpassword ? "text" : "password"}
        id="confirmPassword"
        name="confirmPassword"
        value={signupformdata.confirmPassword}
        onChange={changehandler}
        placeholder="Confirm password"
        className="bg-richblack-800 text-white p-3 pr-10 rounded-md border border-richblack-700 placeholder:text-richblack-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
      />
      <span
        onClick={() => setshowcpassword((prev) => !prev)}
        className="absolute right-3 top-10 text-xl text-richblack-300 cursor-pointer"
      >
        {showcpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </span>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-yellow-50 text-black font-semibold text-lg py-3 rounded-md hover:bg-yellow-100 transition-all duration-300"
  >
    Create Account
  </button>
</form>

    </div>
  )
}

export default Signupform