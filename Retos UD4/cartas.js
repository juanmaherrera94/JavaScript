const arrayImagenes = [
    "imagenes/1.jpg",
    "imagenes/2.jpg",
    "imagenes/3.jpg",
    "imagenes/4.jpg",
    "imagenes/1.jpg",
    "imagenes/2.jpg",
    "imagenes/3.jpg",
    "imagenes/4.jpg",
];

let contador = 0;
let contadorMovimientos = 0;
let primeraCarta;
let segundaCarta;

// aqui hago una variable para coger cada elemento de la imagen
let carta1 = document.getElementById("0");
let carta2 = document.getElementById("1");
let carta3 = document.getElementById("2");
let carta4 = document.getElementById("3");
let carta5 = document.getElementById("4");
let carta6 = document.getElementById("5");
let carta7 = document.getElementById("6");
let carta8 = document.getElementById("7");

let contarMovimientos = document.getElementById("movimiento");
let contarPuntos = document.getElementById("puntuacion");

// cada vez que haga click llamara a la funcion girar

carta1.addEventListener("click", girar);
carta2.addEventListener("click", girar);
carta3.addEventListener("click", girar);
carta4.addEventListener("click", girar);
carta5.addEventListener("click", girar);
carta6.addEventListener("click", girar);
carta7.addEventListener("click", girar);
carta8.addEventListener("click", girar);


function girar(event) {

    //obtengo que id de la imagen se ha dado click
    let carta = event.target;


    //convierto el id a numero
    let indice = parseInt(carta.id);

    //cambio el atributo src de la carta
    carta.src = arrayImagenes[indice];

    if (!primeraCarta) {

        primeraCarta = carta;

    } else {

        segundaCarta = carta;
        contadorMovimientos++;
        contarMovimientos.innerHTML = "Movimientos: " + contadorMovimientos;
    }

    if (primeraCarta.src === segundaCarta.src) {

        contador++;
        contarPuntos.innerHTML = "Puntuacion: " + contador;

        primeraCarta = null;
        segundaCarta = null;

        primeraCarta.style.border = "5px solid red";
        segundaCarta.style.border = "5px solid green";

    } else {

        setTimeout(() => {
            primeraCarta.src = "imagenes/interrogacion.jpg";
            segundaCarta.src = "imagenes/interrogacion.jpg";
            primeraCarta = null;
            segundaCarta = null;
        }, 1000)
    }
}
