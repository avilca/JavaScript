// Array

// Declaración

let myArray = []
let myArray2 = new Array() //sirve para crear un array

console.log(myArray);
console.log(myArray2);

// Inicialización

myArray = [3]
myArray2 = new Array(3) 


console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4]
myArray2 = new Array(1,2,3,4) 


console.log(myArray);
console.log(myArray2);



myArray = ["Andres", "Vilca", "Footgolito", 39, true]
myArray2 = new Array("Andres", "Vilca", "Footgolito", 39, true) 

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3)
myArray2[0] = "Andres"
myArray2[1] = "Vilca"
myArray2[2] = "Footgolito"

console.log(myArray2);

myArray = []
myArray[2] = "Andres"
myArray[1] = "Vilca"

console.log(myArray);


// Metodos comunes

myArray = []

// Metodo push: agrega un elemento al final del array

myArray.push("Andres");
myArray.push("Vilca");
myArray.push("Footgolito");
myArray.push(39);

console.log(myArray);

// Metodo pop: elimina el ultimo elemento del array

console.log(myArray.pop()); // Elimina el ultimo elemento y lo retorna
myArray.pop();

console.log(myArray);


// Metodo shift: elimina el primer elemento del array


console.log(myArray.shift()); // Elimina el primer elemento y lo retorna
console.log(myArray)

// Metodo unshift: agrega un elemento al inicio del array
console.log(myArray.unshift("Andres")); // Agrega un elemento al inicio del array y retorna la nueva longitud
myArray.unshift("Vilca", "Footgolito");

console.log(myArray);


// Length: devuelve la longitud del array
console.log(myArray.length);

// Clear: elimina todos los elementos del array

myArray = [];
myArray.length = 0; // Otra forma alternitiva de limpiar un array
console.log(myArray);

// Slice: devuelve una copia del array con los elementos seleccionados

myArray = ["Andres", "Vilca", "Footgolito", 39, true];

let myNewArray = myArray.slice(1, 3);  

console.log(myArray)
console.log(myNewArray)

// Splice: elimina o agrega elementos en una posición específica del array

myArray.splice(1, 3); // Elimina 2 elementos a partir de la posición 1
console.log(myArray);

myArray = ["Andres", "Vilca", "Footgolito", 39, true];


myArray.splice(1, 2, "Nuevo elemento");
console.log(myArray);