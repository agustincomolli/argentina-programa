// Bucle For... in

let user = {
    name: "Agustín Comolli",
    email: "agustincomolli@yahoo.com.ar",
    age: 46,
    address: "Rivadavia 340, Cañuelas"
};

console.log("For... in:")

for (let user_data in user) {
    console.log(user_data, ":", user[user_data]);
};


// Bucle For... of

let fruits = ["pera", "uva", "durazno", "frutilla"];

console.log("\nFor... of:")

for (let fruit of fruits) {
    console.log(fruit);
};