// Excepción


// Produce un excepcion

// let myObject 

// console.log(myObject.email);


// Captura de errores

// try-catch

try {
    // Código que intenta ejecutarse
    console.log(myObject.email);
    console.log("Finaliza la ejecución sin errores");
} catch {
    // Código que se ejecuta si hay un error
    console.log("Se ha producido un error");
}


// Captura del error

try {
    // Código que intenta ejecutarse
    console.log(myObject.email);

} catch (error) {
    // Código que se ejecuta si hay un error
    console.log("Se ha producido un error", error.message);
}


// finally

try {
    // Código que intenta ejecutarse
    console.log(myObject.email);

} catch (error) {
    // Código que se ejecuta si hay un error
    console.log("Se ha producido un error", error.message);
} finally {
    console.log("Este código se ejecuta siempre")
}

// No está soportado
//try {
    // Código que intenta ejecutarse
//    console.log(myObject.email);

//} finally {
//    console.log("Este código se ejecuta siempre")
//}



// Lanzamiento de errores

// throw

//throw new Error("Se ha producido un error");

function sumaIntegers(a, b) {

    if (typeof a!== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números");
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros");
    }
    
    if (a == 0 || b == 0) {
        throw new SumaZeroIntegerError("Se está intentando sumar cero.", a, b);        
    }
        return a + b;
    
}

try {
    console.log(sumaIntegers(5, 10));
    //console.log(sumaIntegers(5.5, 10));
    console.log(sumaIntegers("5", 10));
    //console.log(sumaIntegers(5, "10"));
    //console.log(sumaIntegers("5", "10"));
} catch (error) {
    console.log("Se ha producido un error.", error.message);
}


// Capturar varios tipos de errores

try {
    //console.log(sumaIntegers(5, 10));
    console.log(sumaIntegers("5", 10));
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo.", error.message);
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message);
    }
}


// Crear excepciones personalizadas

class SumaZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a;
        this.b = b;

    }

    printNumbers() {
        console.log(this.a, " + ", this.b);
    }

}

try {
    console.log(sumaIntegers(0, 10));
} catch (error) {
   console.log("Se ha producido un error personalizado:", error.message);
   error.printNumbers();
}




