import React from 'react'
import CTAButton from '../../../components/core/HomePage/Button'

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "StudyQuest partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "StudyQuest partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "StudyQuest partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "StudyQuest partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "StudyQuest partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="mx-auto w-[350px] xl:w-fit grid grid-cols-1 xl:grid-cols-4 gap-6 mb-16 px-4 xl:px-0">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`
              ${i === 0 && "xl:col-span-2 xl:h-[294px]"} 
              ${card.order % 2 === 1
                ? "bg-richblack-700"
                : card.order % 2 === 0
                ? "bg-richblack-800"
                : "bg-gradient-to-br from-[#0f172a] to-[#1e293b]"} 
              ${card.order === 3 && "xl:col-start-2"} 
              rounded-xl p-6 xl:p-8 h-full shadow-md hover:shadow-blue-500/20 transition-shadow duration-300
            `}
          >
            {/* Special Card (Intro) */}
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-4">
                <div className="text-3xl md:text-4xl font-semibold leading-tight">
                  {card.heading}{" "}
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text">
                    {card.highlightText}
                  </span>
                </div>
                <p className="text-richblack-300 font-medium leading-relaxed">
                  {card.description}
                </p>
                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              // Standard Cards
              <div className="flex flex-col gap-4 h-full justify-between">
                <h1 className="text-richblack-5 text-lg font-semibold">
                  {card.heading}
                </h1>
                <p className="text-richblack-300 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default LearningGrid
