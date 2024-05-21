// index.js - Lab 9: Libraries and jQuery
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 20, 2024

//CHALLENGE
//Using jQuery add buttons to HTML
$("#challenge").append("<button id='button-challenge'>Make Pretty!</button>"); 
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//PROBLEMS
//Using jQuery add buttons to HTML
$("#problems").append("<button id='button-problems'>Make Pretty!</button>"); 
// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

//RESULTS
//Using jQuery add buttons to HTML
$("#results").append("<button id='button-results'>Make Pretty!</button>"); 
// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

