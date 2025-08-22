// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

console.log("====== Pregunta 1 Map, Filter, Reduce =========)")

let usuarios = [{nombre: "Jhony", age: 41}, {nombre: "Jesus", age: 40}, {nombre: "Gustavo", age: 39}]

// map:
console.log("======== Map =========");

let nombreUsuarios = usuarios.map(usuario => usuario.nombre);
console.log(nombreUsuarios)

// filter:
console.log("======== Filter =========");

let edades = usuarios.filter(usuario => usuario.age >= 40);
console.log(edades);

// reduce:
console.log("======== Recuce =========");

let sumaedades = usuarios.reduce((resedad, age) => resedad + age.age, 0);
console.log("La suma total de edades es: ", sumaedades);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares


console.log("====== Pregunta 2 Elevar al cubo y filtrar pares =========)");

let numeros = [2, 3, 4, 5];

console.log("Array original: ", numeros);

let numerosCuboPares = numeros.map(num => Math.pow(num, 3)).filter(num => num % 2 === 0);
console.log(numerosCuboPares);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

console.log("====== Pregunta 3 Flat y FlatMap =========)");

// flat:
console.log("======== Flat =========");


let mes = ["Semana 1", ["Semana 2", ["Semana 3","Semana 4"]]];
console.log("Semanas: ", mes);

let mesOdernado = mes.flat(2);
console.log("Semanas ordenadas: ", mesOdernado);

// flatMap:
console.log("======== FlatMap =========");

let arrays = [[2, 4], [6]];
console.log("Array original: ", arrays); 


let flatten = arrays.flatMap(item => item);
console.log(flatten);

// 4. Ordena un array de números de mayor a menor

console.log("====== Pregunta 4 Ordenar de mayor a menor =========)");

let listanumeros = [3, 4, 1, 6, 10];

console.log("Array original: ", listanumeros);


// ordenando
listanumeros.sort(
    function(a,b) {
        return b - a;
    })

console.log("De Mayor a menor: ", listanumeros);
