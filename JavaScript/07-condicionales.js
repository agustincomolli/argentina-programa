// If -- else

let is_registered = false;
let want_register = false;

// Si el cliente está registrado ...
if (is_registered) {
    console.log("Solicitando datos... 💳");
} else if (want_register) {
    console.log("Registrar al cliente... 👨");
} else {
    console.log("Gracias por su tiempo 👋");
}

// switch case

let fruit;  // manzana, pera, ciruela, durazno

fruit = "manzana";

switch (fruit) {
    case "manzana":
        console.log("Agrupando manzanas")
        break;
    case "pera":
        console.log("Agrupando peras")
        break;
    case "ciruela":
        console.log("Agrupando ciruelas")
        break;
    case "durazno":
        console.log("Agrupando duraznos")
        break;
    default:
        console.log("Fruta desconocida")
        break;
};