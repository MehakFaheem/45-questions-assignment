let current_users : string[] = ["Ayat", "Mehsoom", "Shifa", "ALaya", "Kainat"];
let new_users : string[] = ["Zohra", "mehsoom", "AlaYa", "Lily", "John"];
new_users.forEach((newUser) => {
    if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase()))
    {
        console.log(`${newUser} will need to enter a newusername.`);
    }
    else 
    {
        console.log(`${newUser} is available.`); 
    }
});