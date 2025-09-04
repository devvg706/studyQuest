import React, { useState } from 'react'
import { Table, Tr, Tbody, Thead, Td, Th } from 'react-super-responsive-table'
import { COURSE_STATUS } from '../../../../utils/constants'
import { IoTimer } from "react-icons/io5"
import { TiTick } from "react-icons/ti"
import { MdModeEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import ConfirmationModal from '../../../common/ConfirmationModal'
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
import { useSelector } from 'react-redux'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CoursesTable = ({ courses, setCourses }) => {
  const token = useSelector((state) => state.auth.token)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setconfirmationModal] = useState(false)
    const navigate = useNavigate()
  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({courseId}, token)
    const result = await fetchInstructorCourses(token)
    if (result) setCourses(result)
    setconfirmationModal(null)
    setLoading(false)
  }

  return (
    <div className="text-white w-full rounded-md overflow-hidden">
      <Table className="w-full border border-richblack-700 rounded-md overflow-hidden">
        <Thead>
          <Tr className="bg-richblack-700 text-richblack-25 text-left text-sm md:text-base font-semibold uppercase">
            <Th className="py-4 px-6">Courses</Th>
            <Th className="py-4 px-6">Duration</Th>
            <Th className="py-4 px-6">Price</Th>
            <Th className="py-4 px-6 text-center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.length === 0 ? (
            <Tr>
              <Td colSpan={4} className="py-6 px-6 text-center text-richblack-100">
                No Courses Found
              </Td>
            </Tr>
          ) : (
            courses.map((course) => (
              <Tr
                key={course._id}
                className="border-b border-richblack-600 hover:bg-richblack-800 transition-all duration-200"
              >
                <Td className="py-6 px-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src={course.thumbnail}
                      alt={course.courseName}
                      className="h-[100px] w-[160px] rounded-md object-cover shadow-md"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-semibold text-richblack-5">{course.courseName}</p>
                      <p className="text-sm text-richblack-300 line-clamp-2">{course.courseDescription}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {course.status === COURSE_STATUS.DRAFT ? (
                          <>
                            <IoTimer className="text-pink-400 text-lg" />
                            <span className="text-sm text-pink-400 font-medium">DRAFTED</span>
                          </>
                        ) : (
                          <>
                            <TiTick className="text-yellow-400 text-lg" />
                            <span className="text-sm text-yellow-400 font-medium">PUBLISHED</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Td>
                <Td className="py-6 px-6 align-middle text-richblack-100 text-sm md:text-base">2 hr 30 min</Td>
                <Td className="py-6 px-6 align-middle text-richblack-100 text-sm md:text-base">₹{course.price}</Td>
                <Td className="py-6 px-6 text-center align-middle">
                  <div className="flex items-center justify-center gap-6 text-lg text-richblack-25">
                    <button
                      disabled={loading}
                      className="hover:text-yellow-300 transition-colors duration-200"
                      onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    >
                      <MdModeEdit />
                    </button>
                    <button
                      disabled={loading}
                      onClick={() =>
                        setconfirmationModal({
                          text1: "Do you want to delete this course",
                          text2: "All the data related to this course will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => {},
                          btn2Handler: !loading ? () => setconfirmationModal(null) : () => {},
                        })
                      }
                      className="hover:text-pink-400 transition-colors duration-200"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}

export default CoursesTable
