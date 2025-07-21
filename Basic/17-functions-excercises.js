// 1. Crea una función que reciba dos números y devuelva su suma.

function suma(a = 0, b = 0) {
    console.log(a + b)
}

suma(3, 3)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

myArray = [1, 2, 3, 4, 5, 6, 7];


function mayor(myArray) {
    let max = myArray[0];
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i];
        }
    }
    console.log("El número mayor es:", max);
}

mayor(myArray);


// 3. Crea una función que reciba un string y devuelva el número de vocales que tiene.

function contadorVocales(){

    let cadena = "Footgolito es tipster";
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        let vocal = cadena[i].toLowerCase();
        if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
            contador++;
        }
    }
    console.log("El número de vocales es:", contador);  
}

contadorVocales();

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array en mayúsculas.

function mayusculas(myArray) {
    let nuevoArray = [];
    for (let i = 0; i < myArray.length; i++) {
        nuevoArray.push(myArray[i].toUpperCase());
    }
    console.log("Nuevo array en mayúsculas:", nuevoArray);
} 

mayusculas(["andres", "vilca", "footgolito"]);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false si no lo es.

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}   

console.log("¿El número 5 es primo?", esPrimo(5));