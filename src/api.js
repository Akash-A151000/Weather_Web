const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'X-RapidAPI-Key': '63f4a37860mshdf3aebc885ecbefp17ceabjsn96e97751e858',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
