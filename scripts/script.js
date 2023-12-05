const form = document.querySelector("#formInputs");
const btnSubmit = document.querySelector(".btn__arrow");
const inputLabel = document.querySelectorAll(".input-label");
const inputWarning = document.querySelectorAll(".input-warning");
const inputYearWarning = document.querySelector("#input-year-warning");
const inputMonthWarning = document.querySelector("#input-month-warning");
const inputDayWarning = document.querySelector("#input-day-warning");
const inputDate = document.querySelectorAll(".input-date");

const date2 = new Date(); // DATE2 IS TODAY
console.log(date2);
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let day = data.get("day");
  let month = data.get("month");
  let year = data.get("year");
  if (!day || !month || !year) {
    addWarnings();
    addWarningsText();
  }

if (day || month || year) removeWarnings();

if(year > date2.getFullYear() || year < 1 ) {
  addWarnings()
 inputYearWarning.innerHTML="Must be in the past"
}
if(month > date2.getMonth() || month < 1 ) {
  addWarnings()
 inputMonthWarning.innerHTML="Must be in valid month"
}
//check the days in the month entered
let daysInMonth = 31;
if (month == 4 || month == 6 || month == 9 || month == 11) {
  daysInMonth = 30;
} else if (month == 2 ) {
  daysInMonth = 29;
}
 if ( day > daysInMonth || day < 1) {
  addWarnings();
  inputDayWarning.innerHTML="Must be a valid day"
 }
  const date1 = new Date(year, parseInt(month) - 1, day);
  calculateAge(date1);
});



function addWarnings () {
inputLabel.forEach(input => {
  input.classList.add("warning");
});
 inputDate.forEach(date => {
  date.classList.add("border-warning")
 });
}

function addWarningsText () {
  inputWarning.forEach(text => {
    text.innerHTML='This field is required'
  });
}

function removeWarnings () {
  inputLabel.forEach(input => {
    input.classList.remove("warning")
  });
  inputWarning.forEach(text => {
    text.innerHTML=''
  });
  inputDate.forEach(date => {
    date.classList.remove("border-warning")
   });
  }


function calculateAge(date1) {

  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const day1 = date1.getDate();
  const day2 = date2.getDate();

  let daysOfMonthPast = 31;
  let monthPast = month2 - 1;
  if (monthPast < 0) monthPast = 11;
  if (monthPast == 3 || monthPast == 5 || monthPast == 8 || monthPast == 10)
    daysOfMonthPast = 30;
  if (monthPast == 1) {
    daysOfMonthPast = 28;
    //  Leap year missing
  }

  let diffMonth = month2 - month1;

  if (diffMonth > 0) {
    //after birthday
    const years = year2 - year1;
    let months = month2 - month1;
    let days = 0;
    if (day1 > day2) {
      months = months - 1;
      days = daysOfMonthPast - day1 + day2;
    } else if (day1 < day2) {
      days = day2 - day1;
    }
    console.log({
      years,
      months,
      days,
    });
  } else if (diffMonth < 0) {
    //before birthday
    let years = year2 - year1 - 1;
    let months = 12 - month1 + month2;
    let days = 0;
    if (day1 > day2) {
      days = day1 - day2;
    } else if (day1 < day2) {
      months = months - 1;
      days = daysOfMonthPast - day2 + day1;
    }
    console.log({
      years,
      months,
      days,
    });
  } else {
    // birthday is this month
    const diffDay = day2 - day1;
    if (monthPast < 0) monthPast = 11;
    if (monthPast == 3 || monthPast == 5 || monthPast == 8 || monthPast == 10)
      daysOfMonthPast = 30;
    if (monthPast == 1) {
      daysOfMonthPast = 28;
      //  Leap year missing
    }
    let days = 0;
    if (diffDay < 0) {
      //before birthday
      const years = year2 - year1 - 1;
      const months = 11;
      days = daysOfMonthPast - day1 + day2;
      console.log({
        years,
        months,
        days,
      });
    } else if (diffDay > 0) {
      //after birthday
      const years = year2 - year1;
      const months = 0;
      days = day2 - day1;
      console.log({
        years,
        months,
        days,
      });
    } else {
      // birthday is today
      const years = year2 - year1;
      const months = 0;
      console.log({
        years,
        months,
        days,
      });
    }
  }
}
