// Bucle For:

let fruits = ["manzana roja", "pera", "mango", "manzana roja", "manzana verde", "tomate", "cebolla"];

let count = 0;

for(let i = 0; i < fruits.length; i++) {
/*      |              |           |
        |              |           --> Expresión de actualización
        |              --> Condición
        |
        --> Expresión inicial
*/
    console.log(fruits[i]);
    if (fruits[i] === "manzana roja") {
        count++;
    };
};

console.log("\nHay", count, "manzanas rojas.");