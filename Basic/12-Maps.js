// Map

// Declaración

let myMap = new Map()
console.log(myMap)

// Inicialización
myMap = new Map([
    ["Name","Cristopher"],
    ["Edad", "18"],
    ["Ciudad: ", "Mexico"]])

    console.log(myMap)

// Metodos y propiedades

//set (Para meter valores) o modicar medio clave
myMap.set("Name", "Alexander")
myMap.set("Alias", "Chino")
console.log(myMap)

// get (Buscar valores por clave)
console.log(myMap.get("Name"))
console.log(myMap.get("Alexander")) // <- Undifide

// Has (Existe clave o no)
console.log(myMap.has("Alias")) // Regresa booleano

// delete

myMap.delete("Name")
console.log(myMap)

// keys
console.log(myMap.keys())

// Values
console.log(myMap.values())

// entries
console.log(myMap.entries())

// size
console.log(myMap.size)


// Clear
myMap.clear()
console.log(myMap)


