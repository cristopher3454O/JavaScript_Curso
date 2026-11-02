// 9. Exporta una función, una constante y una clase desde una carpeta

export function functionDesdeFuera(){
    console.log("Funcion exportada desde fuera")
}

export const constanteDesdeFuera = "Soy una constante exportada desde fuera"

export class claseDesdeFuera{
    constructor(name){
        this.name = name;

    }
    tuNombre(){
        console.log(`Holaaa ${this.name}`)
    }}
