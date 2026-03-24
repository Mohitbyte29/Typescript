//! By Union --> It can fail for more than 2 dataTypes

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

function logAndReturn<T>(value: T):T {
    return value
}

const numberResult: number = logAndReturn<number>(42);
const stringResult: string = logAndReturn<string>("Hello Generics");
const booleanResult: boolean = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);


