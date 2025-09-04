import React, { useState } from 'react';
import { HomePageExplore } from '../../../data/homepage-explore';
import CourseCard from './CourseCard';

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths"
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCardIndex, setCurrentCardIndex] = useState(0); 

    const setMyCards = (index) => {
        const value = tabsName[index];
        setCurrentTab(value);

        const result = HomePageExplore.find((course) => course.tag === value);

        if (result) {
            setCourses(result.courses);
            setCurrentCardIndex(0); 
        } else {
            setCourses([]); 
        }
    };
    return (
        <div>
            <div className='text-4xl font-semibold text-center text-white'>
                Unlock the{" "}
                <span className='px-2 py-2 text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text'>
                    Power of code
                </span>
            </div>
            <p className='flex justify-center mt-5 text-richblack-400 mb-8'>
                Learn to build anything you can Imagine
            </p>

            <div className='w-fit mr-auto lg:ml-[500px] flex flex-row gap-11 rounded-full bg-richblack-800 border border-richblack-100 py-2 px-2 shadow-md max-w-[90vw] overflow-x-auto sm:gap-3 md:gap-4'>
                {tabsName.map((data, index) => (
                    <div
                        onClick={() => setMyCards(index)}
                        key={index}
                        className={`text-[16px] sm:text-[15px] md:text-[16px] whitespace-nowrap sm:px-5 sm:py-2.5 rounded-full font-medium transition-all duration-200 cursor-pointer
                        ${currentTab === data
                                ? "bg-richblack-900 text-richblack-5"
                                : "text-richblack-200 hover:bg-richblack-900 hover:text-richblack-5"}`}
                        
                    >
                        {data}
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {courses.map((element, index) => (
                    <CourseCard
                        key={index}
                        index={index} 
                        cardData={element}
                        currentCardIndex={currentCardIndex} 
                        setCurrentCardIndex={setCurrentCardIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreMore;
