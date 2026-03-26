"use strict";
//! By Union --> It can fail for more than 2 dataTypes
Object.defineProperty(exports, "__esModule", { value: true });
// function logAndReturn(value: number | string): number | string | boolean{ ---> give error
//     console.log(value);
//     return value
// }
// const numberResult: string|number = logAndReturn(42);
// const stringResult: string|number = logAndReturn("Hello Generics");
// const booleanResult: string|number = logAndReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("Hello Generics");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
//# sourceMappingURL=generics.js.map