const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function countdown(){
    // Obtain actual date
    const today = new Date();
    // Final Day
    const finalDay = new Date('1 Jan 2022');

    const diff = (finalDay-today)/1000; // seconds
    // if i want to obtain the days 
    // divide by 60 60 and 24
    const daysT = Math.floor(diff/(60*60*24));
    days.innerHTML=daysT;
    // to obtain hours we obtain the #ofhours
    const hoursT = Math.floor(diff/3600) % 24;
    hours.innerHTML = hoursT;
    // #minutes
    const minT = Math.floor(diff/60) % 60;
    minutes.innerHTML = minT;
    // #seconds
    const secT = Math.floor(diff)%60;
    seconds.innerHTML = secT;
}
countdown();

setInterval(countdown,1000);
