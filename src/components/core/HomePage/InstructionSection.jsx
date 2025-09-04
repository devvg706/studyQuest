import React from 'react'
import Instructor from '../../../assests/Images/Instructor.8b4c4f204053f0dfe844.png'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa";
const InstructionSection = () => {
  return (
    <div className='flex flex-row gap-20 items-center mt-24'>
        <div className='p-3 bg-white rounded-lg shadow-white border-4 border-white transition-all duration-300 hover:scale-105'>
          <img src={Instructor} alt="instructor image " className='rounded-md w-full object-cover' />
        </div>
        <div className='w-[50%] flex flex-col gap-10'>
          <div className='text-4xl font-semibold w-[50%]'>
            Become an { }
            <span className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>Instructor</span>
          </div>
          <p className='font-medium text-[16px] w-[80%] text-richblack-300'>Instructors from around the world teach milions of students on StudyQuest. We provide the tools and skills to teach what you love.</p>
          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-2 w-fit'>
                Start teaching Today
                <FaArrowRight/>
              </div>
            </CTAButton>
          </div>
          
        </div>
    </div>
    
  )
}

export default InstructionSection