const inputValue : (value:string | number | boolean) => void = (value:string | number | boolean) : void => {}

const userInput : (value:string | number) => string | number = (value:string | number) : string | number => {
    if(typeof(value) === 'number'){
        return value * 2;
    }
    else if(typeof(value) === 'string'){
        return value.toUpperCase();
    }else{
        throw new Error('Invalid input data');
    }
}

console.log(userInput(10));
console.log(userInput("subscribe"));

//! Intersection

type Person = {
    name: string;
    age: number
}

type Employee = {
    emp_id : number;
    department: string
}

type EmployeeDetails = Person & Employee 

const employee:EmployeeDetails = {
    name:'Mohit',
    age: 26,
    emp_id : 1111,
    department: 'IT'
}

type User = {
    name: string,
    age: number,
    license: boolean
}

type MyLocation = {
    city: string,
    pincode: number
}

const user : User = {name: 'Mohit', age: 25, license: true}
const myLocation : MyLocation = {city: 'New Delhi', pincode: 110002}

const createUserProfile = (user:User, location:MyLocation) : User & MyLocation => {
    return {
        ...user,
        ...location
    }
}

//* call
const myCompleteInfo : User & MyLocation = createUserProfile(user, myLocation)
console.log(myCompleteInfo)

