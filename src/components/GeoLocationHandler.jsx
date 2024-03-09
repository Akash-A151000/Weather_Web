// GeolocationHandler.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentWeather from './current-weather/CurrentWeather';
import ForecastItems from './forecast/ForecastItems';
import Spinner from './utils/Spinner';

const GeolocationHandler = ({ selectedCity }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForeCastData] = useState(null);
  const [label, setLabel] = useState(null);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };

  const fetchData = async (latitude, longitude) => {
    try {
      setLoading(true);
      const todayWeather = await axios.get(
        `${import.meta.env.VITE_REACT_API_URL}/weather`,
        {
          params: {
            lat: `${latitude}`,
            lon: `${longitude}`,
            appid: `${import.meta.env.VITE_REACT_API_KEY}`,
            units: 'metric',
          },
          headers: { accept: 'application/json' },
        }
      );
      const forecast = await axios.get(
        `${import.meta.env.VITE_REACT_API_URL}/forecast`,
        {
          params: {
            lat: `${latitude}`,
            lon: `${longitude}`,
            appid: `${import.meta.env.VITE_REACT_API_KEY}`,
            units: 'metric',
          },
          headers: { accept: 'application/json' },
        }
      );

      const filteredData = forecast.data.list.splice(1, 7);

      setWeatherData(todayWeather.data);
      setForeCastData(filteredData);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const position = await getCurrentPosition();
      fetchData(position.coords.latitude, position.coords.longitude);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      setLabel(selectedCity.label);
    }
    if (selectedCity) {
      fetchData(selectedCity.lat, selectedCity.lon);
    } else {
      fetchWeatherData();
    }
  }, [selectedCity]);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && weatherData && (
        <CurrentWeather data={weatherData} label={label} />
      )}
      {!loading && forecastData && <ForecastItems data={forecastData} />}
    </div>
  );
};

export default GeolocationHandler;
