/* Q no 43
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
newmagicians[i] = newmagicians[i] + " the Great.";     
        }
        return{newmagicians};
}
console.log(make_great(newmagicians));

function show_magicians(magicians : string[])
{
    magicians.forEach( magician => {
        console.log(magician);
    })
}
show_magicians(magicians);

