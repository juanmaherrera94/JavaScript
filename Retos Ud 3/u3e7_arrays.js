/*
Ejercicio 11: u3e7_arrays.html
Utilizando la clase Sandkill del ejercicio anterior, realiza un programa que permita gestionar un array de sandkills con las siguientes operaciones:

Insertar un sandkill al principio de la lista.
Insertar un sandkill al final de la lista.
Borrar el primer sandkill de la lista.
Borrar el último sandkill de la lista.
Mostrar la lista de sandkills.
Mostrar la lista de sandkills ordenada.
Buscar un sandkill por su nombre.
Buscar un sandkill por su posición.
**/
import { Sandkills } from './u3e6_clases.js';

const arraySankill = [];


const anadirAlPrincipio = (sandkill) => {

    return arraySankill.unshift(sandkill);
}


const anadirAlFinal = (sandkill) => {

    return arraySankill.push(sandkill);
}


const borrarPrimero = () => {

    return arraySankill.shift();
}

const borrarUltimo = () => {

    return arraySankill.pop();
}

const mostrarSankill = () => {
    let resultado= "";

    arraySankill.forEach(element => {

        resultado += element.toString() + "<br>";
    });

    return resultado;
}

const mostrarOrdenado = () => {

    const arrayOrdenado = arraySankill.sort();

    return arrayOrdenado;
}

const buscarPorNombre = (nombre) => {
    const sandkillBuscado = arraySankill.find((sandkill) => sandkill.getNombre() === nombre);
    return sandkillBuscado ? sandkillBuscado.toString() : "No existe sankill";
}

const buscarPorPosicion = (numero) => {
    if (arraySankill.length >= numero) {
        return arraySankill[numero];
    }
}

const sankill1 = new Sandkills("alberto", 33, 1, sankill4);
const sankill2 = new Sandkills("juanito", 19, 2, sankill1);
const sankill3 = new Sandkills("miguel", 22, 1, sankill2);
const sankill4 = new Sandkills("victor", 50, 1, sankill3);


anadirAlPrincipio(sankill1);
anadirAlPrincipio(sankill2);
anadirAlPrincipio(sankill3);

console.log(mostrarSankill());

anadirAlFinal(sankill4);

console.log(mostrarOrdenado());

console.log(buscarPorNombre("pepe"));

console.log(buscarPorPosicion(2));