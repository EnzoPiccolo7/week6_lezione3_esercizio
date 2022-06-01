let fuoco = document.querySelector('.fireoff');
let testo = document.querySelector('.container > div:nth-child(1)');
let morta = document.querySelector('.forestamorta');
function daifuoco(){
    fuoco.classList.remove('fireoff');
    fuoco.classList.add('fireon');
    testo.classList.add('testo');
    start();
    alert('Ti ho detto di non cliccare, hai appena dato fuoco alla foresta!!!')
    
}
function spegni(){
    fuoco.classList.remove('fireon');
    testo.classList.remove('testo');
    alert('bravo sei riuscito a spegnere l"incendio in tempo!!')
    stop();
}
var sec = 7;
var timer;
var i = 0;

function start(){
    timer = setInterval(cronometro,1000)

}
function stop(){
    clearInterval(timer);
}

function cronometro(){
       i++;
       console.log(i);
       if (i === sec) {
     morta.classList.remove('forestamorta');
     morta.classList.add('forestamortaon');
     alert(" HAI APPENA BRUCIATO LA FORESTA!!!!");
     stop();
 }
}