// index.js - Lab 8: Functions + Callbacks
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 14, 2024

//example of how code works:
//inputString = "Wow, I sure hate cats!";
//meowify(inputString);
//Output: ['meow', 'meow', 'meow', 'meow', 'meow']

//create array (I am realizing I did strings instead of numbers)
var coolArray = ("haha", "omg", "tgif", "ihop");

//function that turns all words into meows
function meowify() {
    var opinion = window.prompt("Hello! Please tell me your opinion about cats.");
    console.log ("What you think about cats: ", opinion);
    // Split the input string into an array of words
    let words = inputString.split(" ");

    // Iterate through each word and replace it with "meow"
    for (let i = 0; i < words.length; i++) {
        words[i] = "meow";
    }
    // Join the array of "meow" words back into a string
    let meowString = words.join(" ");

    return "What cats think about you: ", meowString;
}

//New anonymous function
coolArray.map(function woofify(coolArray){
    // Split the input string into an array of words
    let words = inputString.split(" ");

    // Iterate through each word and replace it with "woof"
    for (let i = 0; i < words.length; i++) {
        words[i] = "woof";
    }
    // Join the array of "woof" words back into a string
    let woofString = words.join(" ");

    return woofString;
})

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html("What you think about cats: " + opinion);
$("#output").html("What cats think about you: " + meowify(opinion));
$("#output").html("Here are some words dogs know: " + coolArray.join());
$("#output").html("Here is how they pronounce them: " + coolArray.map(woofify).join());


