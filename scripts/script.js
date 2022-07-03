let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let numberSuffix = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

function checkTime() {
    let currentDate = new Date();

    let hour = currentDate.getHours();
    let minute = checkZero(currentDate.getMinutes());
    let seconds = checkZero(currentDate.getSeconds());
    let timeOfDay;

    if (hour < 13) {
        timeOfDay = 'AM';
    } else {
        timeOfDay = 'PM';
        hour = checkZero(hour -= 12);
    };

    document.getElementById('digital-clock').textContent = `${hour}:${minute}:${seconds} ${timeOfDay}`;

    // Update CSS stylesheet based on the time of the day
    if (timeOfDay === 'AM') {
        document.getElementById('page-style').setAttribute('href', './styles/morning.css')
    } else {
        document.getElementById('page-style').setAttribute('href', './styles/night.css')
    };

    let day = currentDate.getDay();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    let dateSuffix = numberSuffix[parseInt((date).toString().slice(-1))];

    document.getElementById('date').textContent = `${days[day]}, ${months[month]} ${date}${dateSuffix} ${year}`;
};

function checkZero(number) {
    return (number < 10 ? `0${number}` : number);
};

checkTime();
setInterval(checkTime, 1000);