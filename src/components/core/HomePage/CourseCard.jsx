import React from 'react';
import { MdPerson } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const CourseCard = ({ index, cardData, currentCardIndex, setCurrentCardIndex }) => {
 let isActive; 
  if(index=== currentCardIndex){
    isActive = true;
  }
  else{
    isActive = false;
  }

  return (
    <div
      onClick={() => setCurrentCardIndex(index)}
      className={`cursor-pointer rounded-md p-6 transition-all duration-300 
        ${isActive
          ? 'bg-white text-richblack-900 border-yellow-50 border-4 width-[] shadow-[200px]'
          : 'bg-richblack-800 text-white border-richblack-800 border-4'
        } translate-y-1/2 ]`}
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold">{cardData.heading}</h3>
      </div>

      <div className="mb-4">
        <p className={`text-sm ${isActive ? 'text-richblack-700' : 'text-richblack-300'}`}>
          {cardData.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 mt-4 border-t border-dashed border-richblack-400 text-sm">
        <div className="flex items-center gap-2">
          <MdPerson className="text-lg" />
          <p>{cardData.level}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaBookReader className="text-lg" />
          <p>{cardData.lessonNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
