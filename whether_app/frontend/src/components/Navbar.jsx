import React from 'react'
import Optains from './Optains.jsx'
import Buttons from './Buttons.jsx';
import { Link } from "react-router-dom";
const navbar = () => {
  return (
  <div className='h-24 w-full text-white bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex p-10 items-center shadow-lg border-b-2 border-rose-300'>
    <Link to='/' className='text-3xl font-extrabold mr-10 text-rose-200 drop-shadow'>Whetherwise</Link>
    <Optains />
    <Buttons />
  </div>
  )
}

export default navbar;