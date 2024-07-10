import styles from './Weather.module.css';
const Weather = ({ data }) => {
  return (
    <div className={styles.containerWeather}>
      <div className={styles.weatherCity}>
        <h3 className={styles.name}>{data.location.name}</h3>
        <p className={styles.country}>{data.location.country}</p>
      </div>
      <div className={styles.weather}>
        <figure className={styles.weatherIcon}>
          <img src={data.current.condition.icon} alt="weather" />
        </figure>
        <div className={styles.weatherInfo}>
          <p className={styles.text}>{data.current.condition.text}</p>
          <p className={styles.temp}>{data.current.temp_c}°</p>
        </div>
      </div>
    </div>
  )
}

export default Weather