import { activeColor } from "../services/colorService.js";

/*  todays weather by quarter  */
export const todayInfo = (data) => {
  document.getElementById("today_btn").addEventListener("click", () => {
    activeColor("today_btn");
    const dayInfo = document.getElementById("day_info");
    dayInfo.className = "quarter_div";
    dayInfo.innerHTML = quarterDayInfo(data);
  });
};

/*  create html weather by quarter tamplate  */
export const quarterDayInfo = (data, tomorrow) => {
  const forecast = data.forecast.forecastday,
    forecast10am = forecast[0].hour[10],
    forecast15pm = forecast[0].hour[15],
    forecast19pm = forecast[0].hour[19],
    forecast23pm = forecast[0].hour[23];
  return `
    <div id="morn">Morning:</br><img src="${forecast10am.condition.icon}"/></br>${forecast10am.temp_c}&#176</div>
    <div id="noon">Afternoon:</br><img src="${forecast15pm.condition.icon}"/></br>${forecast15pm.temp_c}&#176</div>
    <div id="eve">Evening:</br><img src="${forecast19pm.condition.icon}"/></br>${forecast19pm.temp_c}&#176</div>
    <div id="night">Night:</br><img src="${forecast23pm.condition.icon}"/></br>
    ${forecast23pm.temp_c}&#176</div>
    `;
};
