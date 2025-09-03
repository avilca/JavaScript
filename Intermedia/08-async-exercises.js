// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

console.log("=================== Pregunta 1 ==================");

//function saludar(name, callback) {
//    setTimeout(() => {
//    let nombre = "Hola" + name;
//    callback(nombre);
//    }, 2000);
//}

//function mostrarSaludo(mensaje) {
//    console.log(mensaje);
//}

//saludar(" Juan", mostrarSaludo);


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.


console.log("=================== Pregunta 2 ==================");

//function task1(callback) {   
//    setTimeout(() => {
//        console.log("Tarea 1 completada");
//        callback();
//    }, 1000)
//}

//function task2(callback) {
//    setTimeout(() => {
//        console.log("Tarea 2 completada");
//        callback();
//    }, 1000)
//}

//function task3(callback) {
//    setTimeout(() => {
//        console.log("Tarea 3 completada");
//        callback();
//    }, 1000)
//}


//task1(() => {
//    task2(() => {
//        task3(() => {
//            console.log("Todos las tareas con callback finished");
//        })
//    })
//});

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

console.log("=================== Pregunta 3 ==================");

//function verificarNumeroPromise(numero) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if (numero % 2 === 0) {
//                resolve("Número par");
//            } else {
//                reject("Número impar");
//            }
//        }, 2000);
//    });
//}

//verificarNumeroPromise(5)
//    .then(result => {
//        console.log(result);
//    })
//    .catch(error => {
//        console.log(error);
//    })


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

console.log("=================== Pregunta 4 ==================");

//function firstTask() {
//    return new Promise(resolve => {
//        setTimeout(() => {
//            console.log("Primera tarea completada");
//            resolve();
//        }, 1000)
//    })
//}

//function secondTask() {
//    return new Promise(resolve => {
//        setTimeout(() => {
//            console.log("Segunda tarea completada");
//            resolve();
//        }, 2000)
//    })
//}

//function thirdTask() {
//    return new Promise(resolve => {
//        setTimeout(() => {
//            console.log("Tercera tarea completada");
//            resolve();
//        }, 1500)
//    })
//}

//firstTask()
//    .then(secondTask)
//    .then(thirdTask)
//    .then(() => {
//        console.log("Todos las tareas completadas");
//    })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

console.log("=================== Pregunta 5 ==================");


//async function executeTasks(s) {

//    return new Promise(resolve => setTimeout(resolve, s))

//}

//async function process() {

//    console.log("Inicio del proceso de tareas");

//    await executeTasks(5000)
//    console.log("Proceso de tarea 1 despues 5 segundos");

//    await executeTasks(7000)
//    console.log("Proceso de tarea 2 despues 7 segundos");

//    await executeTasks(9000)
//    console.log("Proceso de tarea 3 despues 9 segundos");

//    console.log("Fin del proceso de tareas");

//}

//process();


// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.



console.log("=================== Pregunta 6 ==================");

//function getUser(id) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            if (id < 5) {
//                resolve({ id, nombre: "Usuario " + id });
//            } else {
//                reject("Usuario no encontrado");
//            }
//        }, 10000);
//    });
//}

//async function mostrarUsuario(id) {
//    try {
//        const usuario = await getUser(id);
//        console.log(usuario);
//    } catch (err) {
//        console.log(err);
//    }
//}

//mostrarUsuario(4); 


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:

console.log("=================== Pregunta 7 ==================");

//console.log("Inicio")
//setTimeout(() => console.log("setTimeout ejecutado"), 0);
//Promise.resolve().then(() => console.log("Promesa resuelta"))
//console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
// A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.



function one() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Funcion uno");
            resolve();
        }, 10000)
    })
}

function two() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Funcion dos");
            resolve();
        }, 11000)
    })
}

function three() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Funcion tres");
            resolve();
        }, 12000)
    })
}


Promise.all([one, two, three])
            .then(() => {
                console.log("Todos las tareas completadas");
            })



