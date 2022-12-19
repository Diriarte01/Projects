let ataqueJugador;
let ataqueEnemigo;

window.addEventListener('load', () => { 
    let boton_mascota = document.getElementById('boton-mascota');
    boton_mascota.addEventListener('click', () => {
        let mascota = document.getElementsByName('mascota')
        let nombre;
        for (let i = 0; i < mascota.length; i++) {
            if (mascota[i].checked) {
                nombre = (mascota[i].id);
                break;
            }
        }
        if(!nombre){
            alert('Favor seleccionar una mascota')
        }else{
            let nombreEnemigo = mascotaEnemiga();
            let aliada = document.getElementById('mascota-aliada');
            aliada.innerHTML = nombre;
            let enemiga = document.getElementById('mascota-enemiga');
            enemiga.innerHTML = nombreEnemigo;
            boton_mascota.disabled = true;
        }
    })
    let btn_fuego = document.getElementById('boton-fuego');
    let btn_agua = document.getElementById('boton-agua');
    let btn_tierra = document.getElementById('boton-tierra');
    btn_fuego.addEventListener('click', () => { ataqueFuego()});
    btn_agua.addEventListener('click', () => { ataqueAgua()});
    btn_tierra.addEventListener('click', () => { ataqueTierra()});
})

function mascotaEnemiga(){
    let mascotas = ['Hipodogue','Capipepo','Ratigueya'];
    let index = getRandomInt(0,3);
    return mascotas[index];
}

function ataqueEnemigoA(){
    let elementos = ['Fuego', 'Agua','Tierra'];
    let index = getRandomInt(0,3);
    ataqueEnemigo = elementos[index];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // El número máximo no es incluido y el mínimo sí
}

function ataqueFuego(){
    ataqueJugador = 'Fuego';
    ataqueEnemigoA();
    result();
}

function ataqueAgua(){
    ataqueJugador = 'Agua';
    ataqueEnemigoA();
    result();
}

function ataqueTierra(){
    ataqueJugador = 'Tierra';
    ataqueEnemigoA();
    result();
}

function result(){
    let mensaje = '';
    if(ataqueEnemigo && ataqueJugador){
        if(ataqueEnemigo == ataqueJugador){
            mensaje = 'Empate';
        }else if(ataqueEnemigo == 'Agua' && (ataqueJugador == 'Fuego' || ataqueJugador == 'Tierra')){
            mensaje = 'Perdiste';
        }else if(ataqueEnemigo == 'Tierra' && ataqueJugador == 'Fuego'){
            mensaje = 'Perdiste';
        }else{
            mensaje = 'Ganaste';
        }
        console.log(mensaje);
    }
    let vida_enemigo = document.getElementById('vida-enemigo');
    let vida_aliada = document.getElementById('vida-aliada');
    let ataque_jugador = document.getElementById('ataque-jugador');
    ataque_jugador.innerHTML = ataqueJugador;
    let ataque_enemigo = document.getElementById('ataque-enemigo');
    ataque_enemigo.innerHTML = ataqueEnemigo;
    let mensaje_ataque = document.getElementById('mensaje-ataque');
    mensaje_ataque.innerHTML = mensaje;
}