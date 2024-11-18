class Producto{

    constructor(nombre,precio,categoria){
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }
};

class Carrito{

    constructor(){
        this.productos = [];
    }

    agregarProducto (producto){

        this.productos.push(producto);

    }

    mostrarProductos() {
        return this.productos;
    }

    calcularTotal () {
    
      return this.productos.reduce((total, producto) => total += producto.precio,0);
    
    }
}

const producto1 = new Producto("Camiseta", 19.99, "Ropa");
const producto2 = new Producto("Zapatos", 49.99, "Calzado");
const producto3 = new Producto("Gorra", 14.99, "Accesorios");

const carrito = new Carrito();

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

console.log(carrito.mostrarProductos());

console.log("Total :" + carrito.calcularTotal());