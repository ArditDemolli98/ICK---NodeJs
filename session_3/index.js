// Arrays
/*
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
 undefined, null, [23, 60, 70]];

console.log(students[students.length - 1]);

const cars = ["BMW", "Mercedes", "Audi", "Volkswagen"];

// Per me e gjet indeksin e ndonje elementi
console.log(cars.indexOf("Audi"));

// Per me e kqyr a eshte i perfshire nje element
console.log(cars.includes("Mercedes"));

// Per me e shtu nje element ne fund te arrayt
cars.push("Range Rover");

// Per me e shtu nje element ne fillim te arrayt
cars.unshift("Lamborghini");

// Per me e fshi elementin e fundit te nje array
cars.pop();

// Per me e fshi elementin e pare te nje array
cars.shift();

console.log(cars);
*/
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but contains one "needle".
After your function finds the needle it should return a message (as a string) that says: 
"found the needle at position " plus the index it found the needle.

Test Case(Input --> Output)  
["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"] --> "found the needle at position 5"
*/

// const junk = ["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"];


// function findNeedle(array){ 
//     console.log("found the needle at position " + array.indexOf("needle"));
// }

// findNeedle(junk);

// function findNeedle(){
//     const junk = ["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"];
//     console.log("found the needle at position " + junk.indexOf("needle"));
// }

// findNeedle()
/*
const person = [
    "Ardit",
    "Demolli",
    1998,
    "Programmer",
    ["JavaScript", "Java", "PHP"]
]
// console.log(person[4])

const personObj = {
    firstName: "Ardit",
    lastName: "Demolli",
    birthYear: 1998,
    job: "Programmer",
    languages: ["JavaScript", "Java", "PHP"],

    sleep: function(){
        console.log("Sleeping...😴");
    },
    drive: function(){
        console.log("Driving...🚘");
    }
}

// Ardit Demolli is a 25 year old programmer
console.log(`${personObj.firstName} ${personObj.lastName} is a ${2023 - personObj.birthYear} year old ${personObj.job}`);

// Array me objekte

const students = [
    {
        firstName: "Drilon",
        lastName: "Gallapeni",
        age: 19
    },
    {
        firstName: "Erand",
        lastName: "Gallapeni",
        age: 19
    },
    {
        firstName: "Erza",
        lastName: "Gashi",
        age: 24  
    },
]


Detyre:
Krijoni nje objekt coffeeMachine me properties:
brand,   model,      color
Gaggia, Classic Pro, Silver

Dhe me metodat:
makeCoffee, 
about (This is a Gaggia Classic Pro Silver model) 


const coffeeMachine = {
    brand: "Gaggia",
    model: "Classic",
    color: "Black",

    about: function(){
        return `This is a ${this.brand} ${this.model} ${this.color} model`
    },
    coffeeMachine: function (size){
        const actualSize = size.toLowerCase();
        if(actualSize == "s"){
            return "Short espresso";
        } else if (actualSize == "m") {
            return "Medium espresso"
        } else if (actualSize == "l") {
            return "Large espresso";
        } else {
            return "Wrong input";
        }
    }
}
coffeeMachine.model = "Classic Pro";
coffeeMachine.brand = "Lavazza";

coffeeMachine.price = "900 Euro"

console.log(coffeeMachine["price"])
*/

//Loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//DRY - Don't repeat yourself

const students = ["Festim", "Elona",
"Flamur", "Arta", "Erza", "Riona",
"Erand", "Drilon", "Ardit"];


for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])