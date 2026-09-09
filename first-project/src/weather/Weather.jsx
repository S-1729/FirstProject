import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const api_key = "7694e88dfefc9ae70bd7a2b5f705d2af";

  const [city, setCity] = useState("Delhi");
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const [weatherObj, setWeatherObj] = useState({
    weather: [{ description: "" }],
    main: { temp: 0 },
    name: "",
  });
  const [today] = useState(new Date());

  function loadWeather() {
    axios.get(api_url).then((response) => {
      setWeatherObj(response.data);
    });
  }

  useEffect(() => {
    loadWeather();
  });

  return (
    <div className="container-fluid p-4">
      <div className="card">
        <div className="card-header">
          <div className="fw-bold fs-3">{weatherObj.name}</div>
          <div>{moment(today).format("DD dddd MMMM yyyy")}</div>
        </div>
        <div className="card-body">
          <div className="fs-1 fw-bold">
            {weatherObj.main.temp.toFixed(0)}&deg;C
          </div>
        </div>
        <div className="card-footer">
          <div className="fs-4 fw-bold">
            {weatherObj.weather[0].description.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
