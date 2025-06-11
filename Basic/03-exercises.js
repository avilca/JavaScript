// 1. Escribir un comentario
    // Este es mi cometario en una linea

// 2. Escribe un comentario eb varias lineas
    /* Este es un 
    comentario en
    varias lineas */
    
    
// 3. Declarar variables con valores asociados a todos los datos de tipo primitivos

let MiNombre = "Luis"
let miAlias = 'Luasoft'
let miEmail = `luasoft@gmail.com`

let miEdad = 30 // Entero
let miAltura = 1.80 // Decimal  

let soyEstudiante = true
let soyProfesor = false

let valorIndefinido // No tiene un valor asignado


let valorNulo = null // No tiene un valor asignado, pero se espera que tenga uno

let miSimbolo = Symbol("misimbolo")

let miBigInt = BigInt(1234567890123456789012345678901234567890)
let miBigInt2 = 1234567890123456789012345678901234567890n


// 4. Imprime por consola el valor de todas las variables

console.log(MiNombre)
console.log(miEdad)
console.log(miAlias)
console.log(miAltura)           
console.log(soyEstudiante)
console.log(soyProfesor)
console.log(valorIndefinido)
console.log(valorNulo)
console.log(miSimbolo)
console.log(miBigInt)
console.log(miBigInt2)



// 5. Imprime por consola el tipo de datos las variable

console.log(typeof MiNombre)
console.log(typeof miEdad)
console.log(typeof miAlias)
console.log(typeof miAltura)
console.log(typeof soyEstudiante)
console.log(typeof soyProfesor)
console.log(typeof valorIndefinido)
console.log(typeof valorNulo)
console.log(typeof miSimbolo)
console.log(typeof miBigInt)
console.log(typeof miBigInt2)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

MiNombre = "Jhony"    
miAlias = 'Van Helsing'
miEmail = `vanhelsing@gmailcom`

miEdad = 40
miAltura = 1.70

soyEstudiante = false
soyProfesor = true  

valorIndefinido = "Ahora tiene un valor"    

valorNulo = "Ahora tiene un valor"

miSimbolo = Symbol("misimbolo_modificado")
miBigInt = BigInt(9876543210987654321098765432109876543210)
miBigInt2 = 9876543210987654321098765432109876543210n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

MiNombre = 12345 // Cambiado a número
miAlias = true // Cambiado a booleano
miEmail = null // Cambiado a null
miEdad = "Cincuenta" // Cambiado a cadena de texto
miAltura = undefined // Cambiado a undefined
soyEstudiante = 3.14 // Cambiado a número decimal
soyProfesor = { nombre: "Profesor" } // Cambiado a objeto
valorIndefinido = [1, 2, 3] // Cambiado a arreglo
valorNulo = Symbol("nuevo_simbolo") // Cambiado a símbolo
miSimbolo = 42 // Cambiado a número
miBigInt = "Gran número" // Cambiado a cadena de texto
miBigInt2 = false // Cambiado a booleano


// 8. Declara constantes con valores asociados a todos los datos de tipos de datos primitivos

const Nombre = "Carlos"
const Alias = 'CarlosSoft'
const miConstanteEmail = `carlosoft2gmail.com`
    
const Edad = 25 // Entero
const Altura = 1.75 // Decimal
const SoyEstudiante = true
const SoyProfesor = false       

const ValorIndefinido = undefined // No tiene un valor asignado
const ValorNulo = null // No tiene un valor asignado, pero se espera que tenga uno
const MiSimbolo = Symbol("micodigo")
const MiBigInt = BigInt(1234567890123456789012345678901234567890)
const MiBigInt2 = 1234567890123456789012345678901234567890n

// 9. A continuación, modifica los valores de constantes

// No se puede modificar el valor de una constante, por lo tanto, este paso no es posible.

// 10. Comenta las líneas de código que no se puedan ejecutar

