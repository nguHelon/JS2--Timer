const hoursDiv = document.querySelector('#hours');
const minutesDiv = document.querySelector('#minutes');
const secondsDiv = document.querySelector('#seconds');

// the default time
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zeros 
let leadingSecond = "";
let leadingMinute = "";
let leadingHour = "";

// the timer function
const timer = () => {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds.toString().length < 2) {
        leadingSecond = "0" + seconds.toString();
    } else {
        leadingSecond = seconds;
    }

    if (minutes.toString().length < 2) {
        leadingMinute = "0" + minutes.toString();
    } else {
        leadingMinute = minutes;
    }

    if (hours.toString().length < 2) {
        leadingHour = "0" + hours.toString();
    } else {
        leadingHour = hours;
    }

    hoursDiv.innerText = leadingHour;
    minutesDiv.innerText = leadingMinute;
    secondsDiv.innerText = leadingSecond;
}

setInterval(timer, 1000);