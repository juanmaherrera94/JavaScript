function abrirPopup(){
    const nuevaVentana = window.open("","","toolbar=no,scrollbars=no,location=no,statusbar=no");

    nuevaVentana.document.write(`
        <h1>Hola</h1>
        <p>Esta es una ventana</p>
        <button onclick="window.close()">Cerrar</button>
        `);
}

setTimeout(abrirPopup,7777);