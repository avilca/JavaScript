// Loops o bluces

// for

for (let i = 0; i < 5; i++){
    console.log("Hola");
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`);
} 

// while
console.log("====while=====");
let i = 0;

while (i < 5){
    console.log(`Hola ${i}`);
    i++;
}


while(true){
    console.log("Esto es un bucle infinito");
    break; // Para salir del bucle
}


// do while


console.log("======do while ========")

i = 6;

do {
    console.log(`Hola ${i}`)
    i++;

} while(i < 5) // Se ejecuta al menos una vez

// for of

myArray = [1, 2, 3, 4, 5];

MySet = new Set(["Andres", "Vilca", "footgolito", 39, true, "footgolito"]);

myMap = new Map([
    ["name", "Andres"],
    ["emial", "footgolito@gmail.com"],
    ["age", 39]
]);


myString = "Hola, Javascript";

for (let valor of myArray) {
    console.log(valor);
}

for (let valor of MySet) {
    console.log(valor);
}

for (let valor of myMap) {
    console.log(valor);
}

for (let valor of myString) {
    console.log(valor);
}


// Buenas practicas

// break y continue

for (let i = 0; i < 10; i++){
    if (i == 5) {
        continue;
    } else if (i == 6) {
        break;
    }
    console.log(`Hola ${i}`);
}
