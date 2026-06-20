import Navbar from './navbar'
import '../styles/searchcity.css'
import { useState } from 'react';

function Searchcity() {
  const [city,setCity]=useState(null)
  return (
 <>
    <Navbar/>
    <main className="weather-body">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          className="search-input"
        />
        <button className="search-btn" >Search</button>
      </div>

      <div className="city-info">
        <h1>London, United Kingdom</h1>
        <p>Monday, 20 May 2024 • 14:30 PM</p>
      </div>

      <div className="main-card">
        <div className="weather-left">
          <div className="weather-icon">⛅</div>

          <div>
            <h2>22°C</h2>
            <p>Partly Cloudy</p>
          </div>
        </div>

        <div className="divider"></div>

        <div>
          <span>FEELS LIKE</span>
          <h3>24°C</h3>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Humidity</h4>
          <p>65%</p>
        </div>

        <div className="stat-card">
          <h4>Wind</h4>
          <p>12 km/h</p>
        </div>

        <div className="stat-card">
          <h4>Visibility</h4>
          <p>10 km</p>
        </div>

        <div className="stat-card">
          <h4>UV Index</h4>
          <p>Low</p>
        </div>

      </div>

      <div className="forecast-card">

        <div className="forecast-header">
          <h2>5-Day Forecast</h2>
        </div>

        <div className="forecast-row">
          <span>Tomorrow</span>
          <span>☁ Cloudy</span>
          <span>20° / 15°</span>
        </div>

        <div className="forecast-row">
          <span>Wednesday</span>
          <span>☀ Sunny</span>
          <span>24° / 16°</span>
        </div>

        <div className="forecast-row">
          <span>Thursday</span>
          <span>🌧 Showers</span>
          <span>18° / 14°</span>
        </div>

        <div className="forecast-row">
          <span>Friday</span>
          <span>⛅ Partly Cloudy</span>
          <span>21° / 15°</span>
        </div>

        <div className="forecast-row">
          <span>Saturday</span>
          <span>☀ Sunny</span>
          <span>25° / 17°</span>
        </div>

      </div>

      <div className="rain-card">
        <h2>Precipitation</h2>

        <div className="rain-row">
          <span>Afternoon</span>
          <span>15%</span>
        </div>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

      </div>

    </main></>
  );
}

export default Searchcity;