var hours = 0;
var min = 0;
var sec = 0;
var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, 1000);
}

function stop() {
  clearInterval(cron);
}

function zerar() {
  document.getElementById('sec').innerText = `00`;
  sec = 0;
  document.getElementById('min').innerText = `00`;
  min = 0;
  document.getElementById('hours').innerText = `00`;
  hours = 0;
  stop();
}

function timer() {
  sec++;
  verify(sec, 'sec');
  if(sec == 60){
    sec = 0;
    verify(sec, 'sec');
    min++;
    verify(min, 'min');
    if(min == 60){
      min = 0;
      verify(min, 'min');
      hours++;
      verify(hours, 'hours');
    }
  }
}

function verify(temp, prop) {
  if(temp < 10){
    document.getElementById(`${prop}`).innerText = `0${temp}`;
  }else{
    document.getElementById(`${prop}`).innerText = temp;
  }
}