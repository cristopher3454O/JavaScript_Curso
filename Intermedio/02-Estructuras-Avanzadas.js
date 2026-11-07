// Arrasy Avanzados

// - Metodos funcionales

// for-Each
console.log("for-Each")

let numbers = [1,2,3,4,5,6]

numbers.forEach(element => console.log(element))

console.log("")
// Map
console.log("Map")

let doubled = numbers.map(element => element * 2)
console.log(doubled)

console.log("")

//filter
console.log("Filter")

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

console.log("")
console.log("- Manipulación")
console.log("Flat")

let nestedArray = [1,[2,[3,[4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

console.log("")


// FlatMap

console.log("FlatMap")
let phrases = ["Hola mi amor", "Ya no te pienso"]
let words = phrases.flatMap(phrases => phrases.split("a"))
console.log(words)

console.log("")


console.log("- Ordenación")
console.log("Sort")

let unsorted = ["b", "c", "a", "d"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3,4,1,6,10]
sorted = unsorted.sort((a,b) => a-b)
console.log(sorted)

console.log("")

console.log("Reverse")

sorted.reverse()
console.log(sorted)


console.log("")

console.log("- Busqueda")
console.log("Includes")

console.log(sorted.includes(4))
if (!(sorted.includes(5))) {
    console.log("No existe el 5 ")
}

console.log("")

console.log("Find")
// unsorted = [3,4,1,6,10]

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)
console.log("")



console.log("findIndex")

let firstEvenIndex = sorted.findIndex(element => element % 2 === 1)
console.log(firstEvenIndex)

console.log("")


console.log("SETS AVANZADOS")
console.log("OPERACIONES")
console.log("")
console.log("Eliminación de duplicados")

let numbersArray = [1,2,3,4,5,6,6]
numbersArray = [... new Set(numbersArray)]
console.log(numbersArray)

console.log("")
console.log("Unión")

const setA = new Set ([1,2,3])
const setB= new Set ([2,3,4,5])
const union = new Set([...setA, ...setB])
console.log(union)
console.log("")

console.log("Intersección")

const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)

console.log("")
console.log("Diferencia")
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)
console.log("")


console.log("- CONVERSIÓN")
console.log("Set a Array")

console.log([...setA])
console.log("")

console.log("- Iteracción")
console.log("forEach")

setA.forEach(element => console.log(element))
console.log("")


console.log(" Maps Avanzado")
console.log("- Iteración")

let myMap = new Map([
    ["name", "Cristopher"],
    ["age", 19]
])

myMap.forEach((value, key) =>console.log(`${key}: ${value}`) )
console.log("")


console.log("- Conversión")

console.log("Map a Array")

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)
console.log("")


console.log("Map a Objeto")

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)
console.log("")


console.log("Objeto a Map")
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)









































