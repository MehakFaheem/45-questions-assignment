var magicians = ["Aladin", "Ginie", "Kiara", "Fairy", "Maddie"];
var newmagicians = ["Aladin", "Ginie", "Kiara", "Fairy", "Maddie"];
function make_great(newmagicians) {
    for (var i = 0; i < newmagicians.length; i++) {
        newmagicians[i] = newmagicians[i] + " the Great.";
    }
    return { newmagicians: newmagicians };
}
console.log(make_great(newmagicians));
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
