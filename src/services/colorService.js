export const activeColor = (btn) => {
  document.getElementById("today_btn").className = "";
  document.getElementById("hours_btn").className = "";

  document.getElementById(btn).className = "active";
};
