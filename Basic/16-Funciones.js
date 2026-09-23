/* Una función es un bloque de codigo
el cual nosotros lo llamamos */

// Inicilización
function myFunc(){
    console.log("Hola función")
}

// Llamamos a la funcion
for (let i = 0; i <=5; i++){
myFunc()
}

// Funcion con parametros
function myfuncParametros(name){
    console.log(`Holaaa ${name}`)
}
myfuncParametros("Cristopher")

// Funciones anonimas
const myFunc2 = function(name){
        console.log(`Holaaa ${name}`)

}
myFunc2("Alexxandeer")

// Arrow Function

const myFunc3 = (name) => {
            console.log(`Holaaa ${name}`)
}
const myFunc4 = (name) => console.log(`Holaaa ${name}`)

myFunc3("Camilo")
myFunc4("breceda")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5)

// Retorno de valores

function mult(a,b){
    return a * b
}
let result = mult(3,5)
console.log(result)

// Funciones aninadas
function extern(){
    console.log("Hola externo")
    function internal(){
        console.log("Interno")
    }
    internal()
}
extern()

// Funciones de  orden superiror
function applyFunc(func, parametro){
    func(parametro)
}
applyFunc(myFunc4,("Funcion de orden superior"))

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))