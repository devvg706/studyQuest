import React from 'react';
import bgimage from '../../../assests/Images/bgimage.jpg';
import { FcGoogle } from 'react-icons/fc';
import Loginform from './Loginform';
import Signupform from './Signupform';
import frameimg from '../../../assests/Images/frame.3a238e5f26d676376e1d.png'
const Templatels = ({ tittle, desc1, desc2, image, formtype, setisloggedin }) => {
  return (
    <div className="flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 text-white">
      {/* Left Section */}
      <div className="w-1/2 max-w-[450px]">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text">
          {tittle}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === 'login' ? (
          <Loginform setisloggedin={setisloggedin} />
        ) : (
          <Signupform setisloggedin={setisloggedin} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <div className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 cursor-pointer">
          <button className='flex items-center gap-2 w-full justify-center 
               border border-richblack-700 text-richblack-100 
               px-4 py-2 rounded-md font-medium 
               transition-all duration-300 ease-in-out 
               hover:scale-[1.02] hover:border-blue-300 
               hover:shadow-[0_0_10px_#3b82f6] 
               hover:bg-richblack-800 hover:text-white'>
            <FcGoogle size={24} />
            <p>Sign Up With Google</p>
          </button>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 flex justify-center items-center">
        <div className="relative border-[2px] border-dashed border-richblack-700 p-2">
            
          <img
            src={image}
            alt="main"
            width={600}
            height={500}
            loading='lazy'
            className="w-full h-auto object-contain rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default Templatels;
