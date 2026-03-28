"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputValue = (value) => { };
const userInput = (value) => {
    if (typeof (value) === 'number') {
        return value * 2;
    }
    else if (typeof (value) === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input data');
    }
};
console.log(userInput(10));
console.log(userInput("subscribe"));
const employee = {
    name: 'Mohit',
    age: 26,
    emp_id: 1111,
    department: 'IT'
};
const user = { name: 'Mohit', age: 25, license: true };
const myLocation = { city: 'New Delhi', pincode: 110002 };
const createUserProfile = (user, location) => {
    return {
        ...user,
        ...location
    };
};
//* call
const myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
//# sourceMappingURL=union_intersection.js.map