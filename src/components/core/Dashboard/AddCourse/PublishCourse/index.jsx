import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../../../common/IconBtn'
import { resetCourseState, setStep } from '../../../../../slices/courseSlice'
import { COURSE_STATUS } from '../../../../../utils/constants'
import { editCourseDetails } from '../../../../../services/operations/courseDetailsAPI'

const PublishCourse = () => {
  const { register, handleSubmit, setValue, getValues } = useForm()
  const { course } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue('public', true)
    }
  }, [])

  const goToCourses = () => {
    dispatch(resetCourseState())
    // navigate("/dashboard/my-courses")
  }

  const handleCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED && getValues('public') === true) ||
      (course.status === COURSE_STATUS.DRAFT && getValues('public') === false)
    ) {
      goToCourses()
    }

    const formData = new FormData()
    formData.append('courseId', course._id)
    const courseStatus = getValues('public') ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT
    formData.append('status', courseStatus)

    setLoading(true)
    const result = await editCourseDetails(formData, token)
    if (result) {
      goToCourses()
    }
    setLoading(false)
  }

  const onSubmit = () => {
    handleCoursePublish()
  }

  const goBack = () => {
    dispatch(setStep(2))
  }

  return (
    <div className="rounded-lg border border-richblack-700 bg-richblack-800 p-8 shadow-md transition-all duration-300">
      <p className="mb-6 text-2xl font-semibold text-yellow-400">Publish Your Course</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <label
            htmlFor="public"
            className="flex items-center gap-4 rounded-md bg-richblack-700 px-4 py-3 hover:bg-richblack-600 transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              id="public"
              {...register('public')}
              className="h-5 w-5 rounded border-yellow-400 text-yellow-400 focus:ring-yellow-500"
            />
            <span className="text-richblack-5 font-medium text-sm sm:text-base">
              Make this course public and available to all learners.
            </span>
          </label>

          <div className="mt-4 flex justify-end gap-4">
            <button
              disabled={loading}
              type="button"
              onClick={goBack}
              className="rounded-md border border-richblack-600 bg-richblack-700 px-6 py-2 text-sm font-medium text-richblack-5 hover:bg-richblack-600 transition-all duration-200"
            >
              Back
            </button>

            <IconBtn disabled={loading} text="Save Changes" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PublishCourse
