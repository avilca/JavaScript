
// 1. Agregega una función al prototipo de un objeto


console.log("===============Pregunta 1 ==================");

let persona = {
    name: "Jhony",
    age: 41,

}

persona.Edad = function() {
    console.log(`Tengo ${this.age} años`)
}


persona.Edad();



// 2. Crea un objeto que herede de otro

console.log("===============Pregunta 2 ==================");

let programador = Object.create(persona);
programador.lenguaje = "JavaScript";

console.log(programador.name);
console.log(programador.age);
console.log("Estoy programando en: ", programador.lenguaje);
