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


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.


console.log("=================== Pregunta 2 ==================");

function task1(callback) {
    
    setTimeout(() => {
        console.log("Tarea 1 completada");
        callback();
    }, 1000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada");
        callback();
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Tarea 3 completada");
        callback();
    }, 1000)
}


task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todos las tareas completadas");
        })
    })
});