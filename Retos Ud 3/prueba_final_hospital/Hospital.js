class Hospital {

    constructor(nombre, localidad) {

        this.nombre = nombre;
        this.localidad = localidad;
        this.personal = [];
    }

    agregarPersonal = () => {
        this.personal.push(this.personal);

    }

    getNombre() {
        return this.nombre;
    }

    getLocalidad() {
        return this.localidad;
    }


    getResponsable() {

        return this.responsable = responsable;

    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setLocalidad(localidad) {
        this.localidad = localidad;
    }

    setResponsable(responsable) {
        this.responsable = responsable;
    }

    agregarPaciente = () => {
        this.paciente.push(this.paciente);

    }

    toString() {
        let informacion = "El nombre del hospital es: " + this.getNombre() +
            ", de la localidad: " + this.getLocalidad();

        if (this.responsable) {
            informacion += ", el responsable es: " + this.getResponsable();
        }

        informacion += "<br>" + "Personal";

        this.personal.forEach((element) => {

            informacion += element.toString() + "<br>";

        });

        return informacion;
    }


}

class Personal {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }

    getNombre() {
        return this.nombre;
    }

    getEspecialidad(especialidad) {
        switch (especialidad) {
            case 1:
                "Medico";
                break;

            case 2:
                "Enfermera";
                break;

            case 3:
                "Celador";
                break;
            default:
                "Especialidad no declarada";
                break;
        }
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }

    toString() {
        return `Nombre: ${this.getNombre()} 
                Especialidad: ${this.getEspecialidad}`
    }
}

class Paciente {

    constructor(nombre, personal) {

        this.nombre = nombre;
        this.personal = personal;
    }

    getNombre() {

        return this.nombre;
    }

    getPersonal() {

        return this.personal;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setPersonbal(personal) {

        this.personal = personal;
    }

    toString() {

        return ("Nombre del paciente: " + this.getNombre() + "con personal: " + this.getPersonal());

    }
}
