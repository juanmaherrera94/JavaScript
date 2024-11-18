const ventas = [
    { producto: "Camisa", precio: 20, cantidad: 3 },
    { producto: "Pantalón", precio: 50, cantidad: 2 },
    { producto: "Zapatos", precio: 100, cantidad: 1 },
    { producto: "Sombrero", precio: 15, cantidad: 5 },
    { producto: "Cinturón", precio: 25, cantidad: 2 },
  ];


 const ingresoTotal = () =>{

    return ventas.reduce((total,producto) => total +=producto.precio*producto.cantidad,0)

 } 

 const ingresos = ventas.map(venta => {

  const resultado={
    producto:venta.producto,
    ingreso:venta.cantidad * venta.precio
  };

  return resultado;

 });

 const ingresosAltos = ingresos.filter(venta => venta.ingreso>50);

 const buscarProducto = ventas.find(nombre => nombre.producto === "Zapatos")

 const indiceProducto= ventas.findIndex(indice=> indice.producto === "Cinturón");

 const verificacionPrecioMayor = ventas.some(pre => pre.precio > 100);

 const verificacionPrecioMayorTodos = ventas.every(pre => pre.precio > 10);

 const ordenarProductos= ingresos.sort((producto1,producto2) => producto1.ingreso - producto2.ingreso).reverse();

 const listaNombres=ventas.map(lista=> lista.producto).join(", ");

 const agrupadoPorIngresoMenor= ingresos.filter(ingre => ingre.ingreso <= 50);

 const agrupadoPorIngresoMayor= ingresos.filter(ingre => ingre.ingreso > 50);


 
 console.log("Ingreso total : " + ingresoTotal());
 console.log(ingresos)
 console.log(ingresosAltos)
 console.log(buscarProducto);
 console.log(indiceProducto);
 console.log(verificacionPrecioMayor);
 console.log(verificacionPrecioMayorTodos);
console.log(ordenarProductos)
console.log(listaNombres);
console.log(agrupadoPorIngresoMenor)
console.log(agrupadoPorIngresoMayor)
