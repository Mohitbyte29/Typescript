"use strict";
// function greet(name:string, id:number){
//     console.log(`Welcome, Your name is ${name} and your ID is ${id}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// greet("Mohit", 102);
//! Arrow functions 
let greet = (name, id) => {
    console.log(`Welcome, Your name is ${name} and your ID is ${id}`);
};
greet("Mohit", 34);
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12366321"));
let marks = [34, 32, 82, 19, 30];
const calculateAverage = (marks) => {
    let totalMarks = marks.reduce((arr, curr) => {
        return arr + curr;
    }, 0);
    return totalMarks / marks.length;
};
console.log(calculateAverage(marks));
const findMaxValue = (marks) => {
    let maxNum = 0;
    marks.forEach((elem) => {
        if (elem > maxNum) {
            maxNum = elem;
        }
    });
    return maxNum;
};
console.log(findMaxValue(marks));
//# sourceMappingURL=functions-intro.js.map