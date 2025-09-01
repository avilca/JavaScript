// Programación asíncrona


// Código síncrono

console.log("Inicio");

for (let i = 0; i < 1000000000; i++) {

}

console.log("Fin");

// Event Loop(Bucle de eventos)


// Componente del Event Loop

// 1- Call Stack(Pila de ejecución)

// 2- Web APIs (APIs del navegador) o Node.js: setTimeout, DOM, Fetch, etc.

// - Task Queue(Cola de tareas) y Microtask QueueCola de microtareas)

// Flujo del Event Loop:

// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> Task Queue o Microtask Queue
// 4. Si Call Stack está vacío -> Event Loop mueve tareas del Microtask Queue o Task Queue
// 5. El proceso se repite

// Código asíncrono

// - Callbacks

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");

// - Problema: Callback Hell (Infierno de callbacks)

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback();
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado");
        callback();
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado");
        callback();
    }, 1000)
}


step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados");
        })
    })
});

// - Promesas

console.log("================== Promesas ==================");

const promise = new Promise((resolve, reject) => {
    setInterval(() => {
        const ok = true;
        if (ok) {
            resolve("Operación exitosa");
        } else {
            reject("Sea ha producido un error");
        }
    }, 4000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

// - Encadenamiento de promesas

console.log("================== Encadenamiento de promesas ==================");

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado");
            resolve();
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado");
            resolve();
        }, 1000)
    });    
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado");
            resolve();
        }, 1000)
    });    
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados");
    })

// - Async / Await

console.log("================== Async / Await ==================");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function process() {

    console.log("Inicio del proceso");

    await wait(5000)
    console.log("Proceso despues de 5 segundos");

    await wait(1000)
    console.log("Proceso despues de 1 segundo");

    await wait(2000)
    console.log("Proceso despues de 2 segundos");

    console.log("Fin del proceso");

}

process()