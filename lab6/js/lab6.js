// index.js - Lab 6: Arrays and Objects
// Author: Alexandru Wechsler
// Credits: Cynthia Ramirez, Chat GBT 🤍
// Date: May 12, 2024

// Define Variables + Objects
const myTransport = [" driving", " walking", " rollerblading", " bus"];

var myMainRide = {
  make:"Volvo",
  model:"XC90",
  year:2007,
  name:"Velma", 
  color:"Silver", 
  age: function()
    {return 2024 - this.year;
    }
}

// Output
document.writeln("The following are my main modes of transportation: " + myTransport + "<br>");

document.writeln("Details about my car: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
