/**
     * Actividad 2: Cálculo de Salario
    Escribe una función que reciba dos parámetros: número de horas trabajadas y precio por hora. Después, llama a la función para probar que funciona.

    La función debe calcular el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas:

    Las primeras 35 horas se pagan a tarifa normal.
    Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.
    Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:

    Los primeros 500 euros son libres de impuestos.
    Los siguientes 400 tienen un 25% de impuestos.
    Los restantes tienen un 45% de impuestos.
    Imprime por consola el salario calculado.
 */
const calculoSalario = (nHoras, precioHora) => {


    let salarioBruto = 0;
    let salarioNeto = 0;

    // Si el numero de horas trabajadas es menor o igual a 35
    if (nHoras <= 35) {
        // El salario bruto es  las horas trabajadas multiplicadas por el precio por hora
        salarioBruto = nHoras * precioHora;

    } else {
        // Si se trabajaron mas de 35 horas
        //primero calculamos las primeras 35 horas al precio normal
        salarioBruto = 35 * precioHora;

        // Calculamos cuantas horas extras trabajo
        let restoDeHoras = nHoras - 35;

        // A las horas extras se les paga un 50% más (1.5 veces el precio normal por hora)
        salarioBruto += restoDeHoras * (precioHora * 1.5);
    }

    // Ahora calculamos el salario neto en base al salario bruto
    // Si el salario bruto es menor o igual a 500, no hay impuestos y el salario neto es igual al bruto
    if (salarioBruto <= 500) {
        salarioNeto = salarioBruto;

    // Si el salario bruto es mayor a 500 pero menor o igual a 900
    } else if (salarioBruto <= 900) {
        // Los primeros 500 no tienen impuestos
        let impuesto25 = salarioBruto - 500;

        // Los siguientes hasta 900 tienen un impuesto del 25%
        salarioNeto = 500 + (impuesto25 * 0.75);

    } else {
       
        let impuesto45 = salarioBruto - 900;

        // Todo lo que supera los 900 tiene un impuesto del 45%
        salarioNeto = 500 + (400 * 0.75) + (impuesto45 * 0.55);
    }

    return salarioNeto;
}


console.log(calculoSalario(40, 6)); 
