// Variables
const firstName = "Ardit";
const lastName = "Demolli";
const birthYear = 1998;


// console.log(firstName);
// console.log(lastName);
// console.log(birthYear);

// Single
// line
// comments

/* 
Multiple line 
comments
here
*/

/* 
Primitive Data Types
1) Number
2) String
3) Boolean
4) Undefined
5) Null
*/

// const age = 25;

// let age2 = 25;

// age2 = "Njezet e pese";

// console.log(age2);

// var something = "Just something";

// console.log(something);


// let age = -200;

// If/else 
// if(age >= 18){
//     console.log("Keni te drejte votimi");
// }else if(age > 0){
//     console.log("Nuk i permbushni kushtet per votim");
//     console.log(`Duhet te prisni edhe ${18 - age} vite`);
// }else {
//     console.log("Mosha e shtypur gabim");
// }

// Ternary operator if else alternative
// const votimi = age >= 18 ? "Keni te drejte votimi" : "Nuk keni te drejte votimi";

// console.log(votimi);
const piket = -160;

if (piket > 100 || piket < 0 ) {
    console.log("Piket jane dhene gabim");
} else if (piket > 90) {
    console.log("Nota juaj eshte 10");
} else if (piket > 80) {
    console.log("Nota juaj eshte 9");
} else if (piket > 70) {
    console.log("Nota juaj eshte 8");
} else if (piket > 60) {
    console.log("Nota juaj eshte 7");
} else if (piket > 50) {
    console.log("Nota juaj eshte 6");
} else {
    console.log("Ju keni deshtuar");
}

// Logical operators

/* 
&& and
|| or
!  not
*/

const hasDriversLicense = true;
const hasGoodVision = false;

if(hasDriversLicense && !hasGoodVision){
    console.log("You can drive the car");
} else {
    console.log("You can't drive");
}