
// 1. Agregega una función al prototipo de un objeto


console.log("===============Pregunta 1 ==================");

let persona = {
    name: "Jhony",
    age: 41,

}

persona.Edad = function() {
    console.log(`Tengo ${this.age} años`)
}


persona.Edad();



// 2. Crea un objeto que herede de otro

console.log("===============Pregunta 2 ==================");

let programador = Object.create(persona);
programador.lenguaje = "JavaScript";

console.log(programador.name);
console.log(programador.age);
console.log("Estoy programando en: ", programador.lenguaje);


// 3. Define un método de instancia en un objeto

console.log("===============Pregunta 3 ==================");

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de instancia
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Andres", 40);

persona1.saludar();

// 4. Haz uso de get y set en un objeto

console.log("===============Pregunta 4 ==================");

class Curso {
    constructor(nombre, profesor, duracion) {
        this.nombre = nombre,
        this.profesor = profesor;
        this.duracion = duracion; // horas
    }
    get nombreCurso() {
        return this.nombre;
    }
    set nombreCurso(nombreCurso){
        this.nombre = nombreCurso;
    }
}

let curso = new Curso("", "MoureDev", 3);
curso.nombreCurso = "Django";
console.log(curso.nombreCurso);

// 5. Utiliza la operación assign en un objeto
console.log("===============Pregunta 5 ==================");

let person = {nombre: "Andres", edad: 40};
let perfil = {profesion: "Developer", nivel: "Universitario", ciudad: "Comas, Lima"};

let perfilCompleto = Object.assign(person, perfil);
console.log(perfilCompleto);

// 6. Crea una clase abstracta
console.log("===============Pregunta 6 ==================");

class Vehiculo {
    constructor() {
        if (new.target === Vehiculo) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }

    encender() {
        throw new Error("Este método tiene que ser implementado en la clase hija");
    }

}


// 7. Utiliza polimorfismo en dos clases diferentes
console.log("===============Pregunta 7 ==================");

class Auto extends Vehiculo {
    constructor(marca, modelo) {
        super();
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log(`El auto ${this.marca} ${this.modelo} está encendido`);
    }
}

let miAuto = new Auto('Tesla', 'Model 3');
console.log(miAuto.encender());


class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super();
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        return `La moto ${this.marca} ${this.modelo} está encendida.`;
    }
}

let miMoto = new Moto('Ducati', 'Panigale V2');
console.log(miMoto.encender());