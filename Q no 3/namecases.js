"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// tsc personalmsg.ts && node personalmsg.js 
let pname = "Mehak faheem";
let lowercase = pname.toLowerCase();
console.log("Lowercase: " + lowercase);
let uppercase = pname.toUpperCase();
console.log("Uppercase: " + uppercase);
let titlecase = pname.charAt(0).toUpperCase();
for (let i = 1; i < pname.length; i++) {
    let char = pname.charAt(i);
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
