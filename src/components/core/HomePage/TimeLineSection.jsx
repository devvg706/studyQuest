import React from "react";
import logo1 from "../../../assests/TimeLineLogo/logo1.png";
import logo2 from "../../../assests/TimeLineLogo/logo2.png";
import logo3 from "../../../assests/TimeLineLogo/logo3.png";
import logo4 from "../../../assests/TimeLineLogo/logo4.png";
import timelineImage from "../../../assests/Images/TimelineImage.a610b1e5d891ac77fe93.png";

const timeLine = [
  {
    Logo: logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">

        <div className="w-full lg:w-1/2 relative space-y-10">
            {timeLine.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                    {/* Vertical Line (only below, except last item) */}
                    {index !== timeLine.length - 1 && (
                        <div className="absolute left-[13px] top-[34px] h-full border-l-2 border-dotted border-richblack-400"></div>
                    )}

                    {/* Dot + Icon */}
                    <div className="relative z-10 w-7 h-7 rounded-full bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center">
                        <img src={item.Logo} alt="icon" className="w-4 h-4 object-contain" />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-lg font-bold text-richblack-600">{item.heading}</h3>
                        <p className="text-gray-600 text-richblack-400 font-semibold">{item.Description}</p>
                    </div>
                </div>
            ))}
        </div>


        {/* Right: Image with glow and stats */}
        <div className="relative group max-w-md w-full">
          {/* Glow */}
          <div className="absolute -inset-3 bg-richblue-700 blur-2xl opacity-40 rounded-xl z-0 group-hover:scale-105 transition-all duration-300"></div>

          {/* Image */}
          <img
            src={timelineImage}
            alt="timeline"
            className="relative z-10 w-full h-[400px] rounded-xl object-cover"
          />

          <div className="absolute z-20 bg-caribbeangreen-700 flex flex-row text-white uppercase py-4 px-6 rounded-xl left-1/2 -translate-x-1/2 translate-y-[-50%] 
            transition-transform duration-300 group-hover:scale-105 shadow-lg">
            <div className="flex flex-row gap-3 items-center border-r border-caribbeangreen-300 px-5">
                <p className="text-2xl font-bold">10</p>
                <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
            </div>
            <div className="flex gap-3 items-center px-5">
                <p className="text-2xl font-bold">250</p>
                <p className="text-caribbeangreen-300 text-sm">Types Of Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineSection;
