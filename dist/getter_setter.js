"use strict";
// write multiple arguments in constructor in shortway
//* We can use getter and setter methods to control the access and modification of class properties. Getter methods allow us to retrieve the value of a property, while setter methods allow us to set the value of a property with additional logic or validation.
//! V.V.V. Important
//!/* The get method doesn't take any parameters, but the set method takes only one parameter
Object.defineProperty(exports, "__esModule", { value: true });
class Persons {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
        //! it will not work for constructor so we use setter
        // if(this.age > 150 || this.age < 0 ){
        //     throw new Error("age is not valid");
        // }
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not valid");
        }
        return this._age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}.`;
    }
}
const person1 = new Persons("Mohit", ["Reading", "Painting"]);
person1.age = 40; //! ---> Maximum call stack size exceeded error 
//* to prevent stack size we use getter 
console.log(person1.introduce());
console.log(person1.age);
//# sourceMappingURL=getter_setter.js.map