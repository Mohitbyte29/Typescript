"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`;
    }
}
//! Inheritance
class Student extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        // return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} and I'm in grade ${this.grade}`;
        //* OR 
        return `${super.introduce()} and I'm in grade ${this.grade}`;
    }
}
const person1 = new Persons("Mohit", 20, ["Reading", "Painting"]);
const person2 = new Persons("Sachin", 22, ["Music", "Painting"]);
const students1 = new Student("Omkar", 20, ["Writing", "Coding"], 12);
console.log(students1.introduce());
//# sourceMappingURL=inheritance.js.map