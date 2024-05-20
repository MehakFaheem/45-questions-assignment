/*Q no 10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/
//q no 2
var personname = "Eric"; //name is stored in the variable person name
console.log("Hello " + personname + " , would you like to lear some python today?"); //printing the msg

//q no 3
var pname = "Mehak faheem";
var lowercase = pname.toLowerCase(); //converts to lower case
console.log("Lowercase: " + lowercase); 
var uppercase = pname.toUpperCase(); //converts to upper case
console.log("Uppercase: " + uppercase);
var titlecase = pname.charAt(0).toUpperCase(); //converts into title case
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
