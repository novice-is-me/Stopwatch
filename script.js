let paused = false; 
let seconds = 0;  

const hour = document.querySelector('#hour');
const mns = document.querySelector('#minutes');
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
            mns.textContent = "0" + seconds; 

        }   
        setTimeout(start, 1000);
        
        
     
};   
 
 

const startButton = document.querySelector(".start");  
startButton.addEventListener("click", start);  







// setInterval(start, 1);   

// function pause(){

// }

// function stop(){

// }

// function reset(){

// }



// const newYear = "1 Jan 2021";

// function Countdown(){
//     const newYearDate = new Date(newYear);
//     const currentDate = new Date();

//     const seconds = (newYearDate - currentDate) *1000;
//     console.log(seconds);  
// }

// Countdown(); 