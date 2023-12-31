import axios from 'axios'
import React, {useState} from 'react'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState ('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

const searchLocation = (event) => {
  if (event.key === 'Enter'){
    axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <h1>Weather Today🌤️</h1>
  <div className="container">
    <div className="top">
    <div className="location">
      <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      <p></p>
      </div>
    </div>

{data.name !== undefined && 
      <div className="bottom">
      <div className="feels">
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
        <p className='bold'>°F</p>
        <p>Very Cold</p>
      </div>
      <div className="humidity">
        {data.main ? <p className='bold'>{data.main.humidity.toFixed()} %</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
      {data.main ? <p className='bold'>{data.main.speed} MPH</p> : null}
        <p>Wind Speed</p>
      </div>
        </div>
}
<h1>☁️ ☀️ 🌦️</h1>

  </div>
    </div>
  );
}

export default App;
