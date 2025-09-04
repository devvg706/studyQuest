import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddCircleSharp } from 'react-icons/io5'
import toast from 'react-hot-toast'

import IconBtn from '../../../../common/IconBtn'
import NestedView from './NestedView'
import {
  setCourse,
  setEditCourse,
  setStep,
} from '../../../../../slices/courseSlice'
import {
  createSection,
  updateSection,
} from '../../../../../services/operations/courseDetailsAPI'

const CourseBuilderForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [editSectionName, setEditSectionName] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)

  const cancelEdit = () => {
    setEditSectionName(null)
    setValue("sectionName", "")
  }

  const goToBack = () => {
    dispatch(setEditCourse(true))
    dispatch(setStep(1))
  }

  const goToNext = () => {
    console.log("gotonext function is getting called")
    if (course.courseContent.length === 0) {
      toast.error("Create at least one course section")
      return
    }
    if (course.courseContent.some((section) => section.subSection.length === 0)) {
      toast.error("Please add at least one lecture in each section")
      return
    }
    dispatch(setStep(3))
  }

  const onsubmit = async (data) => {
    setLoading(true)
    let result

    if (editSectionName) {
      result = await updateSection({
        sectionName: data.sectionName,
        sectionId: editSectionName,
        courseId: course._id,
      }, token);
    } else {
      result = await createSection({
        sectionName: data.sectionName,
        courseId: course._id,
      }, token);
    }
    // console.log("this is the result",result)

    if (result) {
      dispatch(setCourse(result))
      setEditSectionName(null)
      setValue("sectionName", "")
    }
    setLoading(false)
  }

  const handleChangeEditName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      setEditSectionName(null)
      setValue("sectionName", "")
      return;
    }
    setEditSectionName(sectionId)
    setValue("sectionName", sectionName)
  }

  return (
    <div className="w-full space-y-10 text-white">
      <p className="text-2xl font-semibold text-yellow-400">Course Builder</p>

      {/* Form to Add Section */}
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-6 rounded-lg bg-richblack-800 p-6"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sectionName"
            className="text-sm font-medium text-richblack-5"
          >
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            placeholder="Add section name here"
            {...register("sectionName", { required: true })}
            className="rounded-md border border-richblack-600 bg-richblack-700 px-4 py-2 text-white placeholder:text-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.sectionName && (
            <span className="text-xs text-pink-200">
              Section name is required
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <IconBtn
            type="submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses="!px-6 !py-2"
          >
            <IoAddCircleSharp size={18} color='grey'/>
          </IconBtn>

          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblue-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Render Sections */}
      
      {course.courseContent.length > 0 && (

        <NestedView handleChangeEditName={handleChangeEditName} />
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={goToBack}
          className="rounded-md border border-richblack-600 bg-richblack-700 px-5 py-2 text-sm font-medium text-white hover:bg-richblack-600 transition-all"
        >
          Back
        </button>
        <IconBtn
          text="Next"
          onClick={goToNext}
          customClasses="!px-6 !py-2"
        />
      </div>
    </div>
  )
}

export default CourseBuilderForm
