function city_country(city, country) {
    return "\"".concat(city, "\" \"").concat(country, "\"");
}
console.log(city_country("Karachi,", "Pakistan"));
console.log(city_country("UAE,", "Dubai"));
console.log(city_country("Cairo,", "Egypt"));
