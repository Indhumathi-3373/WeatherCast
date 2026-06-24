import Navbar from "./navbar";
import "../styles/searchcity.css";
import { useState } from "react";
import image from "../assets/Screenshot 2026-06-24 100745.png";

function Searchcity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const getlocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        );

        const data = await response.json();

        const currentCity =
          data.address.city || data.address.town || data.address.village;

        console.log("Current City:", currentCity);

        setCity(currentCity);

        await fetchWeather(currentCity);
      },
      (error) => {
        console.log(error.message);
      },
    );
  };
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [onclick, setclick] = useState(false);

  const fetchWeather = async (cityName) => {
    try {
      const appid = import.meta.env.VITE_WEATHER_API;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=metric`,
      );

      const data = await response.json();

      setWeather(data);
      setclick(true);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const windSpeedKmh = weather?.wind?.speed
    ? (weather.wind.speed * 3.6).toFixed(1)
    : null;

  const humidity = weather?.main?.humidity;

  const temp = weather?.main?.temp;

  const visibilityMeters = weather?.visibility;

  let visibilityLevel = "--";

  if (visibilityMeters !== undefined) {
    if (visibilityMeters < 2000) {
      visibilityLevel = "Low";
    } else if (visibilityMeters < 5000) {
      visibilityLevel = "Moderate";
    } else {
      visibilityLevel = "High";
    }
  }
  return (
    <>
      <Navbar />

      <main className="weather-body">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button
            className="search-btn"
            onClick={() => {
              if (city.trim() !== "") {
                setclick(true);
                fetchWeather();
              } else {
                alert("Please Enter a city");
              }
            }}
          >
            Search
          </button>
        </div>
        {onclick ? (
          <div>
            <div className="city-info">
              <h1>{city}</h1>
              <p>
                {day}, {date} • {time}
              </p>
            </div>

            <div className="main-card">
              <div className="weather-left">
                <div className="weather-icon">⛅</div>

                <div>
                  <h2>{temp ?? "--"}°C</h2>
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
                <p>{humidity}%</p>
              </div>

              <div className="stat-card">
                <h4>Wind</h4>
                <p>{windSpeedKmh}</p>
              </div>

              <div className="stat-card">
                <h4>Visibility</h4>
                <p>{visibilityLevel}</p>
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
            <div>
              <button className="location-btn">Use Current Location</button>
            </div>
          </div>
        ) : (
          <div className="current-location">
            <div className="image3">
              <img src={image} alt="image" />
            </div>
            <div className="btn-holder">
              <button className="location-btn" onClick={getlocation}>
                {loading ? "Loading..." : "Use Current Location"}
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Searchcity;
