
// 1. Agregega una función al prototipo de un objeto


console.log("===============Pregunta 1 ==================");

let object = {
    name: "Jhony",
    age: 41,

}

object.Edad = function() {
    console.log(`Tengo ${this.age} años`)
}


object.Edad();