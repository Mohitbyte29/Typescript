"use strict";
// fun define
Object.defineProperty(exports, "__esModule", { value: true });
//! default
const greet3 = (name, id = 1) => {
    return `Welcomem ${name} and ${id}`;
};
console.log(greet3("Mohit"));
//! optional parameter
const greet4 = (name, id) => {
    if (id) {
        return `Welcome ${name} and ${id}`;
    }
    else {
        return `Welcome ${name}`;
    }
};
const emp = greet4("Mohit");
const emp1 = greet4("Mohit", 45);
console.log(emp);
console.log(emp1);
//! In optonal parameter ---> We get id undefined
//# sourceMappingURL=function_default_optional.js.map