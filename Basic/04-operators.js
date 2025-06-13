// Operadores

// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);


myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de comparación

console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == b); // Igualdad
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); 
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6"); 
console.log(a != 6); // Desigualdad
console.log(a !== "6"); // Desigualdad por identidad (por tipo y valor)
console.log(0 == false); 
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == ''); // Compara el valor 0 con una cadena vacía
console.log(0 == "Hola");
console.log(a === ""); 
console.log(undefined == null);
console.log(undefined === null);



// Operadores Truthy values son:
    //  Todos los números positivos son verdaderos, excepto el cero

    // Todas las cadenas de texto no vacías son verdaderas, excepto la cadena vacía

    // El bolean true es verdadero
    
    // Falsy value(valores falsos) son:

        // 0
        // 0n
        // null
        // undefined
        // NaN
        // El boolean false
        // Cadenas de texto vacías ("")


// Operadores lógicos

// AND (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20 && 30 > 40);


// OR (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 > 10 || 15 < 20);

console.log(5 > 10 && 15 > 20 || 30 > 40);
console.log(5 > 10 && 15 > 20 || 30 < 40);

// NOT (!)
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));
console.log(!(true));
console.log(!(false));

// Operadores ternarios

const isRaining = false;

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo"); 


