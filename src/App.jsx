import axios from 'axios';
import { useState, useEffect } from 'react'
import Weather from './components/Weather';
import Map from './components/Map';
import FormWeather from './components/FormWeather';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadInfo = (city = "London") => {
    axios.get(`${import.meta.env.VITE_API_URL}&key=${import.meta.env.VITE_API_KEY}&q=${city}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      });
  }
  useEffect(() => {
    loadInfo()
  }, []);
  if (loading) return <div>Cargando...</div>
  return (
    <>
      <main className='container-weather'>
        <FormWeather loadInfo={loadInfo} />
        <Weather data={data} />
        <Map data={data} />
      </main>
    </>
  )
}

export default App