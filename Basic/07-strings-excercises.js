// 1. Concatena dos cadenas de texto

let Nombre = "Andres";
let Apellido = "Vilca";
console.log("===== Respuesta 1 =====");
console.log(Nombre + " " + Apellido); // Concatenación de cadenas

// 2. Muestra la longitud de una cadena de texto
console.log("===== Respuesta 2 =====");
let cadena = "Hola, Mundo!";
console.log(cadena.length); // Longitud de la cadena

// 3. Muestra el primer y último carácter de un string
console.log("===== Respuesta 3 =====");
console.log(cadena[0]); // Primer carácter
console.log(cadena[11]); // Último carácter

// 4. Convierte a mayúsculas y minúsculas una cadena de texto
console.log("===== Respuesta 4 =====");
console.log(cadena.toUpperCase()); // Convertir a mayúsculas
console.log(cadena.toLowerCase()); // Convertir a minúsculas

// 5. Crea una cadena de texto en varias líneas

console.log("===== Respuesta 5=====");

let mensaje = `Hola, este es un mensaje
en varias líneas. 
 Espero que te   guste.`;

console.log(mensaje);

// 6. Interpola el valor de una variable en un string
console.log("===== Respuesta 6 =====");

console.log(` Interpolando: ${mensaje} en un string.`);

// 7. Reemplaza todos los espacios en blanco de una string por guiones 

console.log("===== Respuesta 7 =====");
console.log(mensaje.replace(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra específica
console.log("===== Respuesta 8 =====");
console.log(mensaje.includes("mensaje"));
console.log(mensaje.includes("datos"));

// 9. Comprueba si dos string son iguales
console.log("===== Respuesta 9 =====");

console.log(Nombre === Apellido); // Comparación estricta

// 10. Comprueba si dos string tienen la misma longitud
console.log("===== Respuesta 10 =====");
console.log(Nombre.length === Apellido.length); // Comparación de longitudes