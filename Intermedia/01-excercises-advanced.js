// 1. Crea una función que retorne a otra función


console.log("============PREGUNTA 1 ================")

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Andres")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Footgolito")


// 2. Implementa una función currificada que multiplique 3 números

console.log("============PREGUNTA 2 ================")

function curryMultip(n) {
    return function(b) {
        return function(c) {
                return n * b * c
            }       
        }
    }


const multiABC = curryMultip(2)(3)

console.log(multiABC(4))


// 3. Desarrolla una función recursiva que calcule la potencia de una número elevado a un exponente

console.log("============PREGUNTA 3 ================")

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 5));


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para 
// increment(), decrement() y getValue(), utiliza closure para mantener el estado.



console.log("============PREGUNTA 4 ================")

function createCouter() {
    let contador = 0;

    function increment(numero) {
        contador += numero;
        console.log(`increment: ${numero}`)
    }

    function decrement(numero) {
        contador -= numero;
        console.log(`increment: ${numero}`)
    }

    function getValue() {
        return contador;
    }

    return{ increment, decrement, getValue };

}



const contador = createCouter();

contador.increment(35);
contador.decrement(2);
console.log(`el valor final es: ${contador.getValue()}`);


// 5. Crea una función sumManyTime(multiplier,  ...numbers) que primero
//  sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier


console.log("============ PREGUNTA 6 ============")


function sumManyTime(multiplier, ...numbers) {

    let result = 0

    for (let number of numbers) {
        result += number;
    }
    return result * multiplier;

    

}

console.log(sumManyTime(5, 8))