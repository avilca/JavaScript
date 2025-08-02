// 1. Crea una clase que reciba dos propiedades

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

let persona1 = new Persona("Jesús", 41);

console.log(persona1);


// 2. Añade un método a la clase que utilice las propiedades

class PersonaconMetodo {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    camina() {
        console.log("La persona camina.")
    }

}



// 3. Muestra los valores de las propiedades e invoca a la función


let persona4 = new PersonaconMetodo("Andres", 37, "Footgolito")
persona4.camina()


// 4. Añade un método estático a la primera clase


class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    static suma(a, b) {
        return a + b;
    }
}




// 5. Haz uso del método estático

console.log(Persona2.suma(5, 10));

// 6. Crea una clase que haga uso de herencia

class Animal {
    constructor(name) {
        this.name = name;
    }
    sonido() {
        console.log("El animal emite un sonido genérico.");
    }

}

class Gato extends Animal {
    sonido() {
        console.log("gato dice Miau!"); // Llama al método sonido de la clase padre
    }
}

let myGato = new Gato("Tomasa")

myGato.sonido(); // Llama al método sonido de la clase Gato

// 7. Crea una clase que haga uso de getters y setters


class PesonaBancaria {

    #nombre;
    #edad;
    #dni;
    #nrocta;

    constructor(nombre, edad, dni, nrocta) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#nrocta = nrocta;
    }


    get nombre() {
        return this.#nombre // Es solo de lectura
    }

    set nrocta(newNrocta){
        this.#nrocta = newNrocta // Es de escritura
    }
}



// 8. Modifica la clase con getters y setters para que use propiedades privadas
//    y modificarlas desde fuera de la clase        

let persona5 = new PesonaBancaria("Andres", 40, "43097189", "333333333")

console.log(persona5.nombre); // Accede al getter
persona5.nrocta = "444444444"; // Modifica el nrocta usando el setter
console.log(persona5); // Muestra el objeto actualizado