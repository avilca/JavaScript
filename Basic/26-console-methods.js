// Console

// log

console.log("Hola, JavaScript!");

// error

console.error("Este es un mensaje de error.");
console.error("Error al conectarse a la base de datos: " , new Error("Conexión fallida"));

// warm

console.warn("Este es un mensaje de advertencia.");

// info

console.info("Este es un mensaje informativo.");

// table

let data = [
    ["Andres", 40],
    ["Jhony", 41],
]

console.table(data);

data = [
    {name: "Andres", age: 40},
    {name: "Jhony", age: 41},
]


console.table(data);

// group

console.group("Usuario:");
console.log("Nombre: Jhony");
console.log("edad: 41");
console.log("Apodo: Tanyiro");
console.groupEnd();

console.log("Es un caza demonios")


// time

console.time("Tiempo de ejecución 1");


for (let i = 0; i < 10000; i++) {

}    

console.time("Tiempo de ejecución 2");

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución");

for (let i = 0; i < 10000; i++) {

}


console.timeEnd("Tiempo de ejecución 2");



// assert

let age = 17;

console.assert(age >= 18, "El usuario debe ser mayor de edad.");

// count

console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");

// trace

function funcA() {
    funcB()
}

function funB() {
    console.trace("Seguimiento de la ejecución");
}


funcA();



// clear

console.clear();
