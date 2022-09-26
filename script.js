const hoursDiv = document.querySelector('#hours');
const minutesDiv = document.querySelector('#minutes');
const secondsDiv = document.querySelector('#seconds');
const actions = Array.from(document.querySelectorAll('.actions'));

// the default time
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zeros 
let leadingSecond = "";
let leadingMinute = "";
let leadingHour = "";

// interval variable 
let intervalId;

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

// Buttons functionality

actions.forEach((button) => {
    button.addEventListener("click", (e) => {
        let target = e.target;

        if (target.classList.contains("start")) {
            intervalId = setInterval(timer, 1000);
        } else if (target.classList.contains("pause")) {
            clearInterval(intervalId);
            console.log(intervalId);
        } else if (target.classList.contains("reset")) {
            clearInterval(intervalId);
            seconds = 0;
            minutes = 0;
            hours = 0;
            hoursDiv.innerText = "00";
            minutesDiv.innerText = "00";
            secondsDiv.innerText = "00";
        }
    })
})