function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I LOve Typescript"; }
    console.log("The size of the T.shirt is \"".concat(size, "\" and the message that will be printed on it is \"").concat(text, "\""));
}
make_shirt();
make_shirt("medium");
make_shirt("Small", "Coding is fun!!!!");
