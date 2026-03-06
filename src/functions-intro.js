// function greet(name:string, id:number){
//     console.log(`Welcome, Your name is ${name} and your ID is ${id}`);
// }
// greet("Mohit", 102);
//! Arrow functions 
var greet = function (name, id) {
    console.log("Welcome, Your name is ".concat(name, " and your ID is ").concat(id));
};
greet("Mohit", 34);
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12366321"));
var marks = [34, 32, 82, 19, 30];
var calculateAverage = function (marks) {
    var totalMarks = marks.reduce(function (arr, curr) {
        return arr + curr;
    }, 0);
    return totalMarks / marks.length;
};
console.log(calculateAverage(marks));
var findMaxValue = function (marks) {
    var maxNum = 0;
    marks.forEach(function (elem) {
        if (elem > maxNum) {
            maxNum = elem;
        }
    });
    return maxNum;
};
console.log(findMaxValue(marks));
