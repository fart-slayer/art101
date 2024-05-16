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
let result =array.map(even);
console.log("Is my array even? ", result);

//anonymous function that returns halves of array
array.map(function(x){
    return (x ** 0.5);
})
console.log("Create halves of my array: ", result);

// Use jQuery to select the element by its ID and set the HTML content



