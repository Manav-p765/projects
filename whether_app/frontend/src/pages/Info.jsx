import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Boxes from '../components/Boxes';
import Rain from '../assets/images/rain.jpeg'

function Info() {
        const { weather } = useContext(DataContext);
        console.log(weather);
  return (
    <div
      className='text-white text-center min-h-screen min-w-full bg-no-repeat bg-center bg-fixed'
      style={{
        backgroundImage: `url(${Rain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
         {weather && weather.currentConditions && (
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 pt-30"  >
          <Boxes name={"Time"} value={weather.currentConditions.datetime} />
          <Boxes name={"Address"} value={weather.resolvedAddress} />
          <Boxes name={"Maximum temperature"} value={`${weather.currentConditions.temp}°C`} />
          <Boxes name={"Feels like Temperature"} value={`${weather.currentConditions.feelslike}°C`} />
          <Boxes name={"humidity"} value={`${weather.currentConditions.humidity}%`} />
          <Boxes name={"Windspeed"} value={`${weather.currentConditions.windspeed} km/h`} />
          <Boxes name={"pressure"} value={`${weather.currentConditions.pressure} hPa`} />
          <Boxes name={"sunrise time"} value={weather.currentConditions.sunrise} />
          <Boxes name={"senset time"} value={weather.currentConditions.sunset} />
        </div>
        )}
    </div>
  )
}

export default Info