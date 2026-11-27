// 1. Agregega una función al prototipo de un objeto
let comida = {
    name: "Enchiladas",
    estasBuenas: true,
    comidita() {
        console.log(`Son ${this.name}`);
    }
};

Object.getPrototypeOf(comida).SiComida = function() {
    console.log(`Sí están buenas las ${this.name}`);
};

comida.SiComida(); 

// 2. Crea un objeto que herede de otro
let objetito = Object.create(comida)
objetito.quesoy = "Un objeto"

console.log(objetito.quesoy)

// 3. Define un método de instancia en un objeto

function Chicharrones(name, tienda){
    this.name = name
    this.tienda = tienda
}
Chicharrones.prototype.comidita = function(){
    console.log(`me gustan los ${this.name} de el o la ${this.tienda}`)

}
let ChicharronNuevo = new Chicharrones("De cebolla", "Esquina sol")
ChicharronNuevo.comidita();

// 4. Haz uso de get y set en un objeto
const usoDeGetAndSet = {
    _nombre: "Cristopher",
    aunLaAmas: "no lo se..",

    get nombre() {
        return this._nombre;
    },
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
};

console.log(usoDeGetAndSet.nombre); 
usoDeGetAndSet.nombre = "Alex";
console.log(usoDeGetAndSet.nombre); 

// 5. Utiliza la operación assign en un objeto

let sabores = {name : "Salado"}
let colores = {color : "Rojo", ropa : "simonas"}

let assingPerro = Object.assign(sabores,colores)
console.log(assingPerro)

// 6. Crea una clase abstracta

class Amor{
    constructor(name){
        if(new.target === Amor){
            throw new Error("No hay amor ")
        }
        this.name = name
    }
    amorMio(){
        throw new Error ("Debes usar el amor we")
    }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class Fernanda extends Amor {
    amorMio() {
        console.log(`${this.name}  No te amo we `);
    }
}

class Cris extends Amor {
    amorMio() {
        console.log(`${this.name} Todavía te extraño we `);
    }
}

const persona1 = new Fernanda("Fer");
const persona2 = new Cris("Cristopher");

persona1.amorMio(); 
persona2.amorMio(); 



// 8. Implementa un Mixin


const aquiEstoy = {
    queOndaWe() {
        console.log(`${this.name} que onda we`);
    }
};

class Saludo {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Saludo.prototype, aquiEstoy);

const saludando = new Saludo("Pedro");
saludando.queOndaWe(); // "Pedro que onda we"


// 9. Crea un Singleton

class Camote {
    constructor(nombreDelCamote){
        if (Camote.instance){
            return Camote.instance
        }
        this.nombreDelCamote = nombreDelCamote
        Camote.instance = this
    }
}
const camotudo = new Camote("Camote de leche")
console.log(camotudo.nombreDelCamote)

// 10. Desarrolla un Proxy
const datos = {
    nombre: "Cristopher",
    edad: 22
};

const manejador = {
    get(target, property) {
        console.log(`Leyendo: ${property}`);
        return property in target ? target[property] : "Esa propiedad no existe we";
    },
    set(target, property, value) {
        if (property === "edad" && typeof value !== "number") {
            throw new Error("La edad tiene que ser un número we");
        }
        console.log(`Cambiando ${property} a ${value}`);
        target[property] = value;
        return true;
    }
};

const miProxy = new Proxy(datos, manejador);

console.log(miProxy.nombre);
console.log(miProxy.novia);
miProxy.edad = 23;
