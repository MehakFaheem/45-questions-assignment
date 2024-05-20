let magicians : string[] = ["Aladin", "Ginie", "Kiara", "Fairy", "Maddie"];
let newmagicians : string[] = ["Aladin", "Ginie", "Kiara", "Fairy", "Maddie"];
function make_great(newmagicians: string[])
{
    for (let i=0; i<newmagicians.length; i++)
        {
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

