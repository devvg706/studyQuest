import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (
    <div>
        <Link to={linkto}>
            <div className={`text-center text-[15px] px-6 py-3 rounded-md font-bold
                ${active ? "bg-yellow-50 hover:bg-yellow-100 text-black font-semibold py-2 px-4 rounded shadow-md shadow-yellow-500/20 transition":"bg-richblack-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow-md shadow-blue-500/20 transition"}
                hover:scale-95 transition-all duration-200 shadow-md `}>

                {children}

            </div>
        </Link>
    </div>
  )
}

export default Button