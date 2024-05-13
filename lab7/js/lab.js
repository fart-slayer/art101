// index.js - Lab 7: Functions
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 12, 2024

// Define Variables + Objects

// Functions
    //A function that takes input and sorts the letters
function sortUserName() {
    var userName = window.prompt("Hello! Please tell me your name so I can fix it.");
    console.log ("Username: ", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("Name of array: "), nameArray);
    //sort the array
    var sortNameArray = nameArray.sort();
    console.log("Sorted nameArray variable: ", sortNameArray);
    //join array back into string
    var nameSorted = sortNameArray.join('');
    console.log("Name sorted: ", nameSorted);
    return nameSorted;
}

// Output
document.writeln("Here is your fixed name:",
    sortUserName(), "<br>");