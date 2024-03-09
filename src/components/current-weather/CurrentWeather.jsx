import React, { useEffect, useState } from 'react';

const CurrentWeather = ({ data, label }) => {
  const [date, setDate] = useState('');
  useEffect(() => {
    formatDate();
  }, [data]);

  const timeCoverter = (time) => {
    const timestamp = time;
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  const formatDate = () => {
    const timestamp = data.dt;
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setDate(formattedDate);
  };

  return (
    <div>
      <div className='mx-2 lg:mx-10'>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-white text-center  font-bold text-3xl md:text-5xl mt-2'>
              {label ? `${label}` : `${data.name},${data.sys.country}`}
            </h1>
            <p className='text-white text-center text-lg md:text-xl'>{date}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex  gap-12 md:gap-0 lg:gap-12 md:mx-4 lg:mx-8 justify-center  md:border-r-2 md:border-white'>
              <div className='flex md:justify-center md:items-center'>
                <img
                  src={`assets/icons/${data.weather[0].icon}.png`}
                  className='xl:h-52 lg:h-44 md:h-36 sm:h-28'
                  alt='this is a icon'
                />
              </div>
              <div className='flex justify-center items-center flex-col p-5'>
                <h1 className='text-white  font-light text-4xl  md:text-7xl'>
                  {Math.round(data.main.temp)}°C
                </h1>
                <p className=' flex md:items-start text-xl text-white'>
                  {data.weather[0].main}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center md:items-center md:justify-center'>
              <div className='grid grid-cols-3 text-white gap-x-10 gap-y-10  md:gap-y-10'>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {Math.round(data.main.temp_max)}°C
                  </h1>
                  <p className='text-gray-200 text-sm'>High</p>
                </div>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {data.wind.speed} m/s
                  </h1>
                  <p className='text-gray-200 text-sm'>Wind</p>
                </div>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {timeCoverter(data.sys.sunrise)}
                  </h1>
                  <p className='text-gray-200 text-sm '>Sunrise</p>
                </div>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {Math.round(data.main.temp_min)}°C
                  </h1>
                  <p className='text-gray-200 text-sm'>Low</p>
                </div>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {data.main.humidity}%
                  </h1>
                  <p className='text-gray-200 text-sm'>Humidity</p>
                </div>
                <div>
                  <h1 className='text-xl  md:text-3xl'>
                    {timeCoverter(data.sys.sunset)}
                  </h1>
                  <p className='text-gray-200 text-sm'>Sunset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
