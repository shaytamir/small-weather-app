import { fetchWeather } from "../data/fetchWeather.js";

export const cityBtnClick = () => {
  document.getElementById("city_btn").addEventListener("click", () => {
    const newCity = document.querySelector("#chooseCity>input").value;
    console.log(newCity);
    fetchWeather(newCity);
  });
};
