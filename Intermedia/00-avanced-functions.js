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

// 10 - this léxico
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


// Parámetros Rest (...)

console.log("=================REST=============")

function sumar(...numbers) {

    let result = 0

    for (let number of numbers) {
        result += number
    }
    return result;
}

console.log(sumar(1, 2, 5))
console.log(sumar(10, 15))
console.log("===================================")

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c 
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // con Spread

// Closures (Clausuras)

function createCouter() {
    let counter = 0

    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}


const counter = createCouter()
counter()
counter()
counter()
counter()
counter()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n -1)
}

console.log(factorial(3))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sumar(a, b, c)
    }
}

const sumWith = partialSum(4)

console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sumar(a, b, c, d)
            }    
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)

console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

console.log("==================")

//  Callbacks
console.log("============CALLBACKS======")
function processData(data, callback) {
    const result = sumar(...data)
    callback(result)
}


function processResult(result) {
    console.log(result)
}

//function processResult2(result) {
//    console.log(`Mi reusltado es:  ${result}`)
//}



processData([1, 2, 8,10], processResult)
//processData([1, 2, 3], processResult2)
//processData([1, 2, 3], (result) => {
//    console.log(`Mi resultado en la arrow function es:  ${result}`)
//})
