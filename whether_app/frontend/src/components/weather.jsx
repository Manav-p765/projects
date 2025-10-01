import { useState } from "react";

export default function weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(`http://localhost:8080/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();
      console.log(res.json);
      setWeather(data);
    } catch (err) {
      console.error(err);
      setWeather({ error: "Failed to fetch weather" });
    }
  };

  return (
    <>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather} >
        Get Weather
      </button>


      {weather && weather.currentConditions && (
        <div >
          <h2>{weather.resolvedAddress}</h2>
          <p>Temperature: {weather.currentConditions.temp}°C</p>
        </div>
      )}
    </>
  );
}
