// Funciones avanzadas


// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Andres")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Footgolito")

function returnGreeting(name) {
    return greet
}

processGreeting(greet, "Footgolito")

const greet2 = returnGreeting();
greet2("Jhony")


// Arrow functions avanzadas


// - Retorno implícito
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// - this léxico
const handler = {
    name: "Jesús",

    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();


// IIFE ( Expresión de Función Invocada Inmediatamente)

// - IIFE Clásico
(function() {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

