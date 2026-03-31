"use strict";
//* Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
//* abstract class cannot be instantiated
//* abstract classes focus on class inheritance and sharing common functionality,
//* Whereas the useContext hook in React focuses on managing global state and allowing components to consume thau state.
Object.defineProperty(exports, "__esModule", { value: true });
// interface PerObj{
//     name: string;
//     age: number
// }
// class Person: { name: string; age: number} = {
//     name: "Mohit",
//     age: 20
// }
// //! Person 2 aur 3 ke liye name: string; age: number dobara likhna pad rha h 
// class Person2: { name: string; age: number} = {
//     name: "Rahul",
//     age: 22
// }
// class Person3: { name: string; age: number} = {
//     name: "Jatin",
//     age: 21
// }
//     abstract class PerObj{
//         name: string;
//         age: number
//     }
// class Person: PerObj = {
//     name: "Mohit",
//     age: 20
// }
// class Person2: PerObj = {
//     name: "Rahul",
//     age: 22
// }
// class Person3: PerObj = {
//     name: "Jatin",
//     age: 21
// }
//* ---> Shape Hierarchy
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    // displayArea = () => void = () : void => (
    //! OR
    displayArea = () => (console.log(`This is a ${this.color} circle with radius ${this.radius}.`));
}
const circle = new Circle("red", 32);
console.log(circle.calculateArea());
circle.displayArea;
class Rectangle extends Shape {
    color;
    length;
    breadth;
    constructor(color, length, breadth) {
        super(color);
        this.color = color;
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea() {
        return this.length * this.breadth;
    }
    displayArea = () => (console.log(`This is a ${this.color} rectangle with length ${this.length} and breadth ${this.breadth}.`));
}
const rectangle = new Rectangle("Blue", 20, 20);
console.log(rectangle.calculateArea());
class Square extends Shape {
    color;
    side;
    constructor(color, side) {
        super(color);
        this.color = color;
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    displayArea = () => (console.log(`This is a ${this.color} square with side ${this.side}`));
}
const square = new Square("Yellow", 16);
console.log(square.calculateArea());
//# sourceMappingURL=abstractClasses.js.map