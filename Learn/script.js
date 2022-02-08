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

/*
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
*/

/*
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
// String and Template Litral
const firstName = "Jay";
const job = "Developer";
const birthYear = 1991;
const year = 2022;

const jay =
  "I'm " + firstName + ", a " + (year - birthYear) + " Years old " + job + "!";
const jayLiteral = `I'm ${firstName}, a ${year - birthYear} Years old ${job}!`;
console.log(jay);
console.log(jayLiteral);

console.log(`Just a regular string...`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

//if else
const age = 15;

if (age >= 18) {
  console.log("You can start Driving Licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);