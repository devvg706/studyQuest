import React from 'react'
import about1 from '../assests/Images/aboutus1.86606deea209badf5925.webp'
import about2 from '../assests/Images/aboutus2.0a1cd797ce3a69e81830.webp'
import about3 from '../assests/Images/aboutus3.f5cfba861877ea03735d.webp'
import Qoute from '../components/core/AboutPage/Quote'
import foundingimg from '../assests/Images/FoundingStory.84f2828a5f4a9c08a802.png'
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
const About = () => {
  return (
    <div>
        {/* section1 */}
      <section className="bg-richblack-700 relative ">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center text-center text-white gap-10">
    
    {/* Header */}
    <header className="py-20 text-4xl font-semibold lg:w-[70%]">
      Driving Innovation in Online Education for a{" "}
      <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text">
        Better Tomorrow
      </span>
      <p className="mx-auto mt-6 text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
        StudyQuest is at the forefront of driving innovation in online
        education. We're passionate about creating a brighter future by
        offering cutting-edge courses, leveraging emerging technologies,
        and nurturing a vibrant learning community.
      </p>
    </header>

    {/* Spacer */}
    <div className="sm:h-[70px] lg:h-[150px]"></div>

    {/* Image Strip */}
    <div className="absolute bottom-0 left-1/2 w-full  translate-y-[30%] + -translate-x-[47%] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      <img
        src={about1}
        alt="about1"
        className="rounded-lg shadow-lg shadow-blue-500/20 transition-transform duration-500 hover:scale-105"
      />
      <img
        src={about2}
        alt="about2"
        className="rounded-lg shadow-lg shadow-blue-500/20 transition-transform duration-500 hover:scale-105"
      />
      <img
        src={about3}
        alt="about3"
        className="rounded-lg shadow-lg shadow-blue-500/20 transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</section>

        {/* section2 */}
       <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Qoute />
        </div>
      </section>

        {/* section3 */}
       <section className="bg-[#0a0f1a] text-white py-16">
  <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-16">
    
    {/* Founding Story */}
    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
      {/* Left Text Block */}
      <div className="my-24 flex lg:w-[50%] flex-col gap-6">
        <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] transition-all duration-300">
          Our Founding Story
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
          Our e-learning platform was born out of a shared vision and
          passion for transforming education. It all began with a group of
          educators, technologists, and lifelong learners who recognized
          the need for accessible, flexible, and high-quality learning
          opportunities in a rapidly evolving digital world.
        </p>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
          As experienced educators ourselves, we witnessed firsthand the
          limitations and challenges of traditional education systems. We
          believed that education should not be confined to the walls of a
          classroom or restricted by geographical boundaries. We
          envisioned a platform that could bridge these gaps and empower
          individuals from all walks of life to unlock their full
          potential.
        </p>
      </div>

      {/* Right Image Block */}
      <div className="flex items-center justify-center">
        <img
          src={foundingimg}
          alt="Founding Story"
          className="rounded-xl shadow-[0_0_25px_#FC6767] hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>

    {/* Vision and Mission */}
    <div className="flex flex-col items-center gap-12 lg:flex-row justify-between">
      
      {/* Vision */}
      <div className="my-24 flex lg:w-[40%] flex-col gap-6">
        <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] transition-all duration-300">
          Our Vision
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
          With this vision in mind, we set out on a journey to create an
          e-learning platform that would revolutionize the way people
          learn. Our team of dedicated experts worked tirelessly to
          develop a robust and intuitive platform that combines
          cutting-edge technology with engaging content, fostering a
          dynamic and interactive learning experience.
        </p>
      </div>

      {/* Mission */}
      <div className="my-24 flex lg:w-[40%] flex-col gap-6">
        <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] transition-all duration-300">
          Our Mission
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
          Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
        </p>
      </div>
    </div>
  </div>
       </section>



        {/* section4 */}
        <StatsComponent></StatsComponent>

        {/* section5 */}
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
            <LearningGrid></LearningGrid>
        </section>

    </div>
  )
}

export default About