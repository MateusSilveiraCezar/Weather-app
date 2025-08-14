import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getCurrentWeather = async (city) => {
  const res = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      units: 'metric',
      lang: 'pt_br',
      appid: API_KEY
    }
  });
  return res.data;
};

export const getForecast = async (city) => {
  const res = await axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      units: 'metric',
      lang: 'pt_br',
      appid: API_KEY
    }
  });
  return res.data;
};
