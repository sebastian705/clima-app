import { useState } from "react"
import styles from './FormWeather.module.css'
const FormWeather = ({loadInfo}) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    loadInfo(city);
    setCity("");
  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className={styles.input}/>
    </form>
  )
}

export default FormWeather