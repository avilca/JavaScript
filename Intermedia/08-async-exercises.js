// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

console.log("=================== Pregunta 1 ==================");

function saludar(name, callback) {
    setTimeout(() => {
    let nombre = "Hola" + name;
    callback(nombre);
    }, 2000);
}

function mostrarSaludo(mensaje) {
    console.log(mensaje);
}

saludar(" Juan", mostrarSaludo);