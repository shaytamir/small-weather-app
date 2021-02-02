import { fetchWeather } from "./fetchWeather.js";

export const location = () => {
  navigator.geolocation.getCurrentPosition((data) => {
    const here = data.coords.latitude + "," + data.coords.longitude;

    fetchWeather(here);
  });
};
