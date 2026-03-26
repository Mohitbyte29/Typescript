"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
};
const person1 = ["Mohit", 20, true];
const person2 = ["Vinod", 15, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
//# sourceMappingURL=tuples.js.map