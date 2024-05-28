// index.js - Lab 12: Conditionals
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 28, 2024

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
       return "Gryffandor" 
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
};

var myButton = document.getElementById("submit");
myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The sorting hat has sorted you into " + house + "! </p>";
    document.getElementById("output").innerHTML = newText;
});
