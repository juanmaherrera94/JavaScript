/*
   Ejercicio 10: u3e6_clases.html
   Crea una clase para almacenar información de Sandkills con las siguientes propiedades y métodos:

   Propiedades: nombre, edad, especialidad (1: Sistemas, 2: Web, 3: Multiplataforma), y compañero (otro objeto de tipo Sandkill).
   Métodos:
   .toString(): devuelve la información del Sandkill usando los getters.
   Getters: .getNombre(), .getEdad(), .getEspecialidad(), .getNombreCompanero(), .getCompanero().
   Setters: .setNombre(), .setEdad(), .setEspecialidad(), .setEspecialidadNombre(), .setCompanero().
  **/
   export class Sandkills{

    constructor(nombre,edad,especialidad,companiero){
       this.nombre=nombre;
       this.edad=edad;
       this.especialidad=especialidad;
       this.companiero=companiero;

    }

    getNombre(){
       
       return this.nombre;
    }
    getEdad(){
       return this.edad;
    }

    getEspecialidad(){
       return this.especialidad;

    }

    getNombreCompanero() {
      
      return this.companiero ? this.companiero.getNombre() : "Ninguno";
    }
    

    getCompaniero(){

       return this.companiero;
    }

    setNombre(nombre){

       return this.nombre=nombre;
    }

    setEdad(edad){

       return this.edad=edad;
    }

    setEspecialidad(especialidad){

       return this.especialidad=especialidad;
    }

    setCompaniero(sandkill){

       return this.companiero=sandkill;
   
   }

    setEspecialidadNombre(nombreEspecialidad){

       if (nombreEspecialidad === 1){
               return "Sistemas";
       }else if(nombreEspecialidad === 2){
               return "Web"; 
       }else if (nombreEspecialidad === 3){
               return "Multiplataforma";
       }
    }

    toString() {
      return "El nombre es: " + this.getNombre() + 
             ", con edad: " + this.getEdad() + 
             ", su especialidad es: " + this.getEspecialidad() + 
             ", y su compañero es: " + this.getNombreCompanero();
  }
  
  
}
const sandkill1 = new Sandkills("Juan", 25, 2, null); 
const sandkill2 = new Sandkills("Ana", 28, 1, sandkill1);
 

console.log(sandkill1.toString());
console.log(sandkill2.toString())