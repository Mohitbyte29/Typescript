"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Deepanshu",
    age: 24,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
};
// Todo Accessing the object data
console.log(person.address.city);
// Todo updating object properties
person.address.country = "China";
console.log(person.address.country);
const product = {
    name: "Laptop",
    price: 50000,
    quantity: 5
};
//# sourceMappingURL=object.js.map