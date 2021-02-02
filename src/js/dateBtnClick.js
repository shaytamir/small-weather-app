import { fetchWeather } from "../data/fetchWeather.js";

export const dateBtn = (data) => {
  document.getElementById("date_input").addEventListener("change", () => {
    const dateInput = document.getElementById("date_input"),
      dateValue = dateInput.value,
      here = data.location.name;

    fetchWeather(here, dateValue);
    document.getElementById("today_btn").innerHTML = dateValue;
  });
};
