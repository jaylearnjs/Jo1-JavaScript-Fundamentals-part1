/*
//Values and Variables
let js = "Amazing";
console.log(40 + 50 + 9 - 3);

console.log("Abcd");
console.log(44);

let firstName = "Jay";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jay_patel = "jp";
let $function = 89;

let person = "Langoor";
let PI = 3.1415;

let myFirstJob = "Learner";
let myCurrentJob = "Developer";

console.log(myCurrentJob);
*/

/*
//Data Types
let javscriptIsFun = true;
console.log(javscriptIsFun);

console.log(typeof true);
console.log(typeof javscriptIsFun);
console.log(typeof 23);
console.log(typeof "jay");

javscriptIsFun = "yes!";
console.log(typeof javscriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
//Let Const and Var
let age = 45;
age = 47;

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = 'developer';

lastName = "Patel";
console.log(lastName);
*/

//Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
