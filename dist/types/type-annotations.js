"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myFavNum = 5;
let myAge = 29;
let pi = 3.147;
let negVal = -5;
//! give error -> let invalidResult:number = myAge + " years";
let computedVal = Math.sqrt(16);
//* String Type
let myFullName = "Mohit Upadhyay";
let myFirstName = "Mohit";
let myLastName = "Upadhyay";
myFullName = myFirstName + myLastName;
console.log(myFullName);
let sentence = "Welcome to my world!";
let sentenceLength = sentence.length;
console.log(sentenceLength);
let text = "Hello Sir!";
let uppercaseText = text.toUpperCase();
let lowercaseText = text.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
let longText = "Welcome to the Jungle";
let shortText = longText.substring(0, 11);
console.log(shortText);
let str1 = "Compliment";
let str2 = "Complimant";
// Without function
//! let areEqual:boolean = str1 === str2;
const areEqual = (str1, str2) => {
    let comparison = str1.localeCompare(str2);
    if (comparison == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(areEqual(str1, str2));
//* Boolean Type
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5));
function isDivisibleBy4and8(a) {
    return (a % 4 === 0 && a % 8 === 0);
}
console.log(isDivisibleBy4and8(20));
console.log(isDivisibleBy4and8(24));
// const maxNumber = Number.MAX_SAFE_INTEGER;
let bigNumber = 9007199254740993n;
console.log(bigNumber);
let anotherBIgNumber = BigInt("9007199254740995");
console.log(anotherBIgNumber);
//* any type
let myfavNum = 5;
myfavNum = "Mohit";
myfavNum = true;
//* Usecases 
//! 1. ---> Working with Dynamic Data
//! 2. ---> Migration from JavaScript
//* Unknown type
//! The unknown type is a safer alternative to any because it still enforces type checking and type safety
//! Variables of this type can hold values of any type, but you must perform type checks or type assertions before using them in specific ways
//! Type-safety
let myfavNum2;
myfavNum2 = true;
myfavNum2 = "Mohit";
myfavNum2 = 60;
if (typeof (myfavNum2) === "number") {
    console.log(myfavNum2 + 39);
}
else if (typeof (myfavNum2) === "boolean") {
    console.log(myfavNum2);
}
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}
async function processData() {
    const student = [34, 53, 29];
    const response = await fetchData();
    if (typeof response === 'object') {
        student.forEach((element) => {
            console.log(element);
        });
    }
}
processData();
//# sourceMappingURL=type-annotations.js.map