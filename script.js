var hours = "00";
var mints = "00";
var seconds  = "00";
var miliseconds = "00";

var hoursDisp = document.getElementById("hoursDisp");
var mintsDisp = document.getElementById("mintsDisp");
var secDisp = document.getElementById("secDisp");
var milisecDisp = document.getElementById("milisecDisp");

function render(){
    hoursDisp.innerHTML = hours;
    mintsDisp.innerHTML = mints;
    secDisp.innerHTML = seconds;
    milisecDisp.innerHTML = miliseconds;
}

var interval;

function startBtn(){
    interval = setInterval(function(){
        miliseconds++;
        if(miliseconds == 10) {
            miliseconds = 0;
            seconds++;
            if(seconds == 60){
                seconds = 0;
                mints++;
                if(mints == 60){
                    mints = 0;
                    hours++;
                }
            }
        }
        render();
    },100);
}

function stopBtn(){
    clearInterval(interval);    
}

function resetBtn(){
    stopBtn();
    hours = "00";
    mints = "00";
    seconds = "00";
    miliseconds = "00";
    render();
}