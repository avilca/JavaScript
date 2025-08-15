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

    let result = 0;

    for (let number of numbers) {
        result += number;  

    }
       
    return result * multiplier;    

}



console.log(sumManyTime(2,5));




// 6. Crea un Callback que se invoque con el resultado de la suma de todo los números que se le pasan a una función

console.log("============CALLBACKS======")

function sumar(...numbers) {  // función que suma los números

    let result = 0;

    for (let number of numbers) {
        result += number;  

    }
       
    return result;    

}


function sumarNumeros(data, callback) { // usando el callback para invocar  la función sumar
    const result = sumar(...data)
    callback(result);
}



function processResult(result) {  // procesando el resultado
    console.log(result)
}

sumarNumeros([1, 2, 8, 10, 50], processResult);


// 7. Desarrolla una función parcial

console.log("============PREGUNTA 7===========")

function sumaParcial (a) {
    return function (b){
        return a + b;
    }
}

const sumWith = sumaParcial(2)

console.log(sumWith(3))

// 8. Implementa un ejemplo que haga uso de Spread

console.log("============PREGUNTA 8 Spread=============")



const numeros = [1, 2, 3];

function sumarconSpread(a, b, c) {
    return a + b + c; 
}

console.log(sumarconSpread(...numeros))

// 9. Implementa un retorno implícito

console.log("============PREGUNTA 9 Retorno Implicito=============")

const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 11));


// 10. Haz uso del this léxico

const handler = {
    name: "Tanyiro",

   greeting: function() {
        console.log(`Hola, ${this.name}`)
    },

}

handler.greeting()

