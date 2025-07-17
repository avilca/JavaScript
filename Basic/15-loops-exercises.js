// 1. Crea un bucle que imprima los números del 1 al 20.

console.log("============Pregunta Nro 1===========")

for (let i = 1; i <=20; i++) {
    console.log(i);
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestra el resultado.

console.log("============Pregunta Nro 2===========")


let suma = 0;

for (let n = 1; n <= 100; n++) {
   
    suma += n;

}

console.log("La suma de los números del 1 al 100 es:", suma);


console.log("==========Pregunta Nro 3 ============");

// 3. Crear un bucle que imprima todo los números pares entre 1 y 50

for (let n = 1; n <=50 ;n++) {

    if (n % 2 == 0){
        console.log(n);
    }   

}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola


console.log("==========Pregunta Nro 4 ============");

myName = "Andres Vilca" ;

for (let valor of myName ) {
    console.log(valor)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log("==========Pregunta Nro 5 ============");

cadena = "Footgolito da pronosticos de futbol";

let contadorVocales = 0;

for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i].toLowerCase();
    if(
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u"
    ) {
        contadorVocales++;
    }
}

console.log(`La cantidad de vocales en "${cadena}" es: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto


console.log("==========Pregunta Nro 6 ============");


let total = 1;

miArray = [2, 4, 7, 9];



for (let num = 0; num < miArray.length; num++) {
    
    if (miArray[num] != 0){
        total = miArray[num] * total;
    }
     
}

console.log("Números del Array", miArray);  
console.log("la mutliplicación total del array es: ", total);

// 7. Escribe un bucle que imprima a tabla de multiplicar del 5

console.log("==========Pregunta Nro 7 ============");


console.log("Tabla de Multiplicar del número 5")

let num = 5;

for (let i = 1; i <=12; i++) {
    multi = num * i
    console.log(num + "x" + i + "=" + multi + " ");
}


// 8. Usa un bucle para invertir una cadena de texto

console.log("==========Pregunta Nro 8 ============");

cadena2 = "Footgolito da pronosticos de futbol";
invertida = "";

for (let c = cadena2.length-1; c>=0; c--) {
    invertida += cadena2[c];
}

console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log("==========Pregunta Nro 9 ============");



let fib = [1,2];

for (let i = 2; i <= 10; i++) {

    fib[i] = fib[i - 1] + fib[i - 2];
}
  
console.log(fib);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

