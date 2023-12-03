const form = document.querySelector('#formInputs');
const btnSubmit = document.querySelector('.btn__arrow');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let day = data.get('day');
    let month = data.get('month');
    let year = data.get('year');
    const date1= new Date(year,parseInt(month)-1, day);
    calculateAge(date1)
})

function calculateAge (date1) {
    const date2 = new Date();
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    const day1= date1.getDate();
    const day2= date2.getDate();
    
    let diffMonth = month2 - month1;
    
    if(diffMonth > 0) { //cumplio años
        const years = year2-year1
        console.log('Edad: '+ years );
    } else if (diffMonth < 0) { //Todavia no cumplio años
        const years = (year2-year1)-1
        console.log('Edad: '+ years );
    } else { // cumple este mes
        const diffDay = day2-day1;
        if (diffDay < 0) { //Todavia no cumplio años
            const years = (year2-year1)-1
            console.log('Edad: '+ years );
        } else if (diffDay > 0) { // ya cumplio años
            const years = year2-year1
            console.log('Edad: '+ years );
        } else { // cumple hoy
            const years = year2-year1
            console.log('Cumple hoy: '+ years );
        }
    }
}
