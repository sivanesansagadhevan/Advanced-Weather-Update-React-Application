import { useState } from "react";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const apiKey = process.env.REACT_API_KEY;
  const apiUrl = process.env.REACT_API_URL;

  // Fetching weather details from API
  async function checkWeather() {
    const responce = await fetch(apiUrl + `&q=${search}` + `&appid=${apiKey}`);
    var details = await responce.json();
    setData(details);
  }
  checkWeather();

  return (
    <div className="container">
      <div className="box">
        <input
          className="search-bar"
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            setSearch(city);
          }}
        >
          Search
        </button>

        <div className="weather-board">
          <img src="images/sun.png" alt="hello" className="cloud-images" />
          <h2>
            {data.main.temp}C {data.name}
          </h2>
        </div>
        <div className="details">
          <div className="col">
            <img src="images/humidity.png" className="cloud-images-default" />
            <div>
              <p className="h-value">{data.main.humidity}</p>
              <p className="p">Normal</p>
            </div>
          </div>
          <div className="col">
            <img src="images/wind.png" className="cloud-images-default" />
            <div>
              <p className="wind-speed">{data.wind.speed}%</p>
              <p className="p">Normal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
