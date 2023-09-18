/* 
Los operadores lógicos básicos son:

- Y (AND)       &&
- O (OR)        ||
- NO (NOT)      !
*/


/* 
    Tabla de verdad AND:            Tabla de verdad OR:

    true && true = true             true || true = true
    true && false = false           true || false = true
    false && true = false           false|| true = true
    false && false = false          false || false = false
*/

let guest = "Agustín";
let have_invitation = true;
let is_on_the_list = false;

console.log("¿" + guest, "puede entrar?", have_invitation && is_on_the_list);

let other_guest =  "Lorena";
have_invitation = false;
is_on_the_list = true;
is_male = false;

console.log("¿" + other_guest, "puede entrar?", have_invitation || is_on_the_list);
console.log("¿" + other_guest, "no es un hombre?", ! is_male)