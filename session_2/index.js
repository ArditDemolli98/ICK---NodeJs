/*
Logical operators:
|| - or (ose)
&& - and (dhe)
!  - not (jo)

Arithmetic operators:
+  mbledhja
-  zbritja
* shumezimi
/ pjestimi
% mbetja

// Comparisson operators
>  me e madhe
>= me e madhe ose e barabarte
<  me e vogel
<= me e vogel ose e barabarte
== e barabarte (loosly equal)
=== e barabarte (strictly equal)
!== jo e barabarte
*/

// console.log("5" > 5);
// console.log(10 % 3);

// console.log((5 + "10") / 3 * "2");

// console.log(5 + 6 + '4' + 9 - 4 - 2);

// console.log(5 === 5);

// let someValue = null;

// console.log(typeof null)

// Type conversion and type coersion

// Falsy values:
// 0
// ""
// null
// undefined

// console.log(Boolean(undefined))

// const budget = 0;

// if(budget) {
//     console.log("Buy something for yourself")
// } else {
//     console.log("You need to save some money first")
// }

// Functions 

// function logInfo(firstName, lastName, age, job){
//     console.log(`
//     ${firstName} ${lastName} 
//     is a ${age} year old 
//     ${job}`)
// }

// function findAge(birthYear, yearNow){
//     // console.log(yearNow - birthYear);
//     return yearNow - birthYear;
// }

// logInfo("Riona", "Hazrolli", 20, "student");

// const ageOfRiona = findAge(2003, 2023)

// console.log(ageOfRiona)


// function toSquare (number) {
//     return number * number;
// }

// console.log(toSquare(5))

// function toPower(number, exponent) {
//     return Math.pow(number, exponent)
// }

// console.log(toPower(2, 2))

// function coffeeMachine(size){
//     const actualSize = size.toLowerCase();
//     if(actualSize == "s"){
//         return "Short espresso";
//     } else if (actualSize == "m") {
//         return "Medium espresso"
//     } else if (actualSize == "l") {
//         return "Large espresso";
//     } else {
//         return "Wrong input";
//     }
// }

// console.log(coffeeMachine("s"));

// Function expression
// const myInfo = function() {
//     console.log("My name is Ardit from function 1");
// }
// myInfo();

// myInfo2();
// // Function declaration
// function myInfo2(){
//     console.log("My name is Ardit from function 2");
// }

// // Arrow function
// const myInfo3 = (name) => {
//     console.log("My name is " + name + " from function 3")
// }
// myInfo3("Ardos");

// const findAge = (birthYear, yearNow) => yearNow - birthYear;

// console.log(findAge(1998, 2023))


// Arrays

const student1 = "Festim";
const student2 = "Elona";
const student3 = "Flamur";
const student4 = "Riona";
const student5 = "Erza";
const student6 = "Arta";
const student7 = "Erand";
const student8 = "Drilon";

const students = ["Festim", "Elona",
"Flamur", "Arta", "Erza", "Riona",
"Erand", "Drilon", 10, true,
 undefined, null];

console.log(students[students.length - 2]);