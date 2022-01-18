import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCity } from '../../util/apis/city';
import { fetchWeather } from '../../util/apis/weather';

// import { FaCloudMoonRain, FaCloudMoon, FaCloudRain, FaCloudShowersHe, FaCloudSunRain, FaCloudSun, FaCloud, FaSun, FaMoon, FaSnowflake } from 'react-icons/fa';
import { FaSun, FaCloud } from 'react-icons/fa';

function WeatherDisplay({location}) {
  const [currentWeather, setCurrentWeather] = useState();
  const [city, setCity] = useState();
  
  useEffect(() => {
    fetchCity(location)
      .then(res => {
        setCity(res)

        fetchWeather(res[0].Key)
          .then(res => {
            setCurrentWeather(res);
          })
      });

    // eslint-disable-next-line
  }, []);

  if (!city || !currentWeather) return null;

  let weatherIcon;

  switch (currentWeather[0].WeatherText) {
    case "Mostly sunny":
      weatherIcon = <FaSun />
      break;
    case "Mostly cloudy":
      weatherIcon = <FaCloud />
      break;
    default:
      weatherIcon = null;
      break;
  }

  return (
    <div>
      <h1>Location: {city[0].EnglishName}</h1>
      <h1>Current Temperature: {currentWeather[0].Temperature.Imperial.Value} {currentWeather[0].Temperature.Imperial.Unit}</h1>
      <h1>Weather Description: {currentWeather[0].WeatherText}</h1>
      {weatherIcon}
    </div>
  );
}

WeatherDisplay.propTypes = {
  location: PropTypes.string
};

export default WeatherDisplay;