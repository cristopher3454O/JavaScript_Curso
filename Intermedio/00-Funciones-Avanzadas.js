// Cuidadano de primera clase

const greet = function(name){
    console.log(`hola ${name}`)
}
greet("Cristopher")

function processGreeting(greetFunction, name){
    greetFunction(name)
}
function returnGreeting(){
    return greet
}

processGreeting(greet, "Alexander")
const greet2 = returnGreeting()
greet2("Fernanda")


console.log("Arrow function avanzadas")

// - Retorno implicito
const multiply = (a, b) => a * b
console.log(multiply(4,5))

// - this léxico

const handler = {
    name : "Cristopher",
    greeting: function(){
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola , ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();


console.log("IIFE (Expresión de Función Invocada Inmediatamente");
(function(){
    console.log("IFEE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();
console.log()

console.log("Parámetros Rest (...)")
// Parámetros Rest (...)

function sum(...numbers){ // Suma todos los numeros de una lista
    let result = 0
    for (let number of numbers){
        result+= number
    }
    return result
}
console.log(sum(1,2,3,4,5))
console.log(sum(10,15))


console.log()
console.log("Operador Spread(...)")

const numbers = [1,2,3]
function sumWithSpread(a,b,c){
    return a + b + c
}

console.log(sumWithSpread(1,3,3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con spread

console.log()
console.log("Closures (Clasuras)")

function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(`Contador : ${counter}`)

    }
}
const counter = createCounter()
counter()
counter()
counter()
counter()


console.log()

console.log("Recursividad")

function factorial(n){ // Función recursiva
    if (n <= 1){
        return 1
    }
    return n * factorial(n-1)
}
console.log("Factorial de 5: ", factorial(5))

console.log()

console.log("Funciones Parciales")

function partialSum(a){
    return function(b,c){
        return sum(a,b,c)
    }
}
const sumWith = partialSum(4)
console.log(sumWith(2,3))
console.log(sumWith(1,2))


console.log()
console.log("Currying")

function currySum(a){
    return function (b){
        return function (c){
            return function (d){
                return sum (a,b,c,d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))


console.log()
console.log("Callbacks")

function processData(data, Callback){
    const result = sum(...data)
    Callback(result)
}

function processResult(result){
    console.log(result)

}

function processResult2(result){
    console.log(`Mi resultado es : ${result}`)

}
processData([1,2,3], processResult)
processData([1,2,3], processResult2)
processData([1,2,3], (result) =>{
    console.log(`Mi resultado en la arrow function es: ${result}`)

})







