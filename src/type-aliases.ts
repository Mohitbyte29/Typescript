type Person = {
    name: string;
    age:number;
    isStudent:boolean;
    class?:string //!Optional property
    address: {city: string; country: string}
}

const person:Person = {
    name: "Deepanshu",
    age: 24,
    isStudent:true,
    address:{
        city:"Pune",
        country:"India"
    }
}

const person1:Person = {
    name: "Mohit",
    age: 20,
    isStudent:true,
    address:{
        city:"Delhi",
        country:"India"
    }
}

//! Calculate total price 

type Product = {
    name:string;
    price:number;
    quantity:number
}

const product:Product = {
    name: "Laptop",
    price: 50000,
    quantity: 5
}

const calculateTotalPrice = (product:Product) => {
    return product.price * product.quantity;
}

console.log(calculateTotalPrice(product));

