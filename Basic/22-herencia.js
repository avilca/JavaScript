// Herencia

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("El animal emite un sonido genérico.");
    }

}


class Dog extends Animal{

    sound() {
        console.log("Guau!"); // Llama al método sound de la clase padre
    }

    corre() {
        console.log("El perro corre.");
    }
}

class Pez extends Animal {

    constructor(name, size) {
        super(name) // Llama al constructor de la clase padre
        this.size = size;
    }

    swim() {
        console.log("El pez nada.");
    }
}



let myDog = new Dog("Thor")

myDog.corre()
myDog.sound()

let myPez = new Pez("Nemo", 10)
myPez.swim()
myPez.sound()


// Métodos Estáticos

class MathOperations {

    static sum(a, b) {
        return a + b;
    }
}

//let myClass = new MathOperations()
//console.log(myClass.sum(5, 10)) // Esto no funciona porque sum es un método estático

console.log(MathOperations.sum(5, 10))