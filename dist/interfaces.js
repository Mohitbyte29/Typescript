"use strict";
//* By type aliases
//* done
Object.defineProperty(exports, "__esModule", { value: true });
const greet = {
    name: "Mohit",
    age: 20
};
const Greets = {
    name: "Vinod",
    age: 40
};
const product1 = {
    name: "Mohit",
    price: 10000,
    quantity: 100
};
const calculateTotalPrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
//# sourceMappingURL=interfaces.js.map