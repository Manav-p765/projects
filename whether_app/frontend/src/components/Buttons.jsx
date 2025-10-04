import React from 'react'

function Buttons() {
  return (
    <div className='space-x-4 flex ml-auto'>
        <button type="button" className='bg-white text-black rounded-full h-8 w-25 pb-1'>Search</button>
        <button type="button" className='bg-red-600 rounded-full h-8 w-25 pb-1'>get info</button>  
    </div>
  )
}

export default Buttons