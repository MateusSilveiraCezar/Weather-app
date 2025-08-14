import { useState } from 'react';
import InitialSection from './components/InitialSection';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import { getCurrentWeather, getForecast } from './services/weatherAPI';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const current = await getCurrentWeather(city);
      const forecastData = await getForecast(city);
      setWeather(current);
      setForecast(forecastData);
      setError(null);
    } catch {
      setError('Cidade não encontrada.');
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <>
      <InitialSection onSearch={handleSearch} />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {weather && <WeatherCard data={weather} />}
      {forecast && <ForecastList forecast={forecast} />}
    </>
  );
}

export default App;
