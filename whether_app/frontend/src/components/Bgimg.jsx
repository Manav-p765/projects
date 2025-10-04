import React from 'react'

function Bgimg(i) {
  return (
    <div className='bg-fix h-80 rounded-3xl bg-center' style={{ backgroundImage: `url(${i.img})` ,
    backgroundSize: 'cover', }}>
        <div className='text-white text-center flex flex-col justify-center items-center h-full  rounded-3xl pb-5'>
            <h1 className='text-4xl pb-5'>Enter your City to get Weather info</h1>
            <h4 className='text-2xl'>stay informed with accurate info</h4>
        </div>
    </div>
  )
}

export default Bgimg