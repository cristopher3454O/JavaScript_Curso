// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {functionDesdeFuera, constanteDesdeFuera, claseDesdeFuera } from "../ExportacionEjercicios/Exportacion-ejercicios.js"

functionDesdeFuera()

console.log(constanteDesdeFuera)

let claseFuera = new claseDesdeFuera("Fernanda")
claseFuera.tuNombre()
