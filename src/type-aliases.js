var person = {
    name: "Deepanshu",
    age: 24,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
};
var person1 = {
    name: "Mohit",
    age: 20,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
var product = {
    name: "Laptop",
    price: 50000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
