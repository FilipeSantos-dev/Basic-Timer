var hours = 0;
var min = 0;
var sec = 0;
var cron;
//Função que começa o cronometro
function start() {
  cron = setInterval(() => {
    timer();
  }, 1000);
  document.getElementById('start').disabled=true;
  document.getElementById('stop').disabled=false;
  document.getElementById('zerar').disabled=false;
  //document.getElementById('save').disabled(false);
}

//Função que interrompe o cronometro
function stop() {
  clearInterval(cron);
  
  document.getElementById('start').innerText = 'Retomar';
  
  document.getElementById('start').disabled=false;
  document.getElementById('stop').disabled=true;
  document.getElementById('zerar').disabled=false;
  //document.getElementById('save').disabled(false);
}

//Função que zera o cronometro
function zerar() {
  document.getElementById('sec').innerText = `00`;
  sec = 0;
  document.getElementById('min').innerText = `00`;
  min = 0;
  document.getElementById('hours').innerText = `00`;
  hours = 0;
  stop();
  document.getElementById('start').disabled=false;
  document.getElementById('stop').disabled=true;
  document.getElementById('zerar').disabled=true;
  //document.getElementById('save').disabled(true);

  document.getElementById('start').innerText = 'Começar';
}

//Função que configura o tempo do cronometro
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

//Função que faz uma verificação para ver se é ou não preciso colocar dois 0 no elemento
function verify(temp, prop) {
  if(temp < 10){
    document.getElementById(`${prop}`).innerText = `0${temp}`;
  }else{
    document.getElementById(`${prop}`).innerText = temp;
  }
}