let miVentana;
window.addEventListener("load",function(){

    document.getElementById("abrir").addEventListener("click",abrirVentana);
    document.getElementById("cerrar").addEventListener("click",cerrarVentana);
});

function abrirVentana(){
   miVentana=window.open("https://www.google.es","","width=500,height=500",)
}
function cerrarVentana(){
    miVentana.close();
}