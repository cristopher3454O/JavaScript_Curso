// 1. Captura una excepción utilizando try-catch
    // Producir la expecion
    let expecion
    try {
        console.log(expecion.camote);
        console.log("Finaliza todo bien !!")
    } catch{
        console.log("Se ha producido un error")
    }

// 2. Captura una excepción utilizando try-catch y finally
    try {
        console.log(expecion.camote);
        console.log("Finaliza todo bien !!")
    } catch{
        console.log("Se ha producido un error")
    } finally{
        console.log("USANDO finally")
    }


// 3. Lanza una excepción genérica

try{
    let resultado = null
    
    console.log(resultado.camote)
    

}catch (error){
    console.log("ERROOOOR: ", error.message)
}

// 4. Crea una excepción personalizada

class miExpecion extends Error{
    constructor(message){
        super(message)
        this.name = "miExpcion"
    }
}

// 5. Lanza una excepción personalizada

try {
    const edad = 15;
    if ( eda < 18){
        throw new  miExpecion("Acceso denegado")
    }
    console.log("Acceso concedido")
} catch (error){
    console.log(`[${error.name}] - Mensaje ${error.message}`)

}

// 6. Lanza varias excepciones según una lógica definida
class ErrorDeNombre extends Error { constructor(msg) { super(msg); this.name = "ErrorDeNombre"; } }
class ErrorDeEdad extends Error { constructor(msg) { super(msg); this.name = "ErrorDeEdad"; } }

function validarUsuario(usuario) {
    if (!usuario.nombre || usuario.nombre.trim() === "") {
        throw new ErrorDeNombre("El nombre no puede estar vacío.");
    }
    if (usuario.edad < 18) {
        throw new ErrorDeEdad("El usuario debe ser mayor de edad.");
    }
    return "Usuario válido";
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    const usuarioInvalido = { nombre: "Carlos", edad: 15 }; 
    validarUsuario(usuarioInvalido);
} catch (error) {
    if (error instanceof ErrorDeNombre) {
        console.log("Error de Validación:", error.message);
    } else if (error instanceof ErrorDeEdad) {
        console.log("Error de Validación:", error.message);
    } else {
        console.log("Error inesperado:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const listaDeValores = ["3.14", "42.5", "no-soy-un-numero", "100.99", undefined];

for (let i = 0; i < listaDeValores.length; i++) {
    try {
        let resultado = parseFloat(listaDeValores[i]);
        if (isNaN(resultado)) {
            throw new Error(`El valor '${listaDeValores[i]}' no se puede transformar a Float.`);
        }
        console.log(`Posición ${i}:`, resultado);
    } catch (error) {
        console.log(`Error en posición ${i}:`, error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadFaltanteError extends Error { constructor(prop) { super(`Falta la propiedad: '${prop}'`); this.name = "PropiedadFaltanteError"; } }

function verificarPropiedad(objeto, propiedadBuscada) {
    if (!objeto.hasOwnProperty(propiedadBuscada)) {
        throw new PropiedadFaltanteError(propiedadBuscada);
    }
    return true;
}

try {
    const auto = { marca: "Toyota", modelo: "Corolla" };
    verificarPropiedad(auto, "precio");
} catch (error) {
    console.log("Validación de Objeto:", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function conectarServidor() {
    if (Math.random() > 0.85) {
        return "Conectado exitosamente";
    }
    throw new Error("Fallo de conexión");
}

function ejecutarConReintentos() {
    const MAX_REINTENTOS = 10;
    for (let intento = 1; intento <= MAX_REINTENTOS; intento++) {
        try {
            console.log(`Intento ${intento}...`);
            const resultado = conectarServidor();
            console.log(resultado);
            return; 
        } catch (error) {
            console.log(`Falló intento ${intento}`);
            if (intento === MAX_REINTENTOS) {
                console.log("Se alcanzaron los 10 intentos máximos.");
            }
        }
    }
}

ejecutarConReintentos();
