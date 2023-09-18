let number;

number = 5;
//    |
//    ------->  operador de asignación.


// Otros operadores de asignación:
// asignación de suma +=    (x = x + y)
// asignación de resta -=   (x = x - y)
// asignación de multiplicación *=  (x = x * y)
// asiganción de división /=    (x = x / y)
// asignación de módulo %=      (x = x % y)


let price = 110;
let shipping_cost = 30;

price += shipping_cost;

console.log("El total del producto es $", price)

// Incrementar una variable en una unidad.
let count = 0;
count++;
count++;
count--;

// esto solo asigna el valor de count y no lo incrementa.
let total = count++;  
// poniendo antes el ++ primero incrementa count y después lo asigna
total = ++count;  

console.log("El valor de count es:", --count);
console.log("El valor de total es:", total);

