"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Mohit",
    age: 29,
    greet: (country) => `Welcome my name is ${student1.name} and my age is ${student1.age}, I'm from ${country}`
};
const student2 = {
    name: "Virat",
    age: 35,
    greet: (country) => `Welcome my name is ${student2.name} and my age is ${student2.age}, I'm from ${country}`
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome my name is ${name} and my age is ${age}`;
};
console.log(student1.greet('India'));
console.log(student2.greet('Bhutan'));
//# sourceMappingURL=callSignature.js.map