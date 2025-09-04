import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-richblack-800 p-6 shadow-lg border border-richblack-700">
      {/* Course Thumbnail */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Pricing */}
      <div className="mt-6">
        <p className="text-3xl font-bold text-yellow-50">₹{CurrentPrice}</p>
        <p className="mt-2 text-center text-sm text-richblack-300 italic">
          30-Day Money-Back Guarantee
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4">
        <button
          className="w-full rounded-md bg-yellow-50 py-2 font-semibold text-richblack-900 hover:bg-yellow-100 transition duration-200"
          onClick={
            user && course?.studentsEnrolled.includes(user?._id)
              ? () => navigate("/dashboard/enrolled-courses")
              : handleBuyCourse
          }
        >
          {user && course?.studentsEnrolled.includes(user?._id)
            ? "Go To Course"
            : "Buy Now"}
        </button>

        {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
          <button
            onClick={handleAddToCart}
            className="w-full rounded-md bg-richblack-700 py-2 font-semibold text-richblack-5 hover:bg-richblack-600 border border-richblack-600 transition duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Course Features */}
      <div className="mt-6">
        <h2 className="mb-3 text-xl font-semibold text-richblack-25">
          This Course Includes:
        </h2>
        <ul className="space-y-3 text-sm text-caribbeangreen-100">
          {course?.instructions?.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <BsFillCaretRightFill className="mt-[2px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Share Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleShare}
          className="mx-auto flex items-center gap-2 text-sm text-yellow-100 hover:text-yellow-50 transition duration-200"
        >
          <FaShareSquare size={16} />
          Share
        </button>
      </div>
    </div>
  )
}

export default CourseDetailsCard
