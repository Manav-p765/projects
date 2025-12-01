import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

const CityContext = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `http://localhost:8080/weather?city=${encodeURIComponent(city)}`
      );
      const data = await res.json();
      console.log(res.json);
      setWeather(data);
      console.log(weather);
    } catch (err) {
      console.error(err);
      setWeather({ error: "Failed to fetch weather" });
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div>
      <DataContext.Provider value={{ city, setCity, weather, setWeather }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default CityContext;
