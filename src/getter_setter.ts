// write multiple arguments in constructor in shortway
//* We can use getter and setter methods to control the access and modification of class properties. Getter methods allow us to retrieve the value of a property, while setter methods allow us to set the value of a property with additional logic or validation.
//! V.V.V. Important
//!/* The get method doesn't take any parameters, but the set method takes only one parameter

class Persons{
    private _age:number | undefined;
    constructor(public name:string, protected hobbies: string[]){
        //! it will not work for constructor so we use setter
        // if(this.age > 150 || this.age < 0 ){
        //     throw new Error("age is not valid");
        // }
    }
    public set age(age:number){
        if(age > 150 || age < 0 ){
            throw new Error("age is not valid");
        }
        this._age = age;
    }

    public get age(){
        if(this._age === undefined ){
            throw new Error("age is not valid");
        }
        return this._age;
    }

    introduce(): string{
        return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}.`;
    }
}

const person1: Persons = new Persons("Mohit",["Reading", "Painting"]);
person1.age = 40; //! ---> Maximum call stack size exceeded error 
//* to prevent stack size we use getter 
console.log(person1.introduce());
console.log(person1.age);


