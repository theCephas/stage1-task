// Getting the current date of the week

const currentDate = new Date();

const dayOfWeek = currentDate.getUTCDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[dayOfWeek];

// Targeting the vacant space for the current day of the week

const theDay = document.getElementById("currentDay");
theDay.innerHTML = currentDay;

// Getting the current UTC time 

const currentUTC = new Date();

const currentUTCDay = Date.now();
// Targeting the vacant space for the current UTC time

const theCurrentUTC = document.getElementById("currentUTC");
theCurrentUTC.innerHTML = currentUTCDay; 