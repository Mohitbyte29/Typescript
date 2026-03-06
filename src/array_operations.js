var fruits = ["apple", "mango", "banana", "orange"];
//! a) adding elements to an array using push:
var newUpdatedFruits = fruits.push("kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
//* Iterating over elements
//! For loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
for (var i in fruits) {
    console.log(fruits[i]);
}
fruits.forEach(function (currVal) { return console.log(currVal); });
//* Map and filter methods
var numbers = [2, 5, 8, 3, 8];
var squareData = numbers.map(function (currVal) { return currVal * currVal; });
console.log(squareData);
var numberToString = numbers.map(function (currElem) { return currElem.toString(); });
console.log(numberToString);
var filterNumber = numbers.filter(function (currElem) { return currElem % 2 === 0; });
console.log(filterNumber);
var names = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var upperCaseName = names.map(function (Element) { return Element.toUpperCase(); });
console.log(upperCaseName);
var filterName = names.filter(function (Element) { return Element.length > 4; });
console.log(filterName);
var startsWithaName = names.filter(function (Element) { return Element.startsWith('A'); });
console.log(startsWithaName);
