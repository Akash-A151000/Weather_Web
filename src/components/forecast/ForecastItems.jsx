import React from 'react';
import Forecast from './Forecast';

const ForecastItems = ({ data }) => {
  return (
    <div>
      <div className='text-white text-2xl  md:text-4xl mt-3 font-bold '>
        Next 21 Hours
      </div>
      <hr />
      {data.map((list, index) => (
        <Forecast key={index} data={list} />
      ))}
    </div>
  );
};

export default ForecastItems;
