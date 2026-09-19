// 1. Crea un array que almacene cinco animales
let animales = ["gato","hormiga","pollo","perro","araña" ]
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final

animales.push("perra") // Final
console.log(animales)

animales.unshift("pajaro") // Incio
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libro = new Set(["bajo la misma estrella", "como antes", "100 años de soledad", "amar duele", "donde estas misa?"])
console.log(libro)

// 5. Añade dos más. Uno de ellos repetido
libro.add("amar duele")
libro.add("amar no duele?")
console.log(libro)

// 6. Elimina uno concreto a tu elección
libro.delete("amar duele")
console.log(libro)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map([["1", "Enero"],
["2", "Febrero"], 
["3", "Marzo"]])
console.log(mes)

// 8. Comprueba si el mes número 3 existe en el map e imprime su valor
if (mes.has("3")){
    console.log(mes.get("3"))
}

// 9. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Hola", "como estas?"]
console.log(myArray)
let mySet = new Set(myArray)
console.log(mySet)
let mapa = new Map(Array.from(mySet, item => [item, item])) //PAra convertir a map
console.log(mapa) 