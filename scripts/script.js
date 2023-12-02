const form = document.querySelector('#formInputs');
const btnSubmit = document.querySelector('.btn__arrow');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let day = data.get('day');
    let month = data.get('month');
    let year = data.get('year');

    console.log(day,month,year);
    calculateAge(day,month,year)
  
})

function calculateAge (day,month,year) {
const today = Date.now();
const birth = new Date(year,month-1,day)
let ageY = today.getFullYear() - year;
let ageM = today.getMonth() - month;
if(ageM < 0 ) {
     ageM = 0
}

console.log('dia de hoy:' + today.getDay());
console.log('dia nacimientos' + day);

let ageD = today.getDay() - day;

const todayMili = today.getTime();
const birthMili = birth.getTime();

console.log('Anos:', ageY);
console.log('Meses:',ageM);
console.log('Dias? ',ageD);

// let diference = todayMili-birthMili

// console.log(diference);

// let days = diference/1000/60/60/24

// console.log(days);

}