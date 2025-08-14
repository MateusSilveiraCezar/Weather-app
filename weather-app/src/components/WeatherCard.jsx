import styles from '../styles/WeatherCard.module.css';

export default function WeatherCard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>CONDIÇÕES METEOROLÓGICAS ATUAIS</span>
      </div>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h2>{data.name}</h2>
          <div className={styles.mainTemp}>{data.main.temp}°C</div>
          <p>{data.weather[0].description}</p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.infoLine}>
            <span>Sensação térmica:</span>
            <span>{data.main.feels_like}°C</span>
          </div>
          <div className={styles.infoLine}>
            <span>Vento:</span>
            <span>{data.wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}