//Exercise 06:
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Storing person's name in a variable
let person_name: string = "\t  Syed Ali Hashmi  \n";

// Printing the person's name with whitespace 
console.log(person_name);

// Printing the person's name without whitespace
console.log(person_name.trim());