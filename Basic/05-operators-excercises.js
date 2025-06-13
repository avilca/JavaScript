// 1. Crea una variable cada operación aritmética

let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);    


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

let myAsignacion = 10 ;

myAsignacion += 3; // Suma
console.log("Suma", myAsignacion);
myAsignacion -= 2; // Resta
console.log("Resta", myAsignacion);
myAsignacion *= 2; // Multiplicación
console.log("Multiplicación", myAsignacion);
myAsignacion /= 2; // División
console.log("División", myAsignacion);
myAsignacion %= 3; // Módulo
console.log("Modulo", myAsignacion);
myAsignacion **= 2; // Exponente
console.log("Exponente", myAsignacion);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a < b);
console.log(a <= b);
console.log(a != b);
console.log(a == 5);
console.log(a == "5");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b);
console.log(a >= b);
console.log(a !== 5);
console.log(a == "");
console.log(a == b);


// 5. Utiliza el operador lógico AND(&&)

console.log(a < b && a > b);

// 6. Utiliza el operador lógico OR(||)
console.log(a < b || a > b);


// 7. Combina ambos operadores lógicos

console.log(a < b && b > a || a == b);

// 8. Añade alguna negación
console.log(!(a < b && b > a || a == b));

// 9. Utiliza el operador ternario

const esVerano = false;

esVerano ? console.log("Es un día soleado") : console.log("No es un día soleado");


// 10. Combina operadores aritméticos de comparación y lógicos


console.log((a + b > 10) && (a < b || a == 5));