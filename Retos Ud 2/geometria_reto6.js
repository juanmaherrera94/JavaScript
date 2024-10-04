const calcularAreaTriangulo = (base, altura) =>{
    return base * altura / 2;
} 

const calcularPerimetroTrianguloIsosceles = (lado, base) => {
    lado * 2 + base
}

const calcularPerimetroTrianguloEquilatero = (lado) => {
    lado * 3
}
const calcularPerimetroTrianguloEscaleno = (lado1, lado2, lado3) => {
    lado1 + lado2 + lado3
}
const calcularAreaCuadrado = (lado) => {
     Math.pow(lado, 2)
}
const calcularPerimetroCuadrado = (lado) =>{
    return lado*4
}

const calcularAreaRectangulo = (lado1, lado2) => {
    lado1 * lado2
}
const calcularPerimetroRectangulo = (lado1, lado2) => {
    2 * (lado1 + lado2)
}
const calcularAreaCirculo = (radio) => {
    Math.PI * Math.pow(radio, 2)
}
const calcularLongitudCircuferencia = (radio) => {
    2 * Math.PI * radio
}