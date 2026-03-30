class Persons{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name:string, age:number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`;
    }
}

//! Inheritance
class Student extends Persons{
    grade: number;
    constructor(name: string, age:number, hobbies: string[], grade: number){
        super(name, age, hobbies);
        this.grade = grade;
    }

    introduce(): string {
        // return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} and I'm in grade ${this.grade}`;
        //* OR 
        return `${super.introduce()} and I'm in grade ${this.grade}`;
    }
}

const person1: Persons = new Persons("Mohit", 20,["Reading", "Painting"]);
const person2: Persons = new Persons("Sachin", 22,["Music", "Painting"]);
const students1: Persons = new Student("Omkar", 20,["Writing", "Coding"], 12);

console.log(students1.introduce());

