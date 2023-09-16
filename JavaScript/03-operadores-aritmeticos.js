// Los operadores aritméticos en JavaScript son:
// Suma +
// Resta -
// Multiplicación *
// División /
// Módulo (operador de resto) %
// Potencia **

let product_price = 500;  // Precios del producto
let amount = 4;           // Cantidad vendida
let shipping_cost = 30;   // Costo de envío
let discount = 20;        // Descuento
let monthly_fees = 4;     // Cuotas mensuales

let total = ((product_price * amount) + shipping_cost - discount) / monthly_fees;

console.log("El cliente tiene que abonar $", total, "en", monthly_fees, "cuotas.");

let odd_number = 3;
let even_number = 22;

console.log("\n¿", odd_number, "es número par?", (odd_number % 2) == 0);
console.log("¿", odd_number, "es número impar?", (odd_number % 2) == 1);
console.log("\n¿", even_number, "es número par?", (even_number % 2) == 0);
console.log("¿", even_number, "es número impar?", (even_number % 2) == 1);