"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persons {
    name;
    age;
    hobbies;
    // hobbies: string[];
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
        //! this.hobbies = hobbies; --> can't accessible due to privacy
    }
    introduce() {
        // return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} and I'm in grade ${this.grade}`;
        //* OR 
        return `${super.introduce()} and I'm in grade ${this.grade}`;
        //* return this.age; ---> Accessible
        //* return this.hibbies; ---> Not Accessible
    }
}
const person1 = new Persons("Mohit", 20, ["Reading", "Painting"]);
const students1 = new Student("Omkar", 20, ["Writing", "Coding"], 12);
// console.log(person1.hobbies)  ---> can't accessible
//! console.log(person1.age); ---> can't accessible outside the class bcoz it's protected
// console.log(students1.hobbies); ---> can't accessible
//# sourceMappingURL=accessModifiers.js.map