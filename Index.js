const body = document.getElementsByClassName("body")
const mainNumber = document.querySelector(".mainNumber")
const startButton = document.getElementById("button")
const recordButton = document.getElementById("record")
const list = document.querySelector("ul")

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;

var timeState = 0

function start() {
    if(timeState == 1){
        clearInterval(int);
        startButton.innerHTML="CONTINUE"
        timeState = 0
    } else {    
        int = setInterval(displayTimer,10);
        startButton.innerHTML="STOP"
        timeState = 1
    }
}

function register() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    const newRecord = document.createElement("li")
    newRecord.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`

    list.appendChild(newRecord)
}

function reset() {
    timeState = 0
    
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    mainNumber.innerHTML = "00 : 00 : 00 : 000 ";

    startButton.innerHTML="START"

    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild)
    }
}


function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++; 
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 mainNumber.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}