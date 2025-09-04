import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [chips, setChips] = useState([])

  useEffect(() => {
    if (editCourse) {
      setChips(course?.tag)
    }
    register(name, {
      required: true,
      validate: (value) => value.length > 0,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue(name, chips)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chips])

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const chipValue = event.target.value.trim()
      if (chipValue && !chips.includes(chipValue)) {
        setChips((prev) => [...prev, chipValue])
        event.target.value = ""
      }
    }
  }

  const handleDeleteChip = (chipIndex) => {
    const newChips = chips.filter((_, index) => index !== chipIndex)
    setChips(newChips)
  }

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-richblack-100 mb-1">
        {label} <sup className="text-pink-200">*</sup>
      </label>

      <div className="flex min-h-[52px] flex-wrap items-center gap-2 rounded-lg bg-richblack-700 px-3 py-2 border border-richblack-600 focus-within:border-yellow-200 focus-within:ring-1 focus-within:ring-yellow-200 transition-all duration-200">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-richblack-900"
          >
            {chip}
            <button
              type="button"
              onClick={() => handleDeleteChip(index)}
              className="focus:outline-none hover:text-richblack-800 transition"
            >
              <MdClose className="text-base" />
            </button>
          </div>
        ))}

        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-sm text-richblack-5 placeholder:text-richblack-400 outline-none"
        />
      </div>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
