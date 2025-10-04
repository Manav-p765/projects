import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Info() {
        const { weather } = useContext(DataContext);
  return (
    <div className='text-white text-center mt-20'>
         {weather && weather.currentConditions && (
        <div >
          <h2>{weather.resolvedAddress}</h2>
          <p>Temperature: {weather.currentConditions.temp}°C</p>
        </div>
        )}
    </div>
  )
}

export default Info