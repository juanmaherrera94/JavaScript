const horaFormatoCorto = () => {
    let hora = new Date();
    let opciones = { hour: '2-digit', minute: '2-digit' };
    return hora.toLocaleTimeString('es-ES', opciones)
}

const horaFormatoLargo = () => {
    let hora = new Date();
    return hora.toLocaleTimeString('es-ES');
}

const horaFormatoAM_PM = () => {
    let hora = new Date();
    let opciones = { hour: '2-digit', minute: '2-digit', hour12: true };
    return hora.toLocaleTimeString('en-EN', opciones)
}

console.log(horaFormatoCorto());
console.log(horaFormatoLargo());
console.log(horaFormatoAM_PM());