// 1. Concatena dos cadenas de texto
let message1 = "Hola"
let message2 = message1 + " como esta? "
console.log(message2)

// 2. Muestra la longitud de una cadena de texto
console.log(message1.length)

// 3. Muestra el primer y último carácter de un string
let primer = message1[0]
let ultimo = message1[message1.length-1]
console.log(`Primer caracter ${primer} y ultimo caracter ${ultimo}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(message1.toUpperCase())
console.log(message1.toLowerCase())


// 5. Crea una cadena de texto en varias líneas
let cadenaLarga = `Hola 
Espero 
Esten
Bien`
console.log(cadenaLarga)

// 6. Interpola el valor de una variable en un string
console.log(`Este es un mensaje interpolado ${cadenaLarga}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let Reemplaza = "H O L A"
console.log(Reemplaza.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(Reemplaza.includes("H"))

// 9. Comprueba si dos strings son iguales
console.log(Reemplaza === message1) 

// 10. Comprueba si dos strings tienen la misma longitud
console.log(Reemplaza.length === message1.length)