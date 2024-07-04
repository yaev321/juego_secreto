let numeroSecreto = 0;
let intentos = 1;


function asignarTextoElemento(elemento, texto){

let parrafo = document.querySelector(elemento);
parrafo.innerHTML = texto;

}
function agregarNumeroSecreto() {

    numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'el numero es mayor.');
        } else {
            asignarTextoElemento('p', 'el numero menor.');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){

  document.querySelector('#valorUsuario').value ='';
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', 'indica un numero del 1 al 10.');
    intentos = 1;
    numeroSecreto = agregarNumeroSecreto();

}

function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();

