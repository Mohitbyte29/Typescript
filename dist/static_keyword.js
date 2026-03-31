"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Without getter and setter method
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Person.name = 'Mohit' ---> Readonly property
//* Static methods and properties belong to the class itself rather than to instance of the class. By making and properties static, We can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.
class MathOperations {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mul(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
    static mod(num1, num2) {
        return num1 % num2;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(10, 5));
console.log(MathOperations.sub(10, 5));
console.log(MathOperations.mul(10, 5));
console.log(MathOperations.div(10, 5));
console.log(MathOperations.mod(11, 5));
//# sourceMappingURL=static_keyword.js.map