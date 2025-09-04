import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import CTAButton from '../components/core/HomePage/Button';
import banner from '../assests/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import InstructionSection from '../components/core/HomePage/InstructionSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore';
const Home = () => {
  return (
    // main level div
    <div> 
        {/* section 1 */}
        {/* part 1 main div */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between'>
            <Link to="signup">
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                    transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>
            <div className='text-center text-4xl font-semibold mt-6'>
                Empower your future with { }
                <span className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>Coding Skills</span>
            </div>
            <div className='text-center text-lg font-bold mt-4 w-[90%] mb-8 text-richblack-400'>
                With our coding courses, you can learn at your own pace, from anywhere in the world,and get access to a wealth of resources, including hands-on projects, quizes, and personalized feedback from instructors.
            </div>
            <div className='flex fleex-row gap-7 mt-4'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>
            <div className='relative my-12 w-fit mx-auto'>
                <div className="absolute -inset-6 rounded-full bg-blue-500 blur-2xl opacity-30 z-0"></div>
                <div className="absolute right-[-10px] bottom-[-10px] w-full h-full border-r-8 border-b-8 border-white rounded-xl z-10"></div>
                <video  muted loop autoPlay 
                className="relative z-20 rounded-xl shadow-xl w-[720px] max-w-full">
                    <source src={banner} type='video/mp4'/>
                </video>
            </div>
            
            <div>
                <CodeBlocks
                desc1={"Unlock your"}
                desc2={"with our online courses"}
                scontent={"Coding potential"}
                description={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"}
                position={"lg:flex-row"}
                ctabtn1={
                    {
                        btnText:"Try it Yourself",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`<!DOCTYPE html> \n <html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Hello Everyone</title>\n</head>\n<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">\n<table role="presentation" style="width: 100%; border-collapse: collapse;">`}
                codeColor={"text-yellow-25"}>

                </CodeBlocks>
            </div>
            <div>
                <CodeBlocks
                desc1={"Start"}
                desc2={""}
                scontent={"Coding in Seconds"}
                description={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                position={"lg:flex-row-reverse"}
                ctabtn1={
                    {
                        btnText:"Try it Yourself",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`#include <iostream>\nusing namespace std;\n#include <vector>\nvoid printArray(int arr[], int size)\nfor(int i = 0; i < size; i++)\n cout << "Element at index "\nint numbers[5] = {10, 20, 30, 40, 50};\nint sum = 0;\n for(int i = 0; i < 5; i++)\n sum = sum + numbers[i];\ncout << "Sum of array elements: " << sum << endl;\ncout << "Hello from C++!" << endl;`}
                codeColor={"text-yellow-25"}
                >
                </CodeBlocks>
            </div>

        </div>
        <div>
            <ExploreMore/>
        </div>

        {/* section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[333px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>
                    <div className='flex flex-row gap-7 text-white mt-[120px]'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore Full Catalog
                                <FaArrowRight/>
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify between gap-7 mr-11'>
                <div className='flex flex-row gap-10 mb-10 mt-[110px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills you need for a { }
                        <span className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>Job that is in demand</span>
                    </div>
                    <div className='flex flex-col gap-5 w-[40%] items-start'>
                        <div className='text-[16px] font-semibold text-richblack-500'>
                            StudyQuest empowers students with interactive courses, expert guidance, real-time doubt solving, and personalized learning paths
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                    </div>

                </div>
                
                <TimeLineSection>

                </TimeLineSection>

                <LearningLanguageSection>

                </LearningLanguageSection>


            </div>

            
        </div>
        
        <div className="h-16 bg-gradient-to-b from-white to-[#303b55]"></div>
        {/* section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                <InstructionSection/>
                <h2 className='text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>

                

        </div>
        {/* footer */}
        <div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Home