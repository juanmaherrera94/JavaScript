class Televisores extends Producto{
    constructor(tamaño){
        this.tamaño = tamaño;
        super();
    }

    toString(){
        return super.toString()+ ` ${this.tamaño} pulgadas`;
}
}

let tv1 = new Televisores("C","c")