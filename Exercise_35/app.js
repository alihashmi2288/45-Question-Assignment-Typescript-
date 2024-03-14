// Exercise :35
// Animals: 

"use strict";
// Storing  the names of animals in an array
let animals = ["Dog", "Cat", "Rabbit", "Turtle", "Parrot"];
// Looping through the array to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}
// Modifying the loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// printing a statement oytside loop
console.log("\nAny of these animals would make a great pet!");
