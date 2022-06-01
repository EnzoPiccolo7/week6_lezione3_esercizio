let fuoco = document.querySelector('footer img');
let testo = document.querySelector('.container > div:nth-child(2)')
function daifuoco(){
    fuoco.classList.add('daifuoco');
    testo.classList.add('testo');
    alert('Ti ho detto di non cliccare, hai appena dato fuoco alla pagina!!!')
}
function spegni(){
    fuoco.classList.remove('daifuoco');
    testo.classList.remove('testo');
    alert('bravo sei riuscito a spegnere l"incendio in tempo in tempo!!')
}
