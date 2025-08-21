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