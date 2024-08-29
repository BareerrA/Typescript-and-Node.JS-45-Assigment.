"use strict";
//////////Day 6 coding challange//////
//////////Question no 16////////;
let Guest_list = ['Imran Khan', 'Naeaz Sareef', 'Asif Ali Zardari',];
//for (let i = 0; i < Guest_list.length; i++) {
//console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is oue pleasure to invite youis oue party.\n\nThank You!\n\n');
//}
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is oue pleasure to invite youis oue party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest}is not comming to the party.`);
console.log('Good News! we find Big Table so we are invitire guest.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Marium Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is oue pleasure to invite youis oue party.\n\nThank You!\n\n');
}
