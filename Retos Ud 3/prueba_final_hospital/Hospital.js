class Hospital {
    constructor(pacientes, personal, supervisor, localidad) {
        this.pacientes = pacientes;   // Array de objetos Paciente
        this.personal = personal;     // Array de objetos Personal
        this.supervisor = supervisor; // Supervisor del hospital
        this.localidad = localidad;   
    }

    getPacientes() {
        return this.pacientes;
    }

    getPersonal() {
        return this.personal;
    }

    getSupervisor() {
        return this.supervisor;
    }

    getLocalidad() {
        return this.localidad;
    }

    setPacientes(pacientes) {
        this.pacientes = pacientes;
    }

    setPersonal(personal) {
        this.personal = personal;
    }

    setSupervisor(supervisor) {
        this.supervisor = supervisor;
    }

    setLocalidad(localidad) {
        this.localidad = localidad;
    }

    mostrarDatos() {
        document.write(`Hospital en ${this.localidad}, supervisado por ${this.supervisor} <br>`);
        document.write('<br>Pacientes: <br>');
        this.pacientes.forEach(paciente => {
            document.write(paciente.toString()+`<br>`);
        });
        document.write('<br>Personal:<br>');
        this.personal.forEach(personal => {
            document.write(personal.toString()+`<br>`);
        });
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
        return this.especialidad;
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
        return this.personal.getNombre();  
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
const personal1 = new Personal('Dr. Rodrigo', 'Cardiología');
const personal2 = new Personal('Enfermera Sofía', 'Pediatría');

const paciente1 = new Paciente('Juan Pérez', personal1);
const paciente2 = new Paciente('Ana García', personal2);

const hospital = new Hospital([paciente1, paciente2], [personal1, personal2], 'Dr. Carlos López', 'Madrid');

// Mostrar datos del hospital
hospital.mostrarDatos();
