// TIPOS DE DATOS PRIMITIVOS


// *Datos Cadenas de texto (String)

    let myName ="Andres"
    let alias = 'Footgolito'
    let email =  `footgolito@gmail.com`



// *Datos Números (number)

    let age = 39  // Entero
    let height = 1.75 // Decimal


// *Datos Booleanos (boolean)
    let isStudent = false
    let isTeacher = true


// *Datos Undefined (No tiene un valor asignado)

    let undefinedValue
    console.log(undefinedValue)


// *Datos Null (No tiene un valor asignado, pero se espera que tenga uno)
    let nullValue = null


// *Datos Simbólicos (Symbol)
    let mySymbol = Symbol("mysymbol")

// *Datos BigInt (Números enteros muy grandes)
    let myBigInt = BigInt(1234567890123456789012345678901234567890)
    let myBigInt2 = 1234567890123456789012345678901234567890n


// Mostramos los tipos de datos    

console.log(typeof myName)
console.log(typeof age)
console.log(typeof alias)  

console.log(typeof age)
console.log(typeof height)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)