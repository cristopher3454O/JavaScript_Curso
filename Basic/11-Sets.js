// set

//Declaracion
let mySet = new Set()
console.log(mySet)

// inicialización}
mySet = new Set(["Cristopher", "Alexander", "Breceda", "Lerma"])
console.log(mySet)


// Metodos comunes

// Add y delete

mySet.add("Fernanda")
console.log(mySet)

mySet.delete("Cristopher") // Especificar que elemento eliminar
console.log(mySet)

/* El elemento fue eliminado?
Regresa true = Si elimino y exite
Regresa false = Si no se elimino y no existe
*/
console.log(mySet.delete("Breceda"))

// has

// Existe el elemento
console.log(mySet.has("Cristopher"))
console.log(mySet.has("Lerma"))


// size (Longitud)
console.log(mySet.size)

// Convertir un set a un array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set
mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados
mySet.add("Alexander")
mySet.add("Alexander")
mySet.add("Alexander")



console.log(mySet)
