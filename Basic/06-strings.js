// Strings


// Concatenación de cadenas
let myName = "Andres";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud de una cadena
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]); // Primer carácter
console.log(greeting[12]); 

// Métodos comunes
console.log(greeting.toUpperCase()); // Convertir a mayúsculas
console.log(greeting.toLowerCase()); // Convertir a minúsculas
console.log(greeting.indexOf("Andres")); // Buscar índice de una subcadena
console.log(greeting.indexOf("Hola")); // Buscar índice de otra subcadena
console.log(greeting.includes("Hola")); // Verificar si contiene una subcadena
console.log(greeting.includes("Andres")); // Verificar si contiene una subcadena
console.log(greeting.includes("Mundo")); // Verificar si contiene una subcadena
console.log(greeting.slice(0, 10)); // Extraer el valor de una subcadena
console.log(greeting.replace("Andres", "footgolito")); // Reemplazar el valor de una subcadena


// Template literals(plantillas literales)

let message = `Hola, este
es mi
curso de
JavasScript`;

console.log(message)

let email = "footgolito@gmail.com";

console.log(`Hola, ${myName}! Tu email es ${email}.`); // Interpolación de variables