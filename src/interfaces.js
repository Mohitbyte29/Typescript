//* By type aliases
var greet = {
    name: "Mohit",
    age: 20
};
var Greets = {
    name: "Vinod",
    age: 40
};
var product1 = {
    name: "Mohit",
    price: 10000,
    quantity: 100
};
var calculateTotalPrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
