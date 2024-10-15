const fecNac1 = new Date("2000/6/8");
const fecNac2 = new Date(2000,5,9);

const diaSemana = new Date("2000/6/8");

const diasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

console.log(fecNac1.getDay());
console.log(diasSemana[fecNac1.getDay()]);

fecNac2.setFullYear(2024);
console.log(diasSemana[fecNac2.getDay()]);

const hoy = new Date();
fecNac2.setFullYear(2000);
const diferenciaTiempo = hoy - fecNac2;
const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
console.log(diferenciaDias);