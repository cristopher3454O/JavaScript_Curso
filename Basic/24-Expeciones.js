// Excepición

// Producto una excepción

let myObject
// console.log(myObject.email)

// Captura de errores

// try-catch

try{
    //Codigo que se intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
        console.log("Se ha producido un error")
}

// Captura del error

try {
        console.log(myObject.email)
} catch (error){
        console.log("Se ha producido un error: " , error.message)
}

// Finally

try {
        console.log(myObject.email)
} catch (error){
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este codigo se ejecutara siempre !!")
}


// Lanzamientos de errores
// throw
// throw new Error("Se ha producido un error")


function sumIntegers(a,b){
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esa operacion solo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros ")
    }
    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentado sumaaar")
    }
    return a + b
}
try {
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("5, 10"))
} catch ( error){
    console.log("Se ha producido un error: ", error.message)
}

// Capturar varios tipos de errores

try {
    console.log(sumIntegers("5", 10))
} catch (error){
    if (error instanceof TypeError){
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error){
        console.log("Se ha producido un error: ", error.message)
    }
}

// Crear Expciones personalizadas 

class SumZeroIntegerError extends Error{
    constructor(message, a ,b){
        super(message)
        this.a = a;
        this.b = b;
    }
    printNumbers(){
        console.log(this.a, " + ", this.b)
    }
}
try {
    console.log(sumIntegers(0,10))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}
