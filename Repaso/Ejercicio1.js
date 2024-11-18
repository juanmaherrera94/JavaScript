class Producto{
    constructor(nombre,precio,categoria){
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }
}

class Carrito{

    constructor(){
        this.productos = [];
    }


    aniadirProducto = (producto) =>{

        this.productos.push(producto);

    }

    mostrarProductos() {
        this.productos.forEach((producto, i) => {
            console.log(
                (i + 1) + ". Nombre: " + producto.nombre + 
                ", Precio: " + producto.precio + 
                ", Categoria: " + producto.categoria
            );
        });
    }

    calcularTotal () {

        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    
    }
}

const producto1 = new Producto("Camiseta", 19.99, "Ropa");
const producto2 = new Producto("Zapatos", 49.99, "Calzado");
const producto3 = new Producto("Gorra", 14.99, "Accesorios");

const carrito = new Carrito();

carrito.aniadirProducto(producto1);
carrito.aniadirProducto(producto2);
carrito.aniadirProducto(producto3);




console.log("Total :" + carrito.calcularTotal());