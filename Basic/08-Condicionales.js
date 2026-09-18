// IF
let edad = 8
if (edad == 18){
    console.log("Holaa")
} else {
    console.log("Adios")
}

// else if
if (edad == 18){
    console.log("HOLAA")
} else if (edad == 16){
    console.log("ADIOOOS")
} else {
    console.log("Ninguna condición")
}

// Operador ternario
// Forma mas compacta de escribir un condicional

const message = edad == 18 ? "La edad es 18" :"La edad no es 18"
console.log(message)

// Switch
let day = 10
let dayName = ""
switch (day){
    case 0:
        dayName = "Lunes"
        break
        case 1: 
        dayName =  "Martes"
        break
        default: 
        console.log("ERROR")
        break

}
console.log(dayName)