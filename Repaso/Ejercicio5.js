const ventas = [
    { producto: "Camisa", precio: 20, cantidad: 3 },
    { producto: "Pantalón", precio: 50, cantidad: 2 },
    { producto: "Zapatos", precio: 100, cantidad: 1 },
    { producto: "Sombrero", precio: 15, cantidad: 5 },
    { producto: "Cinturón", precio: 25, cantidad: 2 },
  ];


 const ingresoTotal= ventas.reduce((total,venta)=>{

    return total + (venta.precio * venta.cantidad);

 },0);


 const ingresos = ventas.map(venta => {

    return {
        producto: venta.producto,
        ingreso: venta.precio * venta.cantidad
    };
 });

 const ingresosAltos = ingresos.filter(venta => venta.ingreso>50);

 const buscarProducto = ventas.find(nombre => nombre.producto === "Zapatos")

 const indiceProducto= ventas.findIndex(indice=> indice.producto === "Cinturón");

 const verificacionPrecioMayor = ventas.some(pre => pre.precio > 100);

 const verificacionPrecioMayorTodos = ventas.every(pre => pre.precio > 10);

 const ordenarProductos= ingresos.sort((producto1,producto2) => producto1.ingreso - producto2.ingreso).reverse();

 const listaNombres=ventas.map(lista=> lista.producto).join(",");

 const agrupadoPorIngresoMenor= ingresos.filter(ingre => ingre.ingreso <= 50);

 const agrupadoPorIngresoMayor= ingresos.filter(ingre => ingre.ingreso > 50);

 //mirado en chatgpt porque no sabia como sacarlo
 const productosPorRango = ventas.reduce((rango, venta) => {
    if (venta.precio <= 30) {
      rango.barato.push(venta); // Si el precio es menor o igual a 30, lo agregamos a "barato"
    } else {
      rango.caro.push(venta); // Si el precio es mayor a 30, lo agregamos a "caro"
    }
    return rango;
  }, { barato: [], caro: [] });
 
 console.log("El ingreso total es : " + ingresoTotal + " €");
 console.log(ingresos);
 console.log(ingresosAltos)
 console.log(buscarProducto);
 console.log(indiceProducto);
 console.log(verificacionPrecioMayor);
 console.log(verificacionPrecioMayorTodos);
console.log(ordenarProductos)
console.log(listaNombres);
console.log(agrupadoPorIngresoMenor)
console.log(agrupadoPorIngresoMayor)
console.log(productosPorRango);