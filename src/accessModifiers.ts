class Persons{
    public name: string;
    protected age: number;
    private hobbies: string[];
    // hobbies: string[];

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
        //! this.hobbies = hobbies; --> can't accessible due to privacy
    }

    introduce(): string {
        // return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} and I'm in grade ${this.grade}`;
        //* OR 
        return `${super.introduce()} and I'm in grade ${this.grade}`;
        //* return this.age; ---> Accessible
        //* return this.hibbies; ---> Not Accessible
    }
}

const person1: Persons = new Persons("Mohit", 20,["Reading", "Painting"]);
const students1: Student = new Student("Omkar", 20,["Writing", "Coding"], 12);
// console.log(person1.hobbies)  ---> can't accessible
//! console.log(person1.age); ---> can't accessible outside the class bcoz it's protected

// console.log(students1.hobbies); ---> can't accessible