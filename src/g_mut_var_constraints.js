"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(5, "Mohit");
const result2 = add("Hello", 5);
//! second wala nhi chalega iss method se
// function add(a: number, b:string) : void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const result1 : void = add(5, "Mohit");
// const result2 : void = add("Hello", 5);
//! to isliye hum generics use krte h
//# sourceMappingURL=g_mut_var_constraints.js.map