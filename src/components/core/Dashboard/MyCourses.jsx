import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI'
import IconBtn from '../../common/IconBtn'
import CoursesTable from '../../core/Dashboard/InstructorCourses/CoursesTable'

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) setCourses(result)
    }
    fetchCourses()
  }, [])

  return (
    <div className="w-full px-6 py-10 lg:px-12">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-yellow-50">My Courses</h1>
        <IconBtn
          text="Add Course"
          onClick={() => navigate('/dashboard/add-course')}
        />
      </div>

      {courses.length > 0 ? (
        <CoursesTable courses={courses} setCourses={setCourses} />
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-richblack-300">
          <p className="text-lg">You haven’t created any courses yet.</p>
          <IconBtn
            text="Create your first course"
            onClick={() => navigate('/dashboard/add-course')}
          />
        </div>
      )}
    </div>
  )
}

export default MyCourses
