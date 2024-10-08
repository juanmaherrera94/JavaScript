class Hospital {
    constructor(nombre, localidad) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.personal = [];
        this.pacientes = [];  // Inicializamos el array de pacientes
        this.responsable = null; // Inicializamos responsable
    }

    agregarPersonal = (personal) => {
        this.personal.push(personal);  // Agrega el objeto personal
    }

    getNombre() {
        return this.nombre;
    }

    getLocalidad() {
        return this.localidad;
    }

    getResponsable() {
        return this.responsable;  // Devuelve el responsable
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

    agregarPaciente = (paciente) => {
        this.pacientes.push(paciente);  // Agrega el objeto paciente
    }

    toString() {
        let informacion = "El nombre del hospital es: " + this.getNombre() +
            ", de la localidad: " + this.getLocalidad();

        if (this.responsable) {
            informacion += ", el responsable es: " + this.getResponsable();
        }

        informacion += "<br>Personal:<br>";

        this.personal.forEach((element) => {
            informacion += element.toString() + "<br>";
        });

        informacion += "<br>Pacientes:<br>";
        this.pacientes.forEach((element) => {
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

    getEspecialidad() {
        return this.getEspecialidad(this.especialidad);
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }

    toString() {
        return `Nombre: ${this.getNombre()}, Especialidad: ${this.getEspecialidad()}`;
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
        return this.personal.getNombre();  // Devuelve el nombre del personal
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setPersonal(personal) {
        this.personal = personal;
    }

    toString() {
        return "Nombre del paciente: " + this.getNombre() + ", con personal: " + this.getPersonal();
    }
}

// Ejemplo de uso
const hospital = new Hospital("Hospital General", "Madrid");
const personal1 = new Personal("Dr. Martínez", 1); // Médico
const personal2 = new Personal("Enfermera López", 2); // Enfermera

hospital.agregarPersonal(personal1);  // Agrega personal1 al hospital
hospital.agregarPersonal(personal2);  // Agrega personal2 al hospital

const paciente1 = new Paciente("Juan Pérez", personal1);
const paciente2 = new Paciente("Ana Gómez", personal2);

hospital.agregarPaciente(paciente1);  // Agrega paciente1 al hospital
hospital.agregarPaciente(paciente2);  // Agrega paciente2 al hospital

// Muestra el hospital y su personal
document.write(hospital.toString());
