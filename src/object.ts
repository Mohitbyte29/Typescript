const person:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        country:string
    }
} = {
    name: "Deepanshu",
    age: 24,
    isStudent:true,
    address:{
        city:"Pune",
        country:"India"
    }
}

// Todo Accessing the object data

console.log(person.address.city)

// Todo updating object properties
person.address.country = "China"
console.log(person.address.country);

const product:{
    name:string;
    price:number;
    quantity:number
} = {
    name: "Laptop",
    price: 50000,
    quantity: 5
}


