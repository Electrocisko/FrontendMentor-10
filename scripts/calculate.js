
let date1 = new Date(1969,11,4);
let date2 = new Date(2023,11,2);

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
} else if (diffMonth < 0) { //Todavia non cumplio años
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



