/*

    Ejercicio 7: u3e4_date2.html
    Realiza un archivo en JavaScript con tres funciones que te permitan realizar los siguientes formatos de fecha, recibiendo como parámetro la fecha en milisegundos o en números (usa arguments para saber el número de parámetros que ha introducido el usuario):

    Fecha en formato corto: 17/02/2016.
    Fecha en formato largo: Miércoles, 17 de febrero de 2016.
    Fecha en formato inglés: Wednesday, February 17, 2016.

*/
//funcion para mostrar la fecha en formato corto
const formatoCorto = function (milisegundos, anio, mes, dia) {
    if (arguments.length===1) {
        const fecha = new Date(milisegundos);
        return fecha.toLocaleDateString();
    } else if (arguments.length===3){
        const fecha = new Date(arguments[0],arguments[1],arguments[2]);
        return fecha.toLocaleDateString();
    }
}
//funcion para mostrar la fecha en formato largo (España)
const formatoLargo = function (milisegundos, anio, mes, dia) {
    if (arguments.length===1) {
        const fecha = new Date(milisegundos);
        let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    } else if (arguments.length===3){
        const fecha = new Date(arguments[0],arguments[1],arguments[2]);
        let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES',opciones);
    }
}
//funcion para mostrar la fecha en formato largo (Ingles)
const formatoIngles = function (milisegundos, anio, mes, dia) {
    if (arguments.length===1) {
        const fecha = new Date(milisegundos);
        let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('en-EN', opciones);
    } else if (arguments.length===3){
        const fecha = new Date(arguments[0],arguments[1],arguments[2]);
        let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('en-EN',opciones);
    }
}

console.log(formatoCorto(2000,6,27));
console.log(formatoLargo(2000,6,27));
console.log(formatoIngles(137583839));
