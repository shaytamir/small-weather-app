import { cityBtnClick } from "../js/cityBtnClick.js";
import { hoursBtn } from "../js/hoursBtnClick.js";
import { todayInfo } from "../js/todayBtn.js";
import { dateBtn } from "../js/dateBtnClick.js";
import { enterPress } from "../services/keyPress.js";

export function btnInitiator(data) {
  /* changes with api calles */
  cityBtnClick();
  dateBtn(data);
  enterPress();
  /* changes with html changes */
  todayInfo(data);
  hoursBtn(data);
}
