import { activeColor } from "../services/colorService.js";

export const hoursBtn = (data) => {
  const hoursBtn = document.getElementById("hours_btn");
  hoursBtn.addEventListener("click", () => {
    activeColor("hours_btn");
    HoursHTML(data, 0);
  });
};

function HoursHTML(data, i) {
  //   console.log(data);
  const forecastTime = data.forecast.forecastday[i].hour;
  const dayInfo = document.getElementById("day_info");
  dayInfo.className = "hours_div";
  const showHours = `
   <div class="hours"><p>00:00</p><img src="${forecastTime[0].condition.icon}"/><p>${forecastTime[0].temp_c}&#176</p></div>
   <div class="hours"><p>01:00</p><img src="${forecastTime[1].condition.icon}"/><p>${forecastTime[1].temp_c}&#176</p></div>
   <div class="hours"><p>02:00</p><img src="${forecastTime[2].condition.icon}"/><p>${forecastTime[2].temp_c}&#176</p></div>
   <div class="hours"><p>03:00</p><img src="${forecastTime[3].condition.icon}"/><p>${forecastTime[3].temp_c}&#176</p></div>
   <div class="hours"><p>04:00</p><img src="${forecastTime[4].condition.icon}"/><p>${forecastTime[4].temp_c}&#176</p></div>
    <div class="hours"><p>05:00</p><img src="${forecastTime[5].condition.icon}"/><p>${forecastTime[5].temp_c}&#176</p></div>
   <div class="hours"><p>06:00</p><img src="${forecastTime[6].condition.icon}"/><p>${forecastTime[6].temp_c}&#176</p></div>
   <div class="hours"><p>07:00</p><img src="${forecastTime[7].condition.icon}"/><p>${forecastTime[7].temp_c}&#176</p></div>
   <div class="hours"><p>08:00</p><img src="${forecastTime[8].condition.icon}"/><p>${forecastTime[8].temp_c}&#176</p></div>
    <div class="hours"><p>09:00</p><img src="${forecastTime[9].condition.icon}"/><p>${forecastTime[9].temp_c}&#176</p></div>
   <div class="hours"><p>10:00</p><img src="${forecastTime[10].condition.icon}"/><p>${forecastTime[10].temp_c}&#176</p></div>
      <div class="hours"><p>11:00</p><img src="${forecastTime[11].condition.icon}"/><p>${forecastTime[11].temp_c}&#176</p></div>
   <div class="hours"><p>12:00</p><img src="${forecastTime[12].condition.icon}"/><p>${forecastTime[12].temp_c}&#176</p></div>
    <div class="hours"><p>13:00</p><img src="${forecastTime[13].condition.icon}"/><p>${forecastTime[13].temp_c}&#176</p></div>
   <div class="hours"><p>14:00</p><img src="${forecastTime[14].condition.icon}"/><p>${forecastTime[14].temp_c}&#176</p></div>
   <div class="hours"><p>15:00</p><img src="${forecastTime[15].condition.icon}"/><p>${forecastTime[15].temp_c}&#176</p></div>
   <div class="hours"><p>16:00</p><img src="${forecastTime[16].condition.icon}"/><p>${forecastTime[16].temp_c}&#176</p></div>
    <div class="hours"><p>17:00</p><img src="${forecastTime[17].condition.icon}"/><p>${forecastTime[17].temp_c}&#176</p></div>
   <div class="hours"><p>18:00</p><img src="${forecastTime[18].condition.icon}"/><p>${forecastTime[18].temp_c}&#176</p></div>
   <div class="hours"><p>19:00</p><img src="${forecastTime[19].condition.icon}"/><p>${forecastTime[19].temp_c}&#176</p></div>
   <div class="hours"><p>20:00</p><img src="${forecastTime[20].condition.icon}"/><p>${forecastTime[20].temp_c}&#176</p></div>
     <div class="hours"><p>21:00</p><img src="${forecastTime[21].condition.icon}"/><p>${forecastTime[21].temp_c}&#176</p></div>
   <div class="hours"><p>22:00</p><img src="${forecastTime[22].condition.icon}"/><p>${forecastTime[22].temp_c}&#176</p></div>
   <div class="hours"><p>23:00</p><img src="${forecastTime[23].condition.icon}"/><p>${forecastTime[23].temp_c}&#176</p></div>
  `;
  dayInfo.innerHTML = showHours;
}
