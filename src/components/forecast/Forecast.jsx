import React, { useEffect } from 'react';
import {
  getDateFormat,
  getTimeFormat,
  getDayFormat,
} from '../../utils/dateUtils';

const Forecast = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-5 p-4 gap-8 '>
        <div className=' flex flex-col items-center'>
          <h3 className='text-white text-lg font-bold'>
            {getDayFormat(data.dt)}
          </h3>
          <p className='text-white'>{getDateFormat(data.dt)}</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-white text-lg font-bold'>
            {getTimeFormat(data.dt)}
          </h1>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white text-lg font-bold'>
            {Math.round(data.main.temp_min)}°C
          </h3>
          <p className='text-white'>Low</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white text-lg font-bold'>
            {Math.round(data.main.temp_max)}°C
          </h3>
          <p className='text-white'>High</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white text-lg font-bold'>
            {data.wind.speed} m/s
          </h3>
          <p className='text-white'>Wind</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Forecast;
