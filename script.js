//Heavily taken from open source codepen submission by Kostas https://codepen.io/kkoutoup/pen/wjZXPw

    window.timerStatus = -1; // timerStatus (-1 -> off; 1 -> on; 0 -> pause)
    window.timerTick = setInterval(calculateTimer, 1000);
    window.initialMinutes = 25;
    //window.initialMinutes = 1;
    window.initialSeconds = 0;
    window.initialSecondsLeft = (parseInt(window.initialMinutes) * 60) + parseInt(window.initialSeconds);
    window.timerSecondsLeft = window.initialSecondsLeft;

    const btnStart = document.querySelector('#start');
    const btnStop = document.querySelector('#stop');
    const btnReset = document.querySelector('#reset');
    const iconPause = document.querySelector('#icon-pause');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const title = document.querySelector('.title');

    window.addEventListener('load', () => {
        setInitialTimer();
        setTimerSecondsLeft();
    });

    btnStart.addEventListener('click', () => {
        btnStart.style.display = 'none';
        btnStop.style.display = 'inline-block';
        btnReset.style.display = 'inline-block';
        window.timerStatus = 1;
    });

    btnStop.addEventListener('click', () => {
        if (window.timerStatus === 1) {

            iconPause.classList.remove('fa-pause-circle');
            console.log("You hit the pause button");
            iconPause.classList.add('fa-play-circle');
            window.timerStatus = 0;
        } else if (window.timerStatus === 0) {
            iconPause.classList.remove('fa-play-circle');
            iconPause.classList.add('fa-pause-circle');
            window.timerStatus = 1;
            
        }
    });

    btnReset.addEventListener('click', () => {
        window.timerStatus = -1;
        btnStart.style.display = 'inline-block';
        btnStop.style.display = 'none';
        btnReset.style.display = 'none';
        iconPause.classList.remove('fa-play-circle');
        iconPause.classList.add('fa-pause-circle');
        //title.innerText = 'Let the countdown begin!!';
        setInitialTimer();
        setTimerSecondsLeft();
    });

    /**
     * Set initial timer
     */
    function setInitialTimer() {
        minutes.innerText = window.initialMinutes >= 10 ? window.initialMinutes : '0' + window.initialMinutes;
        seconds.innerText = window.initialSeconds >= 10 ? window.initialSeconds : '0' + window.initialSeconds;
    }

    /**
     * Set timer seconds left
     */
    function setTimerSecondsLeft() {
        window.timerSecondsLeft = (parseInt(minutes.innerText) * 60) + parseInt(seconds.innerText);
    }

    /**
     * Count down seconds
     */
    function calculateTimer() {
        if (window.timerStatus === 1) {
            window.timerSecondsLeft--;
            
        }
        if (window.timerSecondsLeft >= 0) {
            minutes.innerText = Math.floor(window.timerSecondsLeft / 60) >= 10 ? Math.floor(window.timerSecondsLeft / 60) : '0' + Math.floor(window.timerSecondsLeft / 60);
            seconds.innerText = Math.floor(window.timerSecondsLeft % 60) >= 10 ? Math.floor(window.timerSecondsLeft % 60) : '0' + Math.floor(window.timerSecondsLeft % 60);
        }

        if (window.timerSecondsLeft < 0) 
        {
            console.log("Timer is at 0. The value of isWork is " + isWork);
        	var audio = new Audio('Dog Woof-SoundBible.com.mp3');
                    audio.play();
            if(isWork == true)
            {
        	    //timer = duration;
        	    timer = 25 * 60;
        	    window.timerSecondsLeft = 25 * 60;
        	    //window.timerSecondsLeft = 30;
        	    //timer = 2 * 60;
        	    isWork = false;
        	    getRandomCorgi();

            }
            else
            {
            	timer = 5 * 60;
            	window.timerSecondsLeft = 5 * 60;
            	//window.timerSecondsLeft = 5;
            	//timer = 1 * 60;
            	isWork = true;
            	getRandomCorgi();
            }
        }
    }

   


const randomButton = document.querySelector('.random');
var isWork = true;

getRandomCorgi();

function getRandomCorgi(){
	console.log("Random corgi of the day");
  fetch('https://dog.ceo/api/breed/pembroke/images/random')
    .then(checkStatus)
    .then(response => response.json())
    .then(data => handleData(data))
    .catch(error => notifyUser(error))
}

//handleData
function handleData(data){
  let url = data.message;
  console.log(url)
  let breedName = 'corgi';
  document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a corgi" src='${url}'/>`;
  document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a corgi</p>`;
}

//HELPER FUNCTIONS
//checkStatus
function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText));
  }
}

function notifyUser(error){
  const errorContainer = document.querySelector('.alert');
  errorContainer.innerHTML = `There was an error with the server request (${error}).`;
  errorContainer.style.display = 'block';
  setTimeout(()=>{
    errorContainer.innerHTML = '';
    errorContainer.style.display ='none';
  },4000)
  
  
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        
    }, 1000);
}
/*
window.onload = function () {

    var twentyFiveMinutes = 60 * 25,
    //var twentyFiveMinutes = .1 * 25,
    display = document.querySelector('#time'); //ES: current error - display is null
    startTimer(twentyFiveMinutes, display);
    isWork = false;
};
*/

