function describe_city(city_name, country_name) {
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Tokyo", "Japan");
