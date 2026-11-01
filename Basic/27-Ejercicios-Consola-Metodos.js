
console.count("wow")

console.log("1. Crea un función que utilice error correctamente")
// 1. Crea un función que utilice error correctamente
function miConsolaError(){
    console.error("Esto es un error en una funcion !!")
}
miConsolaError()

console.count("wow")

// 2. Crea una función que utilice warn correctamente
function miConsolaWarn(){
    console.warn("Esto es mensaje warn")
}
miConsolaWarn()
console.count("wow")

// 3. Crea una función que utilice info correctamente
function miConsolaInfo(){
    console.info("Este es un mensaje informativo")
}
miConsolaInfo()

// 4. Utiliza table

let tabla = [
    ["Fernanda", 21],
    ["Cristopher", 18],
    ["Renata", 18]
]
console.table(tabla)

console.count("wow")

// 5. Utiliza group

console.group("Usuarios")
console.log("Nombre : Cristopher")
console.log("Amor de su vida : Fernanda")
console.log("Apodo : Cuchurrumina")
console.groupEnd()


console.count("wow")

// 6. Utiliza time

console.time("tiempo de ejecucion sencilla 1")
for (let i = 0; i < 10000; i++){

}
console.timeEnd("tiempo de ejecucion sencilla 1")

// 7. Valida con assert si un número es positivo

let numero = -12
console.assert(numero > 0, "El numero es negativo")

// 8. Utiliza count
console.count("wow")
console.countReset("wow")

// 9. Utiliza trace
function trazabilidad(){
    console.log("Pollito Rico")
    console.log("Sencillos")
    hola()
}
function hola(){
    console.trace("Seguimientos de la ejecucion ")
}

trazabilidad()

// 10. Utiliza clear

console.clear()