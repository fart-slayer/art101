// index.js - Lab 8: Functions + Callbacks
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 14, 2024

//establishing a new function
function even(x){
    return(x % 2 == 0);
}

//test the function
console.log("Is the number 36 even?", even(36));
console.log("Is the number 93 even?", even(93));

//create array
array = [33, 13, 4, 72, 25, 21, 48, 55];
console.log("My array: ", array);

//use the function
let resultOne = array.map(even);
console.log("Is my array even? ", resultOne);

//anonymous function that returns halves of array
let resultTwo = array.map(function(x){
    return (x * 0.5);
})

console.log("Halves of my array: ", resultTwo);

//Task X
let mapResults =
    <><p>My array: ${array.join(", ")}</p>
    <p> Is array even: ${resultOne.join(", ")}</p>
    <p> Halves of my array: ${resultTwo.join(", ")}</p></>;

$("#output").html(mapResults);


