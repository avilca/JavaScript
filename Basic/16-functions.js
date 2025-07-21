// Funciones



// Simple

function myFunc() {
    console.log("Hola, función!");
}

for (let i = 0; i < 5; i++) {
    myFunc();
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`Hola, ${name}`);
}

myFuncWithParams("footgolito");
myFuncWithParams("Andres");

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}`);
}

myFunc2("Jachi");

// Funciones flecha (Arrow Functions)

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`);
}   

myFunc3("Andres Vilca");

// Parametros

function sum(a, b) {
    console.log(a + b); 
}

sum(5, 10);
sum(5)

function defaultSum(a = 0, b = 0) {
    console.log(a + b);
}

// Por defecto

defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum(b = 8);


// Retorno de valores

function multi(a, b) {
   return a * b;
}

let result = multi(5, 10);
console.log(result);


// Funciones anidadas

function extern() {
    console.log("Función externa");
    function intern() {
        console.log("Función interna");
    }
    intern();
}

extern();
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param);
}

applyFunc(myFunc3, "Función de orden superior");


// forEach

myArray = [1, 2, 3, 4];

mySet = new Set(["Andres", "Vilca", "Footgolito", 39, true]);


myMap = new Map([
    ["name", "Andres"],
    ["email", "avilca85@gmail.com"],
    ["age", 38],
])


myArray.forEach(value => console.log(value));
mySet.forEach(value => console.log(value));
myMap.forEach(value => console.log(value));
