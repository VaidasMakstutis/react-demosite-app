import "../css/products.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import umbrella from "../Assets/umbrella.svg";
import snowflake from "../Assets/snowflake.svg";
import sunglasses from "../Assets/sunglasses.svg";
import coffee from "../Assets/bruno-cervera-unsplash.jpg";
import books from "../Assets/vandan-patel-unsplash.jpg";

const Products = () => {
  // Meteo API start
  // I used CORS Anywhere. Server is working on 127.0.0.1:3003

  const clear = ["clear", "isolated-clouds", "scattered-clouds", "na"];
  const overcast = ["overcast", "light-rain", "moderate-rain", "heavy-rain", "fog"];
  const snow = ["sleet", "light-snow", "moderate-snow", "heavy-snow"];

  const [weather, setWeather] = useState({
    conditionCode: ""
  });

  useEffect(() => {
    try {
      axios.get(`http://127.0.0.1:3003/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term`).then(res => {
        console.log(res);
        setWeather(() => ({
          conditionCode: res.data.forecastTimestamps[0].conditionCode
        }));
      });
    } catch (error) {
      console.log("error:", error.message);
      setWeather({
        conditionCode: "An unexpected error occurred..."
      });
    }
  }, []);

  // Meteo API end

  return (
    <section className="products">
      <h1>products</h1>
      <h3>offers today</h3>
      <div className="products-content">
        <div className="products-content-left">
          {snow.includes(weather.conditionCode) && <img src={snowflake} alt="snowflake" />}
          {overcast.includes(weather.conditionCode) && <img src={umbrella} alt="umbrella" />}
          {clear.includes(weather.conditionCode) && <img src={sunglasses} alt="sunglases" />}
        </div>
        <div className="products-content-right">
          <div className="top-banner">
            <img src={coffee} alt="coffee" />
            <h3>the best coffee</h3>
          </div>
          <div className="bottom-banner">
            <img src={books} alt="books" />
            <h3>top 100 books</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;