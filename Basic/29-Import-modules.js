// Importacion de modulos

import { add, PI, name, Circle } from "./28-Export-modules.js";
import defaultImport from "./28-Export-modules.js"

// Funciones

console.log(add(5,10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.area().toFixed(2))
console.log(circle.perimetro().toFixed())

// Importacion por defecto

console.log(defaultImport(5,10))


