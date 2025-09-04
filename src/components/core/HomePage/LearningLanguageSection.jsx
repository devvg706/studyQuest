import React from 'react'
import knowyourprogress from '../../../assests/Images/Know_your_progress.cf3ea1c51544985430d3.png'
import Compare_with_others from '../../../assests/Images/Compare_with_others.8e950efa990d53f34b35893a1e03cea1.svg'
import planyourlesson from '../../../assests/Images/Plan_your_lessons.f123ccf442a2a364a459a7bbec807045.svg'
import CTAButton from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='flex flex-col gap-5 mr-[170px] items-center mb-9 '>
        <div className='text-4xl font-semibold  text-center text-richblack-500'>
            Your Swiss Knife for { }
            <span className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>learning any language</span>
        </div>
        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,progresstracking, custom schedule and more.

        </div>
        <div className='flex flex-row items-center justify-center mt-5 '>
            <img src={knowyourprogress} alt="knowyourprogress" className='object-contain -mr-32'/>
            <img src={Compare_with_others} alt="knowyourprogress" className='object-contain -mr-24'/>
            <img src={planyourlesson} alt="knowyourprogress" className='object-contain -ml-16' />

        </div>
        <div className='w-fit '>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>
        

    </div>
  )
}

export default LearningLanguageSection