let usernames : string[] = ["Admin", "Ayat", "Mehak", "Shifa", "Zohra"];
for(let i = 0; i <usernames.length; i++)
    {
    if (usernames.length === 0)
    {
            console.log("We need to find some users! ");     
    }
else 
    {
    usernames = [];
    console.log("All users have been removed " + usernames.length);    
    }
}