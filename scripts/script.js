const form = document.querySelector("#formInputs");
const btnSubmit = document.querySelector(".btn__arrow");
const inputLabel = document.querySelectorAll(".input-label");
const inputWarning = document.querySelectorAll(".input-warning");
const inputYearWarning = document.querySelector("#input-year-warning");
const inputMonthWarning = document.querySelector("#input-month-warning");
const inputDayWarning = document.querySelector("#input-day-warning");
const inputDate = document.querySelectorAll(".input-date");
const showYears = document.querySelector("#show-years");
const showMonths = document.querySelector("#show-months");
const showDays = document.querySelector("#show-days");

const date2 = new Date(); // DATE2 IS TODAY
console.log(date2);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeWarnings(); // clean all warnings before validate
  let inputsOk=true;
  let data = new FormData(form);
  let day = data.get("day");
  let month = data.get("month");
  let year = data.get("year");
  //check the days in the month entered
  let daysInMonth = 31;
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    daysInMonth = 30;
  } else if (month == 2) {
    daysInMonth = 29;
  }
  if (!day) {
    inputsOk=false;
    inputLabel[0].classList.add("warning");
    inputDate[0].classList.add("border-warning");
    inputWarning[0].innerHTML = "This field is required";
  } else if (day > daysInMonth || day < 1) {
    inputsOk=false;
    addWarnings();
    inputDayWarning.innerHTML = "Must be a valid day";
  }
  if (!month) {
    inputsOk=false;
    inputLabel[1].classList.add("warning");
    inputDate[1].classList.add("border-warning");
    inputWarning[1].innerHTML = "This field is required";
  } else if (month > 12 || month < 1) {
    inputsOk=false;
    addWarnings();
    inputMonthWarning.innerHTML = "Must be in valid month";
  }
  if (!year) {
    inputsOk=false;
    inputLabel[2].classList.add("warning");
    inputDate[2].classList.add("border-warning");
    inputWarning[2].innerHTML = "This field is required";
  } else if (year > date2.getFullYear() || year < 1) {  
    inputsOk=false;
    addWarnings();
    inputYearWarning.innerHTML = "Must be in the past";
  }
  const date1 = new Date(year, parseInt(month) - 1, day);

  if (inputsOk) {
    let result = calculateAge(date1)
    showDays.innerHTML=result.days;
    showMonths.innerHTML=result.months;
    showYears.innerHTML=result.years;
  }
});

function addWarnings() {
  inputLabel.forEach((input) => {
    input.classList.add("warning");
  });
  inputDate.forEach((date) => {
    date.classList.add("border-warning");
  });
}

function addWarningsText() {
  inputWarning.forEach((text) => {
    text.innerHTML = "This field is required";
  });
}

function removeWarnings() {
  inputLabel.forEach((input) => {
    input.classList.remove("warning");
  });
  inputWarning.forEach((text) => {
    text.innerHTML = "";
  });
  inputDate.forEach((date) => {
    date.classList.remove("border-warning");
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
    leapYear(year1)?  daysOfMonthPast = 29 :  daysOfMonthPast = 28;
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
    return({
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
    return({
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
      leapYear(year1)?  daysOfMonthPast = 29 :  daysOfMonthPast = 28;
    }
    let days = 0;
    if (diffDay < 0) {
      //before birthday
      const years = year2 - year1 - 1;
      const months = 11;
      days = daysOfMonthPast - day1 + day2;
      return({
        years,
        months,
        days,
      });
    } else if (diffDay > 0) {
      //after birthday
      const years = year2 - year1;
      const months = 0;
      days = day2 - day1;
      return({
        years,
        months,
        days,
      });
    } else {
      // birthday is today
      const years = year2 - year1;
      const months = 0;
      return({
        years,
        months,
        days,
      });
    }
  }
}


function leapYear (y) {
  if( (y%400 == 0) ||  (y%4 == 0 && y%100 != 0)) {
    return true
  } else return false;
}



