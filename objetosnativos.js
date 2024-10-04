//Crea en la consola dos variables fecNac1 y fecNac2 que contengan tu fecha de nacimiento. La primera la creas pasandole una cadena y la segunda pasándole año, mes y día
const fecNac1=new Date("1994/08/27");
const fecNac2=new Date("1994,7,27");

console.log(fecNac1);
console.log(fecNac2);

//-----------------------------------------------------///

//muestra el dia de la semana en que naciste

console.log(fecNac1.getDay());

//modifica fecNac1 para que contenga la fecha de tu cumpleaños de este año (cambia sólo el año)

fecNac1.setFullYear(2024);
console.log(fecNac1)

//muestra el día de la semana de tu cumpleaños de este año
console.log(fecNac1.getDay());

//calcula el nº de días que han pasado desde que naciste hasta hoy
const fechaAhora=new Date();

const diferencias= fechaAhora- fecNac2;

const diferenciasTiempo= Math.floor(diferencias / (1000*60*60*24)); //paso de milisegundos a dias

console.log(diferenciasTiempo);

