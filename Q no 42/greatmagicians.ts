let magicians : string[] = ["Aladin", "Ginie", "Kiara", "Fairy", "Maddie"];
function make_great(magicians: string[])
{
    for (let i=0; i<magicians.length; i++)
        {
            magicians[i] = magicians[i] + " the Great.";     
        }
}
make_great(magicians);
function show_magicians(magicians : string[])
{
    magicians.forEach( magician => {
        console.log(magician);
    })
}
show_magicians(magicians);