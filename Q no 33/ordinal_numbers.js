"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((numbers) => {
    if (numbers == 1) {
        console.log(`${numbers}st`);
    }
    else if (numbers == 2) {
        console.log(`${numbers}nd`);
    }
    else if (numbers == 3) {
        console.log(`${numbers}rd`);
    }
    else {
        console.log(`${numbers}th`);
    }
});
