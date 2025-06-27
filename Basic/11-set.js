// Set


// Declaración de un Set

let mySet = new Set();


console.log(mySet);

// Inicialización de un Set con valores únicos

mySet = new Set(["Andres", "Vilca", "Footgolito", 39, true]);

console.log(mySet);


// Metodos comunes de Set

// Método add: agrega un elemento al Set
mySet.add("footgolito33");

console.log(mySet);

// Método delete: elimina un elemento del Set
mySet.delete("footgolito33");


console.log(mySet.delete("Andres"));
console.log(mySet.delete(4)); // Elimina un elemento que no existe, devuelve false  

console.log(mySet);

// Método has: verifica si un elemento está en el Set

console.log(mySet.has("Vilca")); // true
console.log(mySet.has("Andres")); // false

// Método size: devuelve el número de elementos en el Set
console.log(mySet.size); 

// Convertir un Set a un Array
let myArray = Array.from(mySet);
console.log(myArray);


// Convertir un Array a un Set
mySet = new Set(myArray);
console.log(mySet);

// Los Sets no permiten duplicados

mySet.add("footglolito");
mySet.add("footglolito");
mySet.add("footglolito");

console.log(mySet); 

// Método has: verifica si un elemento está en el Set
console.log(mySet.has("footgLolito")); 