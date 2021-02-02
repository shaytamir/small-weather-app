const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
  months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

const getTime = () => {
  const now = new Date();
  let hr = now.getHours(),
    min = now.getMinutes();
  hr < 10 ? (hr = "0" + hr) : hr;
  min < 10 ? (min = "0" + min) : min;
  return `<div> ${hr}:${min}</div>`;
};
const makeDate = (now) => {
  let date = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear();
  date < 10 ? (date = "0" + date) : date;
  month < 10 ? (month = "0" + month) : month;
  return `${year}-${month}-${date}`;
};

const dateToday = () => {
  const now = new Date();

  const today = makeDate(now);
  return today;
};

function dateTomorrow() {
  let maximomDate = new Date();
  maximomDate.setDate(maximomDate.getDate() + 1);
  return makeDate(maximomDate);
}
function maxDate() {
  let maximomDate = new Date();
  maximomDate.setDate(maximomDate.getDate() + 10);
  return makeDate(maximomDate);
}
function minDate() {
  let minimomDate = new Date();
  minimomDate.setDate(minimomDate.getDate() - 1);
  return makeDate(minimomDate);
}

console.log(maxDate());
const getDate = {
  getTime,
  dateToday,
  dateTomorrow,
  maxDate,
  minDate,
};
export default getDate;
