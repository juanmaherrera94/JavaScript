/* 

    EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

    Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
    Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
    Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)

 */

    let compra = ["Peras", "Manzanas", "Kiwis", "Plátanos" , "Mandarinas"]

    compra.splice(1,1);
    console.log(compra);

    compra.splice(3,0,"Naranjas","Sandia");
    console.log(compra);

    compra.splice(1,1,"Cerezas","Nisperos");
    console.log(compra);


    /*
    EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola
    */

    let nota=[4,8,3,10,5];

    let notasOrdenadas = nota.sort((alumno1,alumno2) => (alumno1 - alumno2));
    console.log(notasOrdenadas);

    /*

    EJERCICIO: Dado un array con los días de la semana obtén todos los días que empiezan por ‘M
    */

    let diasDeLaSemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

    let empiezaPorM = diasDeLaSemana.filter(function(dia){

        if(dia.startsWith("M")){
            return true;
        }else{
            return false;
        }

    });

console.log(empiezaPorM);



console.log(diasDeLaSemana.findIndex(dia=>dia.startsWith("M")));


console.log(diasDeLaSemana.some(dia=>dia.startsWith("S")));

console.log(diasDeLaSemana.every(dia=>dia.endsWith("M")));


const arraySemanaMayus = diasDeLaSemana.map(dia => dia.toLocaleUpperCase());

console.log(arraySemanaMayus);

const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]

const notaMedia= arrayNotas.reduce((media,nota) => media+=nota);
console.log(notaMedia/arrayNotas.length);