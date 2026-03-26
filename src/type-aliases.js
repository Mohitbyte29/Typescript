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
const person1 = {
    name: "Mohit",
    age: 20,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
const product = {
    name: "Laptop",
    price: 50000,
    quantity: 5
};
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
//# sourceMappingURL=type-aliases.js.map