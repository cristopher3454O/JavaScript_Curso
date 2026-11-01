// Metodos de Consola

// log

console.log("Hola Java Script")

// Error

console.error("Esto es un mensaje de Error")
console.error("Error al intentar quererla ")

// Warm

console.warn("Este es un mensaje de advertncia")

// info

console.info("Este es un mensaje de informacion adicional")

// Table

let data = [
    ["Cris", 18 ],
    ["Fernanda", 21]
]

console.table(data)

data = [
    {name : "Cris", age: 18 },
    {name : "Fernanda", age: 21}
]

console.table(data)

// group

console.group("Usuarios")
console.log("Nombre : Cristopher")
console.log("Edad: 37")
console.groupEnd()

// time

console.time("Tiempo de ejecucion 2")

for (let i = 0; i < 1000; i++){

}
console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")


// assert

let age = 17
console.assert(age >= 18, "El usario debe ser mayor a 18 años")

// count

console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")


// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución")

}

funcA()

// clear

// console.clear()
