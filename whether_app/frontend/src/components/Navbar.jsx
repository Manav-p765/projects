import React from 'react'
import Optains from './Optains.jsx'
import Buttons from './Buttons.jsx';
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className='h-24 w-full text-white bg-gray-600 flex p-10 items-center'>
        <Link to='/' className='text-3xl font-bold mr-10'>Whetherwise</Link>
       <Optains/>
       <Buttons/>
    </div>
  )
}

export default navbar;