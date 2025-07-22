// Objects

// Sintaxis

let person = {
    name: "Andres",
    age: 37,
    alias: "footgolito",
    email:"footgolito@gmail.com"
}

// Acceso a propiedades

// Acceso por punto
console.log(person.name);

// Acceso por corchetes
console.log(person["age"]);

// Modificación de propiedades
person.name = "Luis";
console.log(person.name);

person.age = "38";
console.log(person.age);


// Eliminar propiedades
delete person.age;
console.log(person);

// Añadir nuevas propiedades
person.email = "footgolito@gmail.com";

console.log(person);

person["age"] = 38;
console.log(person);

// Métodos (funciones)

let person2 = {
    name: "Andres",
    age: 37,
    alias: "footgolito",
    walk: function() {
        console.log("La persona camina");
    }
}

person2.walk();

// Anidación de objetos

let person3 = {
    name: "Andres",
    age: 37,
    alias: "footgolito",
    walk: function() {
        console.log("La persona camina");
    },
    job: {
        name: "Developer",
        exp: 15,
        work: function() {
            console.log("La persona trabaja");
        }
    }
}

console.log(person3);

console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);

person3.job.work();


// Igualdad de objetos
let person4 = { 
    name: "Andres",
    alias: "footgolito",
    email:"footgolito@gmail.com",
    age: 37
    
}

console.log(person);
console.log(person4);

console.log(person == person4); 
console.log(person === person4); 

console.log(person.name == person4.name);


// Iteración de objetos

for (let key in person) {
    console.log(key + ": " + person4[key]);
}


// Funciones como objetos
function Person(name, age) {
    this.name = name
    this.age = age
}

let person5 = new Person("Luis", 37);
console.log(person5);

console.log(typeof person5);
console.log(typeof person4);