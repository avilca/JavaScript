// 1. Crea una función que retorne a otra función


const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Andres")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Footgolito")


// 2. Implementa una función currificada que multiplique 3 números

function curryMultip(a) {
    return function(b) {
        return function(c) {
                return a * b * c
            }       
        }
    }


const multiABC = curryMultip(2)(3)

console.log(multiABC(4))
