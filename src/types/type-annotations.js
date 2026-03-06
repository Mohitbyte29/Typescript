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
//# sourceMappingURL=type-annotations.js.map

var sum2 = bigNumber + anotherBIgNumber;
console.log("sum2 " + sum2);


