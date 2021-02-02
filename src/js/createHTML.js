import getDate from "../services/dateService.js";
import { quarterDayInfo } from "./todayBtn.js";
import { btnInitiator } from "../services/btnHandler.js";

export function createWeather(data, date) {
  console.log(date);
  document.getElementById("weather_div").innerHTML = `
  <h1>Weather of This Earth</h1>
  <div id="mainWeather">
    ${currentWeather(data, date)}
     <div id="day_info" class="quarter_div">
  ${quarterDayInfo(data)}
</div>
  </div>
  `;
  btnInitiator(data);
}

const currentWeather = (data, date) => {
  console.log(date);
  const now = getDate.dateToday() + " " + getDate.getTime();
  let day = date;
  if (date == getDate.dateToday()) {
    day = "Today";
  }
  const weatherLocation = data.location,
    weatherCurrent = data.current;
  return `
    <div id="city">${weatherLocation.name}</div>
    <div id="chooseCity"><input id="where" placeHolder="Choose Where"/></div>
    <div id="btn_div"><button id="city_btn">Choose</button></div>
    
    
    <div id="this_date"><div>${getDate.dateToday()}</div></div>
    <div id="this_time">${getDate.getTime()}</div>
    <div id="temperature"><span class="info">temp:</br>${
      weatherCurrent.temp_c
    }&#176;</span></div>
    <div id="weather_img"><img src="${weatherCurrent.condition.icon}" alt="${
    weatherCurrent.condition.text
  }"/></div>
    <div id="humidity"><span class="info">humidity:</br>${
      weatherCurrent.humidity
    }%</span></div>
    <div id="wind"><span class="info">wind:</br>${
      weatherCurrent.wind_kph
    }<span class="kph">kph</span></span></div>
    
    
    <button id="today_btn" class="active">${day}</button>
    <button id="hours_btn">By Hours</button>
  

   <div id="choose_date"><input id="date_input" type="date" value="${date}" max="${getDate.maxDate()}" min="${getDate.minDate()}"/></div>
`;
};
