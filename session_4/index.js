// 3 loops kryesor
// for loop
// while loop
// do while loop

const someNumbers = [40, 79, 202, 109, 555, 4321, 809, 70, 80];

let result =0;
for(let i = 0; i < someNumbers.length; i++){
    // result = result + someNumbers[i];
    result += someNumbers[i];
}
const average=result/someNumbers.length;
// console.log(average);


const players = ["Messi", "Ronaldo", "Lewandowski", "Zidane", "Beckham"]

for(let i = 0; i < players.length; i++) {
    if(players[i] === "Ronaldo") continue;
    console.log(players[i]);
}

// Nested loop
for(let i = 1; i <= 10; i++){
    console.log("-----------");
    for(let e = 1; e <=10; e++){
        console.log(`${i} X ${e} = ${i * e}`);
    }
}

// While loop
let i = 0;
while(i < 10){
    console.log("Ardos");
    i++
}

// Do while loop
let e = 0;
do{
    console.log("Ardos");
    i++
} while (e < 10);