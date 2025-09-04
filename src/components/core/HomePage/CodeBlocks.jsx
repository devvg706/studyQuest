import React from 'react'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const CodeBlocks = ({desc1,desc2,description,scontent,position,ctabtn1,ctabtn2,codeblock,backgroundGradeint,codeColor}) => {
  return (
    <div className={`flex ${position} my-20 justify-between `}>
        {/* codeblock 1 */}
        <div className='w-[50%] flex flex-col gap-4'>
            <div>
                <p className='text-left text-2xl font-semibold mt-6'>{desc1}</p>
                <span className='mb-0 text-left text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>{scontent}</span>
                <p className=' text-left text-3xl font-semibold mt-0'>{desc2}</p>
                <div className='text-left text-2xl font-semibold mt-6 text-richblack-400'>
                    {description}
                </div>
            </div>
            <div className='flex gap-7 mt-7'>
                <CTAButton active = {ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton active = {ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.btnText}
                </CTAButton>
            </div>   
        </div>
        {/* codeblock 2 */}
        <div className='h-fit flex flex-row gap-2 text-[15px] w-full py-4 lg:w-[500px] rounded-lg shadow-[0_8px_24px_rgba(0,191,255,0.25)] hover:scale-95 transition-all duration-200 '>

            
            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>
            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor}`}>
                
                <TypeAnimation 
                sequence={[codeblock,2000,""]}
                repeat={Infinity}
                omitDeletionAnimation={true}
                style={
                    {
                        whiteSpace: "pre-line",
                        display: "block",
                    }
                }></TypeAnimation>
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks