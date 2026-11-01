// Funciones

export function add(a,b){
    return a + b
}
console.log(add(5,0))

// Propiedades

export const PI = 3.1416
export let name = "Cristopher"

// clases

export class Circle{
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI* Math.pow(this.radius, 2)
    }
    perimetro(){
        return 2 * Math.PI * this.radius
    }
}

// Exportacion por defecto

export default function substract(a, b){
    return a- b
}

// Export default class myClass {
// func(){
// console.log("Mi clase ")
//   }
// }