
const mostrarNumeros = () => {
    const numeros = []
    for (let i = 1; i < 101; i++) {
        if (i % 3 !== 0) {
            numeros.push(i);
        }
    }
    return numeros
};

    const listaMeses = () =>{

        const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        const mesesVerano= []
        meses.forEach(mes => {
            if (mes !== "Junio" && mes !== "Julio" && mes !== "Agosto"){
                mesesVerano.push(mes)
            }
        });
        return mesesVerano

    }

    console.log(mostrarNumeros())
    console.log(listaMeses())
