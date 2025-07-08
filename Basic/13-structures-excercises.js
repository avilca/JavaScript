// 1. Crear un array que almacene cinco animales

miArray = ["Perro", "Gato", "Loro", "Tortuga", "Conejo"];

console.log(miArray);
console.log("======================");


// 2. Añade dos más. Uno al principio y otro al final del array
miArray.unshift("Elefante"); // Añade al principio
miArray.push("Delfín"); // Añade al final

console.log(miArray);
console.log("======================");

// 3. Elimina el que se encuentre en la posición 3
miArray.splice(3, 1); // Elimina el elemento en la posición 3
console.log(miArray);
console.log("======================");

// 4.- Crear un set que almacene cinco libros
 miSet = new Set(["libro 1", "libro 2","libro 3", "libro 4","libro 5"])

 console.log(miSet);
 console.log("======================");

 // 5.- Añade dos más. Uno de ellos repetido
 miSet.add("libro 6"); // Añade un nuevo libro
 miSet.add("libro 3"); // Añade un libro repetido

 console.log(miSet);
console.log("======================");

 // 6.- Elimina un libro a tu elección
 miSet.delete("libro 2"); // Elimina "libro 2"
 console.log(miSet);
 console.log("======================");

 // 7.- Crea un mapa que asocie el número del mes a su nombre

 let miMapa = new Map();

 miMapa = new Map([
        ["1", "Enero"],
        ["2", "Febrero"],
        ["3", "Marzo"],     
        ["4", "Abril"],
        ["5", "Mayo"],
        ["6", "Junio"],
        ["7", "Julio"],
        ["8", "Agosto"],
        ["9", "Septiembre"],
        ["10", "Octubre"],
        ["11", "Noviembre"],
        ["12", "Diciembre"]
 ])

 console.log(miMapa);

 console.log("======================");

 // 8.- Comprueba si el mes número 5 existe en el map e imprime su nombre
 console.log(miMapa.has("5")); // Comprueba si el mes 5 existe

console.log("======================");

// 9.- Añade al mapa una clave con un array como que almacene los meses de verano

miMapa.set("verano", ["Enero", "Febrero", "Marzo"]);
console.log(miMapa); // Imprime los meses de verano

console.log("======================");

// 10.- Crea un Array, trasnfórmalo a un Set y almacéna en un Map

myArray = ["Elemento 1", "Elemento 2", "Elemento 3"]; // Elemanos del Array


mySet = new Set(myArray); // Convierte el Array a un Set

let myMap = new Map(); // Crea un nuevo Map

myMap.set(mySet);

console.log(myMap);

