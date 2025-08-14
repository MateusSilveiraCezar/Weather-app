export default function WeatherCard({ data }) {

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperatura: {data.main.temp}°C</p>
      <p>Sensação térmica: {data.main.feels_like}°C</p>
      <p>Vento: {data.wind.speed} m/s</p>
    </div>
  );
}
