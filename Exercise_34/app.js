//Exerxise :33
//Pizzas:

"use strict";
//storing different types of pizza in an array
let pizzas = ["Margherita", "Peperoni", "Hawaiian", "Tandori ", "Mexican", "Veggie"];
//printing names of pizzas
for (let pizza of pizzas) {
    console.log(pizza);
}
//modifying for loop and printing message with pizza names
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}
//printing message
console.log("\nI really love pizza!");
