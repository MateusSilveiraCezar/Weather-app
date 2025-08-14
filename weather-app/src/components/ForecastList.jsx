import styles from '../styles/ForecastList.module.css';

export default function ForecastList({ forecast }) {
  // Filtra 1 previsão por dia (a cada 24h às 12:00)
  const daily = forecast.list.filter(item => item.dt_txt.includes('12:00:00'));

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Previsão para 5 dias</h3>
      <ul className={styles.forecastGrid}>
        {daily.map((item, idx) => (
          <li key={idx} className={styles.forecastItem}>
            <span className={styles.date}>
              {new Date(item.dt_txt).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })}
            </span>
            <span className={styles.temperature}>{item.main.temp}°C</span>
            <span className={styles.description}>{item.weather[0].description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}