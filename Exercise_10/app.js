// Exercise 10:
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

"use strict";
/*
Name: Syed Ali Hashmi
Date: 25/2/2024
This program print person name into uppercase,lowercase and title case
*/

let person_name = 'Syed Ali Hahsmi';
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));

/*
Name: <NAME>
Date: 25/2/2024
This program perform arithmetic operations which gives result in the number 8
 */
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
