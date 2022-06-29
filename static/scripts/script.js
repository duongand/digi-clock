console.log('Script loaded successfully');

// Numerical association of days and months
let days = new Map([
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"]
]);

let months = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
]);

function check_time() {

    // Date object initialization
    let current_date = new Date();

    // Current time properties
    let hour = (current_date.getHours() > 9 ? String(current_date.getHours()) : `0${current_date.getHours()}`);
    let minute = (current_date.getMinutes() > 9 ? String(current_date.getMinutes()) : `0${current_date.getMinutes()}`)
    let seconds = (current_date.getSeconds() > 9 ? String(current_date.getSeconds()) : `0${current_date.getSeconds()}`)
    
    // Time formatting
    let formatted_time = `${hour}:${minute}:${seconds}`;

    // Current date properties
    let day = current_date.getDay();
    let month = current_date.getMonth();
    let date = current_date.getDate();
    let year = current_date.getFullYear();

    // Date formatting
    let formatted_date = `${days.get(day)}, ${months.get(month)} ${date} ${year}`;

    // Update clock DOM with change in time
    let clock_display = document.getElementById('digital-clock');
    clock_display.textContent = formatted_time;

    let date_display = document.getElementById('date');
    date_display.textContent = formatted_date;

};

// Routinely check and change the time/date
let date_timer = setInterval(check_time, 1000);