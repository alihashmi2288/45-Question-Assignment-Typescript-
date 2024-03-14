//Eexercise 03:
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

"use strict";
// Storing the person's name in a variable
let person_name = 'sYeD ali hasHmi';
// Printing the person's name in lowercase
console.log(person_name.toLowerCase());
// Printing the person's name in uppercase
console.log(person_name.toUpperCase());
// Converting the person's name to title case and printing
console.log(person_name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
