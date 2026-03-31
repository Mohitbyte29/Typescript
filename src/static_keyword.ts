//! Without getter and setter method
class Person{
    constructor(public name: string){}
}

// Person.name = 'Mohit' ---> Readonly property
//* Static methods and properties belong to the class itself rather than to instance of the class. By making and properties static, We can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.

class MathOperations{
    public static PI: number = Math.PI;
    public static add(num1: number, num2: number): number{
        return num1 + num2;
    }
    public static sub(num1: number, num2: number): number{
        return num1 - num2;
    }
    public static mul(num1: number, num2: number): number{
        return num1 * num2;
    }
    public static div(num1: number, num2: number): number{
        return num1 / num2;
    }
    public static mod(num1: number, num2: number): number{
        return num1 % num2;
    }
}

console.log(MathOperations.PI)
console.log(MathOperations.add(10, 5));
console.log(MathOperations.sub(10, 5));
console.log(MathOperations.mul(10, 5));
console.log(MathOperations.div(10, 5));
console.log(MathOperations.mod(11, 5));

