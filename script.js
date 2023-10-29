let paused = false; 
let seconds = 0;  
let minutes = 0;
let hours = 0; 
let running = false; 

let hour = document.querySelector('#hour');
let mns = document.querySelector('#minutes');
let secs = document.querySelector('#secs');

function start(){ 
    if (!running){    
        seconds++; 
        secs.textContent = "0" + seconds;
        mns.textContent = "0" + minutes;
        hour.textContent = "0" + hours; 

        if (seconds >= 10){
            secs.textContent = seconds; 
        } 
        if (seconds >= 59){
            seconds = 0;
            secs.textContent = seconds; 
            minutes ++;
        } 
        if (minutes >= 10){
            mns.textContent= minutes;   
        } 
        if (minutes >=59){
            minutes = 0; 
            mns.textContent = minutes; 
            hours++;  
        } if (hours >=10){
            hour.textContent = hours; 
        } 
        if (hours >= 59){
            hours = 0;  
            hour.textContent = hours;  
        } 
        setTimeout(start, 1000);
    }
}; 

function stop(){
    if (!running){ 
        running = true;    
        
    }
    
}

function reset(){ 
    if (!running){ 
        running = true;    
        secs.textContent = "00";
        mns.textContent = "00";
        hour.textContent = "00"; 
    }
     
}  
 
 

const startButton = document.querySelector(".start"); 
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");  
startButton.addEventListener("click", start);  
stopButton.addEventListener("click", stop); 
resetButton.addEventListener("click", reset); 






