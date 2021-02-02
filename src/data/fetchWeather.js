import { createWeather } from "../js/createHTML.js";
import getDate from "../services/dateService.js";

let newDate = getDate.dateToday();
/*   current and Forecast Weather   */
export async function fetchWeather(here = "Tel Aviv", time = newDate) {
  const urlWeather = "http://api.weatherapi.com/v1/",
    what = "forecast.json",
    where = "&q=" + here,
    Key = "?key=75f815f1dd42417389c182022200310";
  let days = "&days=2";
  days = "&dt=" + time;
  newDate = time;

  await fetch(urlWeather + what + Key + where + days)
    .then((response) => {
      const json = response.json();
      json.then((data) => {
        console.log(data);
        createWeather(data, newDate);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
