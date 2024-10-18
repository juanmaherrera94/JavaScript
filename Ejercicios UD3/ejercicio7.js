
/*
Actividad 7
Crea un programa que muestre el número de días que quedan desde hoy hasta el fin del curso (por ejemplo, el 22 de junio).

Pista: Recuerda que los meses en JavaScript empiezan desde el número 0.
*/

const fechaHoy = new Date();

const fechaFinCursi = new Date(2025, 5, 22);

const diferencia =  fechaFinCursi - fechaHoy;

const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));

console.log("Los dias que quedan hasta el fin del curso es: " + diasRestantes);
