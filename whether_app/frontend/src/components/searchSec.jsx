import React from 'react'
import Rain from '../assets/images/rain.jpeg'
import Bgimg from './Bgimg';
import Searchbar from './Searchbar';

const SearchSection = () => {
  return (
    <div className='h-80 mx-10 my-5 '>
        <Bgimg img={Rain}/>
        <Searchbar/>
    </div>
  )
} 
export default SearchSection;