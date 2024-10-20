    /*
    Actividad 10
        Crea una librería con las siguientes entidades:

        Autor
        Propiedades:
        nombre (string)
        nacionalidad (string)
        Constructor: Asigna nombre y nacionalidad.
        Métodos: Getters para todas las propiedades.
        Libro
        Propiedades:
        ISBN (número) – Generado automáticamente y único.
        título (string)
        autor (Autor)
        precio (número)
        género (string)
        stock (número)
        Constructor: Genera un id automático y asigna el resto de propiedades.
        Métodos:
        tieneStock(): Devuelve true si el stock es mayor que 0, false en caso contrario.
        Getters para todas las propiedades.
        Setters para modificar el precio y el stock.
        Librería
        Propiedades:
        libros (array de Libro), inicializa vacío.
        ganancias (número), inicializa en 0.
        Métodos:
        agregar(libro): Agrega un libro a la librería, comprobando que su ISBN no se repita.
        eliminar(id): Elimina el libro con el id especificado.
        buscarPorId(id): Devuelve la información del libro con el id indicado.
        buscarPorTitulo(titulo): Devuelve la información del libro con el título indicado.
        filtrarPorAutor(autor): Devuelve un array de libros escritos por el autor indicado.
        filtrarPorGenero(genero): Devuelve un array de libros del género indicado.
        comprarLibros(idLibros): Reduce el stock de los libros comprados y suma el precio a las ganancias.
        obtenerGanancias(): Devuelve las ganancias totales.
        Observaciones:

        El stock y el precio tienen un valor mínimo de 0.
    */

// Clase Autor
class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getNacionalidad() {
        return this.nacionalidad;
    }
}

// Clase Libro
class Libro {

    generarISBN() {
        // Genera un ISBN unico
        return Math.floor(Math.random() * 1000000000000); // no se si asi sera lo mas optimo o incluso si esta bien 
    }

    constructor(titulo, autor, precio, genero, stock) {

        this.ISBN = Libro.generarISBN();
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio; 
        this.genero = genero;
        this.stock = stock; 
    }


    tieneStock() {
        return this.stock > 0;
    }

    // Getters
    getISBN() {
        return this.ISBN;
    }

    getTitulo() {
        return this.titulo;
    }

    getAutor() {
        return this.autor;
    }

    getPrecio() {
        return this.precio;
    }

    getGenero() {
        return this.genero;
    }

    getStock() {
        return this.stock;
    }

    // Setters para modificar el precio y el stock
    
    setPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio; 
    }

    setStock(nuevoStock) {
        this.stock = nuevoStock;
    }
}

class Libreria {
    constructor() {
        this.libros = [];
        this.ganancias = 0;
    }

    // Metodo para agregar un libro, verificando que el ISBN sea unico
    agregar(libro) {
        const libroExistente = libros.find(l => l.ISBN === libro.ISBN);
        if (libroExistente) {
            console.log("El ISBN ya existe.");
        } else {
            libros.push(libro);
            console.log("Libro \"" + libro.titulo + "\" agregado a la libreria.");
        }
    }

    // Metodo para eliminar un libro por su id (ISBN)
    eliminar(id) {
        libros = libros.filter(libro => libro.ISBN !== id);
        console.log("Libro con ID " + id + " eliminado.");
    }

    // Metodo para buscar un libro por su ID (ISBN)
    buscarPorId(id) {
        return libros.find(libro => libro.ISBN === id);
    }

    // Metodo para buscar un libro por su titulo
    buscarPorTitulo(titulo) {
        return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    }

    // Metodo para filtrar libros por autor
    filtrarPorAutor(autor) {
        return libros.filter(libro => libro.autor.getNombre().toLowerCase() === autor.toLowerCase());
    }

    // Metodo para filtrar libros por genero
    filtrarPorGenero(genero) {
        return libros.filter(libro => libro.genero.toLowerCase() === genero.toLowerCase());
    }

    // Metodo para comprar libros, reduciendo el stock y sumando ganancias
    comprarLibros() {
    }

    // Metodo para obtener las ganancias totales
    obtenerGanancias() {
        return this.ganancias;
    }
}
