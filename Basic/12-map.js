// Map 

// Declaración de un mapa

let myMap = new Map();

console.log(myMap);

// Inicialiazación de un mapa

myMap = new Map([
    ["name", "Andres"],
    ["email", "avilca85@gmail.com"],
    ["age", 38],
])

console.log(myMap);

// Métodos


// set.- Sirve para añadir un nuevo o actualizar elemento al mapa

myMap.set("alias","footgolito");
myMap.set("name", "Andres Vilca");

console.log(myMap);

// get.- Sirve para obtener un elemento del mapa

myMap.get("age");
console.log(myMap.get("age"));

// has.- Sirve para saber si existe un elemento en el mapa

console.log(myMap.has("name")); 
console.log(myMap.has("apellido"));

// delete.- Sirve para eliminar un elemento del mapa
myMap.delete("email");
console.log(myMap);


console.log(myMap.keys());

// clear.- Sirve para eliminar todos los elementos del mapa
//myMap.clear();
//console.log(myMap);

// Propiedades

// keys.- Devuelve un iterador con las claves del mapa

console.log(myMap.keys());

// values.- Devuelve un iterador con los valores del mapa

console.log(myMap.keys());

// entries.- Devuelve un iterador con las entradas del mapa (clave, valor)
console.log(myMap.entries());

// size.- Devuelve el número de elementos(tamaño) del mapa
console.log(myMap.size);


