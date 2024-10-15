class Producto{
    constructor(name,category,units,price){
        this.name = name;
        this.category = category;
        this.units = units;
        this.price = price;
    }

    total(producto){
        return this.units * this.price;
    }

    toString(){
        return this.name + " " + this.category+" "+ this.total();
    }
}

let producto1 = new Producto("A","a",2,3.99);
let producto2 = new Producto("B","a",5,2.52);
let producto3 = new Producto("C","b",1,16.75);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());