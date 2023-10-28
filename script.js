let paused = false; 
let seconds = 0;  
let minutes = 0;
let hours = 0; 

const hour = document.querySelector('#hour');
let mns = document.querySelector('#minutes');
const secs = document.querySelector('#secs');
 
console.log(hour);  
console.log(mns);
console.log(secs); 


// function time(){
//     for (let i=0; i<10000; i++){

//     }
// }

 

function start(){ 
   seconds++; 
        if (seconds < 10) {
            secs.textContent = "0" + seconds;
        } if (seconds >= 10) {
            seconds = 0; 
            secs.textContent = "0" + seconds; 
            minutes++;    
            mns.textContent = "0" + minutes; 

            if (minutes >= 59){
                minutes = 0; 
                mns.textContent = "0" + minutes; 
                hours++; 
                hour.textContent = "0" + hours;  
            }
        }    
        setTimeout(start, 1000);
        
};   

function reset(){
    secs.textContent = "00";
    mns.textContent = "00";
    hour.textContent = "00"; 
}
 
 

const startButton = document.querySelector(".start"); 
const resetButton = document.querySelector(".reset");  
startButton.addEventListener("click", start);  
resetButton.addEventListener("click", reset); 






