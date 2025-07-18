import React from 'react'

const Button = ({btnText, onClick}) => {

    
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={onClick}
        className="btn w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-gray-600 hover:bg-gray-800 hover:text-white text-gray-900 px-4 py-2 rounded transition-all duration-200"
      >
        {btnText}
      </button>
    </div>
  )
}

export default Button
