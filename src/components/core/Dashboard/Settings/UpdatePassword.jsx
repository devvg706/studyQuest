import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitPasswordForm = async (data) => {
    try {
      await changePassword(token, data)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitPasswordForm)} className="space-y-6">
      {/* Password Update Card */}
      <div className="rounded-2xl border border-richblack-700 bg-richblack-800 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
        <h2 className="text-xl font-semibold text-richblack-5 mb-6">
          Update Password
        </h2>

        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Current Password Field */}
          <div className="relative w-full lg:w-[48%]">
            <label htmlFor="oldPassword" className="text-sm text-richblack-5">
              Current Password
            </label>
            <input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              placeholder="Enter Current Password"
              {...register("oldPassword", { required: true })}
              className="mt-2 w-full rounded-lg border border-richblack-600 bg-richblack-700 p-3 pr-12 text-sm text-richblack-5 placeholder:text-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            <span
              onClick={() => setShowOldPassword((prev) => !prev)}
              className="absolute right-4 top-[47px] z-10 cursor-pointer"
            >
              {showOldPassword ? (
                <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={22} fill="#AFB2BF" />
              )}
            </span>
            {errors.oldPassword && (
              <p className="mt-1 text-xs text-yellow-100">
                Please enter your current password.
              </p>
            )}
          </div>

          {/* New Password Field */}
          <div className="relative w-full lg:w-[48%]">
            <label htmlFor="newPassword" className="text-sm text-richblack-5">
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              placeholder="Enter New Password"
              {...register("newPassword", { required: true })}
              className="mt-2 w-full rounded-lg border border-richblack-600 bg-richblack-700 p-3 pr-12 text-sm text-richblack-5 placeholder:text-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            <span
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute right-4 top-[47px] z-10 cursor-pointer"
            >
              {showNewPassword ? (
                <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={22} fill="#AFB2BF" />
              )}
            </span>
            {errors.newPassword && (
              <p className="mt-1 text-xs text-yellow-100">
                Please enter your new password.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => navigate("/dashboard/my-profile")}
          className="rounded-md bg-richblack-700 px-6 py-2 text-sm font-semibold text-richblack-100 hover:bg-richblack-600 transition"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Update" />
      </div>
    </form>
  )
}
