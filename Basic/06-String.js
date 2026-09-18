let nombre = "Cristopher"
let edad = "Tengo 18 años y me llamo:  " + nombre +  "!"
console.log(edad)

console.log(typeof edad) // typeof Muestra el tipo de dato

//Longitud
console.log(edad.length)

//Acesso a un caracteres en especifico
console.log(edad[3])

//Metodos comunes en String
console.log(edad.toUpperCase())
console.log(edad.toLowerCase())
console.log(edad.indexOf("me llamo")) 
console.log("Incluye me llamo?: "+ edad.includes("llamo"))
console.log("Solo desde el indice 1 al 15 " +edad.slice(1,15))
console.log("Remplazar 'me llamo' por  'remplace' "+ edad.replace("me llamo", "remplace"))

//Templates literal
let message = `Hola amigos
como estan? 
Buenos DIAAAAAS
`
let email = "Cristo@gmail.com"
console.log(message)
console.log(`Cristopher ${message}`) //Forma de concatenar mensajes