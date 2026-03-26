//* By type aliases

type greets = {
    name: string,
    age: number
}

const greet : greets = {
    name: "Mohit",
    age: 20
}

//* By Interfaces

interface Greet {
    name: string;
    age: number;
}

const Greets : Greet = {
    name: "Vinod",
    age: 40
}

interface Products{
    name: string;
    price: number;
    quantity: number
}

const product1 : Products = {
    name: "Mohit",
    price: 10000,
    quantity: 100
}

const calculateTotalPrice = (product : Products) : number => {
    const {price, quantity} = product;
    return price * quantity;
}
console.log(calculateTotalPrice(product1))

