import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [requirement, setRequirement] = useState("")
  const [requirementsList, setRequirementsList] = useState([])

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions)
    }
    register(name, {
      required: true,
      validate: (value) => value.length > 0,
    })
   
  }, [])

  useEffect(() => {
    setValue(name, requirementsList)
    
  }, [requirementsList])

  const handleAddRequirement = () => {
    if (requirement.trim() !== "") {
      setRequirementsList([...requirementsList, requirement.trim()])
      setRequirement("")
    }
  }

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = requirementsList.filter((_, i) => i !== index)
    setRequirementsList(updatedRequirements)
  }

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-richblack-100 mb-1">
        {label} <sup className="text-pink-200">*</sup>
      </label>

      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Enter requirement"
          className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm text-richblack-5 placeholder:text-richblack-400 focus:border-yellow-200 focus:outline-none focus:ring-1 focus:ring-yellow-200 transition-all duration-200"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-richblack-900 hover:bg-yellow-300 transition-all duration-200"
        >
          Add
        </button>
      </div>

      {/* Display List */}
      {requirementsList.length > 0 && (
        <ul className="mt-3 space-y-2">
          {requirementsList.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-richblack-800 px-3 py-2 text-sm text-richblack-5"
            >
              <span className="w-[90%] break-words">{item}</span>
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="ml-2 text-xs text-pink-200 hover:text-pink-300 transition"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Validation Error */}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
