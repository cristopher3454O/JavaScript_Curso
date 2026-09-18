// 1. Imprime por consola tu nombre si una variable toma su valor
let variable1 = 16
if (variable1 = 16){
    console.log("Cristopher")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let contraseña = 1234
let usuario = "admin"
if (contraseña == 1234 && usuario == "admin"){
    console.log("Bienvenido al sistema")
} else {
    console.log("Acceso denegado")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -2
if (numero > 0){
    console.log("El numero es mayor")
} else if (numero < 0){
    console.log("El numero es menor")
} else {
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 12
if (edad >= 18){
    console.log("Puedes votar")
} else {
    let falta = 18 - edad
    console.log(`Te faltan ${falta} años para votar`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadAsignar = 23
const valor = edadAsignar >= 18 ? "Adulto" : "Menor"
console.log(valor)