// Funciones flecha o arrow

// .map

let names = ["Agustín", "Lorena", "Carlitos"];

// Función callback
let length_names = names.map(function names_length(name) {
    let length = name.length;
    return length;
});
console.log("Función callback:", length_names);

// Función arrow
length_names = names.map((name) => { return name.length });
console.log("Función arrow:", length_names);

// Función arrow abreviada
length_names = names.map((name) => name.length);
console.log("Función arrow abreviada:", length_names);

// Función arrow en variable
let add_numbers = (number_1, number_2) => number_1 + number_2;
console.log("Función arrow en una variable: 2 + 3 =", add_numbers(2, 3));