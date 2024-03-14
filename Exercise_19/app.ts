// Exercise :19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


//storing guests name in an arry
var guest_list: string[] = ["Bilal", "Ahmed", "Shahmir" , "Abdul Rehman"];

//printing personalized invitation to each person seperately
for (let i = 0; i < guest_list.length; i++){
    console.log(`Hello ${guest_list[i]}, you are invited to dinner tonight.`)
}
//printing guest cant make to the dinner
console.log(`\n\t(${guest_list[2]} can't make to the dinner.)`)

//replacing guest name with another
guest_list[2] = "Abdul Majeed";

//printing updated invitation
console.log("\nUpdated invitations : ")

for (let i = 0; i < guest_list.length; i++){
    console.log(`Hello ${guest_list[i]}, you are invited to dinner tonight.`)
}

//printing we found a bigger table
console.log("\n\t(Good news! We found a bigger dinner table.)");

//adding new guests to the beginning of the array
guest_list.unshift("Aslam")

//adding new guests to the middle of the array
guest_list.splice (3, 0, "Muzammil")

//adding new guests to the end of the array
guest_list.push("zaman")

//printing updated invitation with more guests
console.log("\nUpdated invitations with more guest : ")
for (let i = 0; i < guest_list.length; i++){
    console.log(`Hello ${guest_list[i]}, you are invited to dinner tonight.`)
}

//printing only two guests can be invited
console.log("\n\t(Only two guests can be invited to dinner.) \n");

//removing the guest and printing mesaage for them until two remains.
for (let i = guest_list.length - 1; i >= 2; i--) {
    console.log(`Sorry, you can't come, we have some issues ${guest_list[i]}.`);
    guest_list.pop();
}

console.log(`\nRemaining guests : ${guest_list}\n`)// now only two guests are in the list

//printing message for the remaining two guests
for (let i = 0; i < guest_list.length; i++){
    console.log(`Congratulations you are still invited ${guest_list[i]}.`)
}



//Now as Exercise 19 says printing a message indicating the number of people finally iam inviting to dinner

console.log(`\nI am finally inviting (${guest_list.length}) people to dinner.`)