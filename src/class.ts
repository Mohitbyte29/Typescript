class Persons{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name:string, age:number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

const person1: Persons = new Persons("Mohit", 20,["Reading", "Painting"]);
const person2: Persons = new Persons("Sachin", 22,["Music", "Painting"]);
const person3: Persons = new Persons("Omkar", 20,["Writing", "Coding"]);

