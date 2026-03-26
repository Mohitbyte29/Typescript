"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["apple", "mango", "banana", "orange"];
//! a) adding elements to an array using push:
const newUpdatedFruits = fruits.push("kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
const lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
//* Iterating over elements
//! For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
for (const i in fruits) {
    console.log(fruits[i]);
}
fruits.forEach((currVal) => console.log(currVal));
//* Map and filter methods
const numbers = [2, 5, 8, 3, 8];
const squareData = numbers.map((currVal) => currVal * currVal);
console.log(squareData);
const numberToString = numbers.map((currElem) => currElem.toString());
console.log(numberToString);
const filterNumber = numbers.filter((currElem) => currElem % 2 === 0);
console.log(filterNumber);
const names = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const upperCaseName = names.map((Element) => Element.toUpperCase());
console.log(upperCaseName);
const filterName = names.filter((Element) => Element.length > 4);
console.log(filterName);
const startsWithaName = names.filter((Element) => Element.startsWith('A'));
console.log(startsWithaName);
//# sourceMappingURL=array_operations.js.map