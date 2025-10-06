import React from 'react'

function Boxes({ name, value }) {
  return (
  <div className="relative border-2 border-gray-400 m-2 p-4 rounded-xl h-36 w-56 bg-gray-600/70 hover:bg-gray-900/80 transition-colors duration-300 shadow-xl flex flex-col justify-start items-start cursor-pointer overflow-hidden backdrop-blur-xs">
      <div className="absolute left-0 top-0 h-full w-2 bg-rose-300 rounded-l-xl" />
      <h1 className="text-xs text-gray-300 font-bold mb-2 ml-3 mt-1 tracking-wide uppercase drop-shadow">{name}</h1>
      <p className="text-3xl text-rose-200 font-extrabold ml-3 drop-shadow-lg leading-tight">{value}</p>
    </div>
  );
}

export default Boxes