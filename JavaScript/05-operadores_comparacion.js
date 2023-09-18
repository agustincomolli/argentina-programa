/* 
Los operadores de comparación son:

- Igual                       ==
- Estrictamente igual         ===
- No es igual                 != 
- Estrictamente no igual      !==
- Mayor que                   >
- Menor que                   <
- Mayor o igual a             >=
- Menor o igual a             <=
*/

let a = 4543;       //  --> Número
let b = "4543";     // --> Cadena de texto

console.log(a == b);  // --> No evalúa el tipo de dato
console.log(a === b); // --> Evalúa también el tipo de dato

// Siempre se recomienda usar el estrictamente igual ===