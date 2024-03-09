
# Weather Explorer

Weather Explorer is a web application that provides real-time and forecasted weather data using the OpenWeatherApp API. It leverages geolocation through RapidAPI to display current weather information for your location and allows users to search for weather details of specific cities.



## Run Locally

1. **Clone the project:**

```bash
  git clone https://github.com/Akash-A151000/Weather_Web.git
```

2. **Navigate to the project directory:**

```bash
  cd Weather_Web
```

3. **Install dependencies:**

```bash
  npm install
```

4. **Add Environment Variables:**
 - Create a `.env` file in the root directory.
 - Specify the following environment variables:
     ```dotenv
     VITE_OPENWEATHER_API_KEY=your_openweatherapp_api_key
     VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5
     VITE_X_RAPIDAPI_KEY=your_rapidapi_key
     VITE_X_RAPIDAPI_HOST=your_rapidapi_host
     ```
 Replace `your_openweatherapp_api_key`, `your_rapidapi_key`, and `your_rapidapi_host` with your actual API keys and host.


5. **Start the server:**

```bash
  npm run dev
```


## Environment Variables

To run this project, you need to add the following environment variables to your `.env` file:

- `VITE_OPENWEATHER_API_KEY`: [Generate API key](https://openweathermap.org/)
- `VITE_OPENWEATHER_API_URL`: `https://api.openweathermap.org/data/2.5`
- `VITE_X_RAPIDAPI_KEY` and `VITE_X_RAPIDAPI_HOST`: [Generate API key and host](https://rapidapi.com/damngoodapis/api/geolocation)






## Dependencies

Ensure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)


## Troubleshooting

If you encounter issues, consider the following:
- Double-check your OpenWeatherApp API key and RapidAPI key/host.
- Ensure a stable internet connection.
- Check for console errors in the browser's developer tools.
## Contact

**Akash A**
- Email: akashava50@gmail.com
## 🚀 About Me
 I am a skilled MERN stack developer with a proven track record of creating responsive and user-friendly websites. My expertise lies in MongoDB, Express.js, React, and Node.js.

