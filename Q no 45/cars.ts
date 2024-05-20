function make_car(manufacturer : string, model : string, ...options: [string, any][]) : Object {
    let car: {[key : string] : any} = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["Year", 2021]));
console.log(make_car("Volkswagen AG", "Porche", ["color", "Black"], ["Year", 2024]));

