// Estructuras avanazada

// Arrays avanzados

// Métodos funcionales


// forEach


let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))


// map

let doubled = numbers.map(element => element * 2)
console.log(doubled)


// filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((result, current) => result + current, 0);
console.log(sum);

// Manipulación

// -flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)

let flatArray = nestedArray.flat(1);
console.log(flatArray);

flatArray = nestedArray.flat(2);
console.log(flatArray);

flatArray = nestedArray.flat(3);
console.log(flatArray);


// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrases => phrases.split(" "))
console.log(words);


// Ordenación


let unsorted = [3, 4, 1, 6, 10];
//let unsorted = ["b", "a","d", "c"];
let sorted = unsorted.sort();
console.log(sorted);

// reverse

sorted.reverse()
console.log(sorted)


// Búsqueda

console.log(sorted.includes(4))
console.log(sorted.includes(5))


// - find

//sorted = [3, 7, 11]

let firstEven = sorted.find(element => element % 2 === 0);
console.log(firstEven);

// finIndex


//sorted = [3, 7, 11];
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex);


// Sets avanzados

// - Operaciones

// Eliminación de duplicados

const numbersArrays = [1, 2, 2, 3, 4, 5, 6, 6]
const numbersSet = [...new Set(numbersArrays)]
console.log(numbersSet)


// Unión

const setA = new Set([1, 2 ,3]);
const setB = new Set([2, 3, 4 ,5]);

const union = new Set([...setA, ...setB]);
console.log(union)


// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection);

// Diferencia

const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(diferencia)

// Conversión

console.log([...setA]);

// -Iteración

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37],
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Coversión

// Mapa a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Mapa a diccionario

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objecto a mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)

