import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { resetPassword } from "../services/operations/authAPI"
import Spinner from "../components/common/Spinner"

function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
  {loading ? (
    <Spinner/>
  ) : (
    <div className="w-full max-w-[500px] rounded-xl bg-richblack-800 p-8 shadow-lg shadow-richblack-700 transition-all duration-300">
      <h1 className="text-3xl font-bold text-richblack-5">Choose new password</h1>
      <p className="mt-2 text-lg text-richblack-200">
        Almost done. Enter your new password and you're all set.
      </p>

      <form onSubmit={handleOnSubmit} className="mt-6 space-y-6">
        {/* Password Field */}
        <label className="relative block">
          <p className="mb-1 text-sm font-medium text-richblack-100">
            New Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-lg bg-richblack-700 py-3 pl-4 pr-12 text-richblack-5 placeholder:text-richblack-300 outline-none ring-1 ring-richblack-600 focus:ring-2 focus:ring-yellow-50 transition duration-200"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-10 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        {/* Confirm Password Field */}
        <label className="relative block">
          <p className="mb-1 text-sm font-medium text-richblack-100">
            Confirm New Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Confirm Password"
            className="w-full rounded-lg bg-richblack-700 py-3 pl-4 pr-12 text-richblack-5 placeholder:text-richblack-300 outline-none ring-1 ring-richblack-600 focus:ring-2 focus:ring-yellow-50 transition duration-200"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-4 top-10 cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-50 py-3 text-center font-semibold text-richblack-900 hover:bg-yellow-100 transition-all duration-200"
        >
          Reset Password
        </button>
      </form>
      {/* Back to Login */}
      <div className="mt-6 text-center">
        <Link to="/login" className="text-sm text-richblack-200 hover:underline flex justify-center items-center gap-1">
          <BiArrowBack />
          Back to Login
        </Link>
      </div>
    </div>
  )}
</div>
  )
}

export default UpdatePassword