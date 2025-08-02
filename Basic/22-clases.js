// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.aliss = alias
    }

}


// Sintaxis

let person = new Person("Andres", 40, "footgolito")
let person2 = new Person("Gustvo", 39, "ñato")

console.log(person)
console.log(person2)

console.log(typeof person)


// Clases con valores por defecto

class DefaultPerson {
    constructor(name = "Nombre por defecto", age = 33, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Tanyiro", 41)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3.age)


person3.alias = "Tanyiro el besa moustras"

console.log(person3.alias)


// Funciones en clases

class PersonaconMetodo {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.aliss = alias
    }

    camina() {
        console.log("La persona camina.")
    }

}    

let persona4 = new PersonaconMetodo("Andres", 37, "Footgolito")
persona4.camina()


// Propiedades privadas

class PersonaPrivada {

    #banco

    constructor(name, age, alias, banco) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#banco = banco
    }

    pay() {
        this.#banco
    }

}    

let persona5 = new PersonaPrivada("Andres", 40, "Footgolito", "333333333")


//console.log(persona5.#banco) // Esto no funciona porque #banco es privado
persona5.banco = "new lkjlkjlkjaaa" // Esto tampoco funciona porque #banco es privado

console.log(persona5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #banco

    constructor(name, age, alias, banco) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#banco = banco
    }

    get name() {
        return this.#name // Es solo de lectura
    }

    set banco(newBanco) {
        this.#banco = newBanco // Es de escritura
    }


 
}

persona6 = new GetSetPerson("Jesús", 41, "Pahino", "123456789")

console.log(persona6)
console.log(persona6.name)

persona6.banco = "new 123456789"

console.log(persona6.banco)
