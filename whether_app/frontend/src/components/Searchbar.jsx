import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { DataContext } from '../context/DataContext';
import { useNavigate } from "react-router-dom";


function Searchbar() {
    const { setCity } = useContext(DataContext);
    const [input, setInput] = useState("");
      const navigate = useNavigate();
    
    

    const handleSearch = (e)=>{
      e.preventDefault(); 
      setCity(input) 
      navigate('/Info');
      setInput('');
      
    }
   
    
  return (
    <div className='flex mx-auto items-center h-18 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 w-3/6 md:w-2/6 sm:w-4/6 rounded-full -mt-9 px-2 shadow-lg border-2 border-rose-300'>
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter your City || search for weather"
          className="flex-1 text-rose-200 h-12 px-4 rounded-full bg-transparent focus:outline-none text-lg placeholder-gray-400"
        />
        <button
          type="submit"
          className="ml-2 bg-rose-300 p-3 rounded-full hover:bg-rose-400 transition-colors duration-200 border border-rose-200 shadow"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#222" }} />
        </button>
      </form>
    </div>
  )
}

export default Searchbar