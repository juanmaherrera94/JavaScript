
function calcularAreaTriangulo(base,altura){
    return base * altura / 2
}

function calcularPerimetroTrianguloIsosceles(lado,base){

    return lado * 2 + base
}

function calcularPerimetroTrianguloEquilatero(lado){

    return lado*3;
}

function calcularPerimetroTrianguloEscaleno(lado1,lado2,lado3){

    return lado1+lado2+lado3
}   

function calcularAreaCuadrado(lado){

    return Math.pow(lado,2)
}

function calcularAreaRectangulo(lado1,lado2){

    return lado1 * lado2
}

function calcularPerimetroRectangulo(lado1,lado2){

    return 2 * (lado1+lado2)
}

function calcularAreaCirculo(radio){
    
        return Math.PI * Math.pow(radio,2)
}

function calcularPerimetroCuadrado(lado){
    return lado*4;
}

function calcularLongitudCircuferencia(radio){


    return 2 * Math.PI * radio


}


//reto 7

function perimetroTriangulo (lado1,lado2,lado3){

  if (arguments.length === 1){
    console.log(lado1)
    return calcularPerimetroTrianguloEquilatero(lado1)
  } else if(arguments.length === 2){
    console.log(lado1,lado2)
    return calcularPerimetroTrianguloIsosceles(lado1,lado2)
  }else if(arguments.length ===3 ){
    console.log(lado1,lado2,lado3)
    return calcularPerimetroTrianguloEscaleno(lado1,lado2,lado3)

  }
}

function perimetroParalelogramo (lado1,lado2){

    if (arguments.length === 1){
      console.log(lado1)
      return calcularPerimetroCuadrado(lado1)
    }else{
        console.log(lado1,lado2)
        return calcularPerimetroRectangulo(lado1,lado2)
    }
  }
  

