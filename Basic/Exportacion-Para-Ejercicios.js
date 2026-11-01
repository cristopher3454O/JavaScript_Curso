// 1. Exporta una función
export function hola(){
    console.log("Soy una función exportada !!")
}

// 2. Exporta una constante
export const Amame = "Solo soy una constante que quiere sentirse amada !"

// 3. Exporta una clase
export class teAmo{
    constructor(nombre, cantidad){
        this.nombre = nombre
        this.cantidad = cantidad
    }
    amor(){
        console.log(this.nombre, " Te amo más de un " , this.cantidad, " millon de veces")
    }
}