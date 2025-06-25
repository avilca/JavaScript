// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "footgolito";

if (nombre == "footgolito"){
    console.log("Mi nombre es " + nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con los valores establecidos

let usuario = "admin";
let contraseña = "1234";

if (usuario == "admin" && contraseña == "1234") {
    console.log("Usuario y contraseña son correctos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje por consola

let numero = 33;

if (numero > 0){
    console.log("El número es positivo");
} else if (numero <0){
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no(mayor o igual a 18) e indica cuántos años le faltan para votar

let edad = 21;

if (edad >= 18){
    console.log("La persona puede votar");
} else if (edad < 18){
    console.log("La persona no puede votar, le faltan " + (18 - edad) + " años");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let edadPersona = 18;
let tipoPersona = (edadPersona >= 18) ? "adulto" : "menor";
console.log("La persona es " + tipoPersona); 


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2;

if (mes >= 1 && mes <= 3) {
    console.log("Estamos en verano");
} else if (mes >= 4 && mes <= 6) {
    console.log("Estamos en otoño");
} else if (mes >= 7 && mes <= 9) {
    console.log("Estamos en invierno");
} else if(mes >= 10 && mes <= 12) {
    console.log("Estamos en primavera");
} else {
    console.log("Número de mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable "mes" del ejercicio anterior


if (mes == 2) {
    console.log("El mes tiene 28 días");
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("El mes tiene 30 días");
} else {
    console.log("El mes tiene 31 días");
}

// 8. Usa Switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "portugues";

switch (idioma) {
    case "español":
        console.log("¡Hola!");
        break;
    case "inglés":
        console.log("Hello!");
        break;
    case "francés":
        console.log("Bonjour!");        
        break;
    default:
        console.log("Idioma no reconocido");

}

// 9. Usa Switch para hacer de nuevo el ejercicio 6


switch (mes) {
    case 1:
        console.log("Estamos en verano")
        break;
    case 2:
        console.log("Estamos en verano")
        break;
    case 3:
        console.log("Estamos en verano")
        break;
    case 4:
        console.log("Estamos en otoño")
        break;
    case 5:
        console.log("Estamos en otoño")
        break;
    case 6:
        console.log("Estamos en otoño")
        break;
    case 7:
        console.log("Estamos en invierno")
        break;
    case 8:
        console.log("Estamos en invierno")
        break;  
    case 9:
        console.log("Estamos en invierno")
        break;
    case 10:
        console.log("Estamos en primavera")
        break;
    case 11:
        console.log("Estamos en primavera")
        break;
    case 12:
        console.log("Estamos en primavera")
        break;
    default:
        console.log("Número de mes incorrecto");

}


// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 1:
        console.log("El mes tiene 31 días");
        break;
    case 3:
        console.log("El mes tiene 31 días");
        break;
    case 5:
        console.log("El mes tiene 31 días");
        break;
    case 7:
        console.log("El mes tiene 31 días");
        break;
    case 8:
        console.log("El mes tiene 31 días");
        break;
    case 10:
        console.log("El mes tiene 31 días");
        break;
    case 12:
        console.log("El mes tiene 31 días");
        break;
    case 2:
        console.log("El mes tiene 28 días");
        break;
    case 4:
        console.log("El mes tiene 30 días");
        break;
    case 6:
        console.log("El mes tiene 30 días");
        break;
    case 9:
        console.log("El mes tiene 30 días");
        break;
    case 11:
        console.log("El mes tiene 30 días");
        break;
    default:
        console.log("Número de mes incorrecto");
}