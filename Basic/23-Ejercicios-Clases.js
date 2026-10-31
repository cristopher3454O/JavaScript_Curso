// 1. Crea una clase que reciba dos propiedades
console.log("Crea una clase que reciba dos propiedades")
console.log()
class reciboDosCosas{
    constructor(name , edad){
        this.name = name;
        this.edad = edad;
    }

}
let primeraClase = new reciboDosCosas("PEPE", 12)
console.log(primeraClase)

// 2. Añade un método a la clase que utilice las propiedades
console.log("Añade un método a la clase que utilice las propiedades")
console.log()

class reciboDosCosasConMetodos {
    constructor(name, edad){
        this.name = name;
        this.edad = edad;

    }
    cosas(){
        console.log(`holaa soy ${this.name} y tengo ${this.edad}`)

    }
}



// 3. Muestra los valores de las propiedades e invoca a la función
console.log("Muestra los valores de las propiedades e invoca a la función")
console.log()

let SegundaClase = new reciboDosCosasConMetodos("Cristopher", 18)
console.log(SegundaClase.edad)
console.log(SegundaClase.name)

SegundaClase.cosas();


// 4. Añade un método estático a la primera clase
class reciboDosCosasMetodoStatico{
    constructor(name , edad){
        this.name = name;
        this.edad = edad;
    }
    static suma(a ,b){
        return a *b;
    }
}

// 5. Haz uso del método estático

console.log("Haz uso del método estático")
console.log(reciboDosCosasMetodoStatico.suma(3,4))

// 6. Crea una clase que haga uso de herencia
console.log("Crea una clase que haga uso de herencia")
console.log()


class Carro {
    constructor(name){
        this.name = name;
    }
    prender(){
        console.log("Esstoy prendido we")
    }
}
class llantaEXPRES extends Carro{
    prender(){
        console.log("WOOOOW")
    }
    llanta(){
        console.log("Soy una llantaaaa")
    }
} 
let llanta = new llantaEXPRES("porsche")
llanta.prender();
llanta.llanta();


console.log("7 y 8. Clase con propiedades privadas, getters y setters");
console.log();

class Meeeh {
    #pollo;
    #azucar;

    constructor(pollo, azucar){
        this.#pollo = pollo;
        this.#azucar = azucar;
    }

    get pollo(){
        return this.#pollo;
    }
    get azucar(){
        return this.#azucar;
    }

    set pollo(nuevoPollo){
        this.#pollo = nuevoPollo;
    }
    set azucar(nuevoAzucar){
        this.#azucar = nuevoAzucar;
    }
}


console.log("9. Utiliza los get y set y muestra sus valores");
console.log();

// Creamos la instancia
let miComida = new Meeeh("Frito", "Morena");

console.log("Pollo inicial:", miComida.pollo); 
console.log("Azúcar inicial:", miComida.azucar);

miComida.pollo = "Asado";
miComida.azucar = "Blanca";

console.log("Pollo modificado:", miComida.pollo);   
console.log("Azúcar modificada:", miComida.azucar); 
console.log();


console.log("10. Sobrescribe un método de una clase que utilice herencia");
console.log();

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("El animal hace un sonido genérico.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Guau guau! `);
    }
}

let miPerro = new Perro("Firulais");
miPerro.hacerSonido(); 