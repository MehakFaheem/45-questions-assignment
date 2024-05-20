"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ayat", "Mehsoom", "Shifa", "ALaya", "Kainat"];
let new_users = ["Zohra", "mehsoom", "AlaYa", "Lily", "John"];
new_users.forEach((newUser) => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a newusername.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
