const form = document.querySelector('#formInputs');
const btnSubmit = document.querySelector('.btn__arrow');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let day = data.get('day');
    let month = data.get('month');
    let year = data.get('year');

    calculateAge(day,month,year)
  
})

function calculateAge (day,month,year) {
const today = new Date();
const birth = new Date(year,month,day)
const todayMili = today.getTime();
const birthMili = birth.getTime();
let diference = todayMili-birthMili

console.log(diference);

let inDays = diference/1000/60/60/24
let years = Math.floor(inDays/365);
let months =  Math.floor((inDays % 365)/30)
let days =    Math.ceil((diference - (31536000000* years) - (2629800000 * months))/86400000)

console.log({
    years,
    months,
    days
    
});

}