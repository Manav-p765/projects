import React from 'react'
import { useNavigate } from "react-router-dom";

function Buttons() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  const handleClickinfo = () => {
    navigate('/Info');
  }

  return (
    <div className='space-x-4 flex ml-auto'>
        <button
          type="button"
          onClick={handleClick}
          className='bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-rose-200 rounded-full h-8 w-28 px-4 font-semibold shadow hover:from-gray-800 hover:to-gray-700 hover:text-rose-300 transition-colors duration-200 border border-rose-300'
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClickinfo}
          className='bg-rose-300 text-gray-900 rounded-full h-8 w-28 px-4 font-semibold shadow hover:bg-rose-400 hover:text-gray-800 transition-colors duration-200 border border-rose-200'
        >
          Get Info
        </button>
    </div>
  )
}

export default Buttons