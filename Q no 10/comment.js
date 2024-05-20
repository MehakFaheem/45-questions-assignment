"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//q no 2
var personname = "Eric"; //name is stored in the variblae prsonname
console.log("Hello " + personname + " , would you like to lear some python today?"); //printing the msg
//q no 3
var pname = "Mehak faheem";
var lowercase = pname.toLowerCase(); //converts to lower case
console.log("Lowercase: " + lowercase);
var uppercase = pname.toUpperCase(); //converts to upper case
console.log("Uppercase: " + uppercase);
var titlecase = pname.charAt(0).toUpperCase(); //conerts into title case
for (var i = 1; i < pname.length; i++) {
    var char = pname.charAt(i);
    {
        if (pname.charAt(i - 1) === " ") {
            titlecase += char.toUpperCase();
        }
        else {
            titlecase += char.toLowerCase();
        }
    }
}
console.log("Title case: " + titlecase);
