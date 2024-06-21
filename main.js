"use strict";
//console.log("hello world");
//ASSIGNMENT SOLUTIONS
//Task 1 is the installation of node.js,TypeScript and VS Code on our computer .
//Task 2
//let personName: string = "Eric";
//console.log(`Hello ${personName},would you like to learn some python today?`);
//Task 3
let personName = "Noor shaikh";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase 
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
// Task 4
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//Task 5
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
// Task 6
let personName = "\t\n Noor Shaikh \n\t";
console.log("Original:", personName);
console.log("stripped:", personName.trim());
//Task 7 & 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Task 9
let favoriteNumber = 4;
console.log(`My favourite number is ${favoriteNumber}.`);
// Task 10
author: [Noor, Shaikh];
date: [Friday, febuary, 16, 2024];
from;
task;
9;
printing;
my;
favourite;
number.
;
let favouriteNumber = 4;
revealing;
my;
favorite;
number in a;
message;
formate.
    console.log(`my favourite number is ${favouriteNumber}.`);
//task 11
let names = ["noor", "hassan", "bilal", "noor"];
console.log(names);
// Task 12
let names = ["noor", "hassan", "bilal", "noor"];
let message = "Do you like to play football?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
//Task 13 
let transpotation = ["Honda Motocyle", "Audi", "Honda City"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));
// Task 14 
let guestArr = ["noor", "hassan", "bilal"];
guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner]`)));
// Task 15 
let guestArr = ["noor", "hassan", "bilal", "dua"];
let canNotAttend = "noor";
console.log(canNotAttend + " " + "can not attend the dinner.");
let newGuest = "Alishba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner .`));
// // //Task 16 
let guestArr1 = ["noor", "hassan", "bilal", "dua"];
let canNotAttend1 = "dua";
let newGuest1 = "wajahat";
guestArr1[guestArr1.indexOf(canNotAttend1)] = newGuest1;
console.log(guestArr1);
guestArr1.map((items) => console.log(`Dear${items}, I found a bigger dinner table so I am invited more peoples.`));
// // //part 2 began 
let guestBeg = "dua";
guestArr1.unshift(guestBeg);
//.log(guestArr1)
//part 3 middle
let middleGuest = "fatima";
let middleIndex = guestArr1.length / 3;
guestArr1.splice(middleIndex, 0, middleGuest);
//console.log(guestArr1)
// // //part 4 append
guestArr1.push("fatima");
console.log(guestArr1);
//part 5 
guestArr1.map((items) => console.log(` Dear ${items}, you are invited in the more people category on dinner`));
// //Task 17
initial;
list;
of;
guests;
let guests = ["Ali", "Bilal", "Carry", "Dawood", "Hamza"];
informing;
that;
only;
two;
people;
can;
be;
invited;
console.log("Due to limited space, only two people can be invited for dinner.");
removing;
guests;
until;
only;
two;
names;
remain;
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`sorry ${removedGuest}, you're no longer invited to dinner.`);
}
printing;
invitations;
to;
the;
remaining;
two;
guests;
let guests = ["Ali", "Bilal"];
guests.forEach((guests) => {
    console.log(`Dear ${guests}, you're still invited to dinner.`);
});
removing;
the;
last;
two;
names;
from;
the;
list;
guests.pop();
guests.pop();
printing;
the;
final;
list;
to;
confirm;
it;
's empty ;
console.log("final guest list:", guests);
// // Task18 
// store the location in an array 
let placeToVisit = ["Tokyo", "Pakistan", "America", "China", "japan"];
//print the array in it's original order 
console.log("original order:", placeToVisit);
// print the array in alphabetical order without modifying the actual list 
console.log("alphabetical order:", [...placeToVisit].sort());
// show that the array still in it's originasl order 
console.log("original order after sorting:", placeToVisit);
// print the array in reverse alphabetical order without changing the order of the 
console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());
// show that the array is still in its original order 
console.log("original order after reverse sorting:", placeToVisit);
// Reverse the order of the list 
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);
// sort the array in alphabetical
placeToVisit.sort();
console.log("sorted in alphabetical order:", placeToVisit);
// sort the array in reverse alhabetical order 
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placeToVisit);
// //Task 19
let invitations = ["ali", "bial"];
let count_invitations = invitations.length;
console.log(`${count_invitations} people will come to the dinner`);
// //Task 20
//Think of something you could store in a array. for example , you could make a list 
//of mountains,rivers,countries,cities,languages,or anything else you'd like.
//write a program that creates a list containing these items.
let country = ["pakistan", "india", "newyork", "japan", "china"];
console.log("List of country:");
console.log(country);
//Task 21
//think of something you could store in a TypeScript onject.write a program 
//that creates object containing these items.
let person = { name: "Noor", fname: "female", age: 15 };
console.log(person);
//Task 22
//Intentional Error: if you haven't recieved an array index error in one of your
//progtrams yet,to try to make one happen, change an index in one of your programs
//produce an index error, make sure you correct the error before closing the program.
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(days, { 7:  });
console.log(days[6]);
// //Task 23
let car = "subaru";
console.log("is car == 'subaru' ? predict true");
console.log(car == 'subaru')
    / console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');
console.log("is car =='Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length !== 10? predict true");
console.log(car.length !== 10);
console.log("is 10 > 45 ? predict false");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict false");
console.log(3 <= 2);
console.log("is 72 >= 83 ? predict false");
console.log(72 >= 83);
console.log("is car == 'subaru' && car.length == 6? predict true ");
console.log(car == 'subaru' && car.length == 6);
Task;
24;
// more conditional tests: you don't have to limit the number of tests you create to 10 if you want to try more comparisons,
// write more tests . have at least one true and one false result for each of the following:
// tests for equality and inequality with strings 
let name_1 = "noor";
let name_2 = "noor shaikh";
let name_3 = "noor shykh";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
// //NUMERICAL TEST
let age_1 = 18;
let age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less
    console.log("younger");
}
if (age_2 >= age_1) { //greater
    console.log("older");
}
// //TEST USING AND & OR OPERATOR 
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligible for vote");
}
// // TEST WHETHER ITEMS NOT IN AN ARRAY
let country = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
// //TEST WHETHER NOT IN AN ARRAY
if (!country.includes("america")) {
    console.log("america is not include in an array");
}
// // TASK 25
let alien_color = "green";
if (alien_color == "green")
    console.log("you earn 5 points");
let alien_color = "red";
if (alien_color == "red")
    console.log("no output");
// //Task 26
let alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
let alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
// //Task 27
let alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
let alien_color = "yellow";
if (alien_color == "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
let alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
// //Task 28 ............2,4,13,20,65 Elder
let age = 1;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
let age = 3;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
let age = 10;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
let age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
let age = 57;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
let age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
// //Task 29
let favorite_fruits = ["strawberry", "blueberry", "mango"];
if (favorite_fruits.includes("strawberry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("peach")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("blueberry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like bananas");
}
// //Task 30
let users = ["admin", "eric", "dua", "miraal", "aqsa", "noor"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
// //Task 31 
let users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
// //TASK 32 
let current_users = ["admin", "eric", "ali", "hamza", "fatima"];
let new_users = ["admin", "fatima", "aliza", "haseeb", "noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`yes ${new_user}, is still in avaliable list`);
    }
}
// //Task 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`); //1st
    }
    else if (number === 2) {
        console.log(`${number}nd`); //2nd
    }
    else if (number === 3) {
        console.log(`${number}rd`); //3rd
    }
    else {
        console.log(`${number}th`); //4th , 5th , 6th , 7th , 8th, 9th
    }
}
// //task 34 
let favourite_pizza = ["pepperoni", "chicken", "veg"];
for (let pizza of favourite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favourite_pizza) {
    console.log(` I really like ${pizza} pizza!`);
}
console.log("\nI really love pizza!");
// //Task 35 
let animals = ["cat", "lion", "dog"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} has a tail`);
}
console.log("\n all of these are great pets! but i love cats more");
// //Task 36
function makeShirt(size, text) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt('large', '"I love typescript"');
makeShirt('medium', '"I need big shirt"');
// //Task 37
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
//makeShirt();
//makeShirt('medium')
//different msg
makeShirt('small', 'I need a big shirt to wear');
// Task 38
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi'); //default sentence
describe_city('france', 'europe');
describe_city('lahore', 'punjab');
// //Task 39
function citycountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = citycountry('lahore', 'pakistan');
let c2 = citycountry('tokyo', 'japan');
let c3 = citycountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
//Task 40 
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "seenbreez");
console.log(album);
// Task 41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
//Task 42 
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["usman", "wajahat", "haseeb"];
make_great(magicians2);
show_magicians(magicians2);
//Task 43 
function make_great2(magicians) {
    const greatMagnicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagnicians.push(magicians[i] + ' the great');
    }
    return greatMagnicians;
}
const magicians3 = ["usman", "wajahat", "haseeb"];
const greatMagnicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagnicians2);
//Task 44 
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("enjoy your sandwich noor shaikh");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyota", "corolla", { color: "silver, year:", 2024: "}),
    console, : .log(mycar)
});
