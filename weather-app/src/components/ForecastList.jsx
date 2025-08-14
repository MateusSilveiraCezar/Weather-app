export default function ForecastList({ forecast }) {
  // Filtra 1 previsão por dia (a cada 24h às 12:00)
  const daily = forecast.list.filter(item => item.dt_txt.includes('12:00:00'));

  return (
    <div>
      <h3>Previsão para 5 dias</h3>
      <ul>
        {daily.map((item, idx) => (
          <li key={idx}>
            <strong>{new Date(item.dt_txt).toLocaleDateString()}</strong> - {item.weather[0].description} - {item.main.temp}°C
          </li>
        ))}
      </ul>
    </div>
  );
}
