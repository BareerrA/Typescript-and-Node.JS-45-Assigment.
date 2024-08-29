"use strict";
////////// Question no 15//////;
let Guest_list = ['Imran Khan', 'Naeaz Sareef', 'Asif Ali Zardari',];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is oue pleasure to invite youis oue party.\n\nThank You!\n\n');
}
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is oue pleasure to invite youis oue party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest}is not comming to the party.`);
