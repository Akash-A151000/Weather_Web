import axios from 'axios';
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue) => {
    try {
      const res = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=IN&namePrefix=${inputValue}`,
        {
          headers: {
            'X-RapidAPI-Key': `${import.meta.env.VITE_X_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': `${import.meta.env.VITE_X_RAPIDAPI_HOST}`,
          },
        }
      );

      return {
        options: res.data.data.map((city) => {
          return {
            lat: `${city.latitude}`,
            lon: `${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div>
      <AsyncPaginate
        placeholder='Search for city'
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
