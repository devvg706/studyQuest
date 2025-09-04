import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"

const Course_Card = ({ course, Height }) => {
  return (
    <div className="bg-richblack-800 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <Link to={`/courses/${course._id}`}>
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={course?.thumbnail}
            alt={course?.courseName}
            className={`${Height} w-full object-cover rounded-t-xl`}
          />
        </div>

        {/* Course Info */}
        <div className="p-4 space-y-2">
          {/* Course Title */}
          <h3 className="text-lg font-semibold text-richblack-5 line-clamp-2">
            {course?.courseName}
          </h3>

          {/* Instructor Name */}
          <p className="text-sm text-richblack-200">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>

          {/* Rating (Static example, can be dynamic later) */}
          {/* Uncomment and use real ratings when available */}
          {/* <div className="flex items-center gap-1 text-yellow-50 text-sm">
            <FaStar />
            <span>4.7</span>
          </div> */}

          {/* Price */}
          <p className="text-yellow-50 font-medium text-md">₹{course?.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Course_Card
