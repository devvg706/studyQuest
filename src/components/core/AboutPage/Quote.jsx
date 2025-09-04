import React from 'react'

const Quote = () => {
  return (
    <div className="text-center text-white mx-auto px-4 md:px-10 py-10 md:py-20 max-w-5xl">
      <p className="text-xl md:text-4xl font-semibold leading-relaxed">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform{" "}
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text">
          Combines Technology
        </span>
        ,{" "}
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
          Expertise
        </span>
        , and community to create an{" "}
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text">
          Unparalleled Educational Experience
        </span>
        .
      </p>
    </div>
  )
}

export default Quote
