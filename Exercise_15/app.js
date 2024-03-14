"use strict";
// Exercise: 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//storing guests name in an array
let guest_list = ["Bilal", "Ahmed", "Shahmir", "Abdul Rehman"];
//printing personalized invitation to each person seperately
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);
//printing guest cant make to the dinner
console.log(`\n${guest_list[2]} can't make to the dinner.`);
//replacing guest name
guest_list[2] = "Abdul Majeed";
//printing updated invitation
console.log("\nUpdated invitations : ");
console.log(`Hello ${guest_list[0]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[1]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[2]}, you are invited to dinner tonight.`);
console.log(`Hello ${guest_list[3]}, you are invited to dinner tonight.`);
