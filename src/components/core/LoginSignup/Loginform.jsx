import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../../services/operations/authAPI'
import Spinner from '../../common/Spinner'


const Loginform = ({setisloggedin}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth)
    const [showpassword,setshowpassword] = useState(false);
    const [loginformdata,setloginformdata] = useState({
        email:'',
        password:''
    });
    const changehandler = (event) => {
        setloginformdata(prevformdata => {
            return {
                ...prevformdata,
                [event.target.name] : event.target.value
            }
        })
    }
    const submithandler = (e) => {
         e.preventDefault()
        dispatch(login(loginformdata.email, loginformdata.password, navigate));
        
    }
  return (
    <div>
       {
        loading ? (
          <Spinner></Spinner>
        ) : ( <form
  onSubmit={submithandler}
  className="flex w-full flex-col gap-y-6 mt-6"
>
  {/* Email */}
  <div className="flex flex-col gap-1">
    <label htmlFor="loginemail" className="text-sm text-richblack-100">
      Email Address <sup className="text-pink-200">*</sup>
    </label>
    <input
      type="email"
      id="loginemail"
      name="email"
      placeholder="Enter your Email"
      value={loginformdata.email}
      onChange={changehandler}
      className="w-full rounded-lg bg-richblack-700 px-4 py-3 text-richblack-5 placeholder:text-richblack-300 outline-none ring-1 ring-richblack-600 focus:ring-2 focus:ring-yellow-50 transition duration-200"
    />
  </div>

  {/* Password */}
  <div className="flex flex-col gap-1 relative">
    <label htmlFor="loginpassword" className="text-sm text-richblack-100">
      Password <sup className="text-pink-200">*</sup>
    </label>
    <input
      required
      type={showpassword ? "text" : "password"}
      autoComplete="new-password"
      id="loginpassword"
      name="password"
      value={loginformdata.password}
      onChange={changehandler}
      placeholder="Enter your Password"
      className="w-full rounded-lg bg-richblack-700 px-4 py-3 text-richblack-5 placeholder:text-richblack-300 outline-none ring-1 ring-richblack-600 focus:ring-2 focus:ring-yellow-50 transition duration-200 pr-12"
    />
    <span
      onClick={() => setshowpassword((prev) => !prev)}
      className="absolute right-4 top-[2.5rem] cursor-pointer text-xl text-richblack-300"
    >
      {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
    </span>
  </div>

  {/* Forgot Password */}
  <div className="text-right">
    <Link
      to="/forgot-password"
      className="text-xs text-blue-100 hover:underline"
    >
      Forgot Password?
    </Link>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-2 w-full rounded-lg bg-gradient-to-r from-yellow-25 to-yellow-100 py-3 text-center font-semibold text-richblack-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
  >
    Log In
  </button>
</form>)
       }

    </div>
  )
}
export default Loginform