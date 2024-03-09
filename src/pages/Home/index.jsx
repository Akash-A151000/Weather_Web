import React, { useState } from 'react';
import Search from '../../components/search/Search';
import GeolocationHandler from '../../components/GeoLocationHandler';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const handleSearchChange = (searchData) => {
    setSelectedCity(searchData);
  };
  return (
    <div>
      <div className='w-5/5 md:w-4/5 h-100 app mx-2 md:mx-auto lg:mx-auto '>
        <Search onSearchChange={handleSearchChange} />
        <GeolocationHandler selectedCity={selectedCity} />
      </div>
    </div>
  );
};

export default Home;
