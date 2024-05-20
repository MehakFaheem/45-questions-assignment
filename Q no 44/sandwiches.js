function make_sandwiche() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich will have: ");
    items.forEach(function (items) { return console.log("-".concat(items)); });
    {
    }
}
make_sandwiche("Ham", "Butter", "Cheese");
make_sandwiche("Jam", "eggs", "Avocado");
make_sandwiche("mayo", "Ketchup", "Sprouts");
