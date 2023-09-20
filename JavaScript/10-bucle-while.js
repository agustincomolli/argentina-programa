// Bucle While:

let fruits = ["manzana roja", "pera", "mango", "manzana roja", "manzana verde", "tomate", "cebolla"];
let amount = fruits.length;
let count = 0;

while (amount >= 0) {
    if (fruits[amount] === "manzana roja") {
        count++
    };
    amount--
};

console.log("Hay", count, "manzanas rojas.")