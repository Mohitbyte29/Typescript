// function greet(name:string, id:number){
//     console.log(`Welcome, Your name is ${name} and your ID is ${id}`);
// }

// greet("Mohit", 102);

//! Arrow functions 
let greet = (name:string, id:number) => {
    console.log(`Welcome, Your name is ${name} and your ID is ${id}`)
} 

greet("Mohit", 34);


const isPalindrome = (palin:string):boolean => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
}

console.log(isPalindrome("12366321"));

let marks = [34, 32, 82, 19, 30];
const calculateAverage = (marks:number[]):number => {
    let totalMarks = marks.reduce((arr:number, curr:number) => {
        return arr + curr;
    }, 0)
    return totalMarks/marks.length;
}

console.log(calculateAverage(marks));

const findMaxValue = (marks:number[]):number => {
    let maxNum = 0;
    marks.forEach((elem:number) => {
        if(elem > maxNum){
            maxNum = elem;
        }
    })
    return maxNum;
}

console.log(findMaxValue(marks));



