/*
Ejercicio 8: u3e4_date3.html
Completa el archivo con dos funciones más que te permitan mostrar la hora en los siguientes formatos:

Hora en formato corto: 14:30.
Hora en formato largo: 14:30:25.
Hora con PM/AM: 02:30 AM si es antes de mediodía, o 02:30 PM si es después de mediodía. No se utilizan horas mayores que 12 ni menores que 1 (no existe 00:30).
*/


// solo he conseguido sacar este que es en formato largo (España)
const horaFormatoLargo = () => {
    let hora = new Date();
    return hora.toLocaleTimeString('es-ES');
}

//los demas no he conseguido como sacarlos