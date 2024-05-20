function make_album(artist_name, album_title) {
    return { artist_name: artist_name, album_title: album_title };
}
console.log(make_album("Taylor swift", "Midnight"));
console.log(make_album("Olivia Rodrigo", "Guts"));
console.log(make_album("Ed sheeren", "+"));
function make_album2(artist_name, album_title, no_of_tracks) {
    return { artist_name: artist_name, album_title: album_title, no_of_tracks: no_of_tracks };
}
console.log(make_album2("Sabrina", "Evolution", 14));
console.log(make_album2("Adele", "19", 20));
console.log(make_album2("bruno mars", "calling", 10));
