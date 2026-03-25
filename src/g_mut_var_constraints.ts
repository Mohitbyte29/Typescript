function add<T, U>(a: T, b:U) : void{
    console.log(typeof a);
    console.log(typeof b);
}

const result1 : void = add<number, string>(5, "Mohit");
const result2 : void = add("Hello", 5);


//! second wala nhi chalega iss method se
// function add(a: number, b:string) : void{
//     console.log(typeof a);
//     console.log(typeof b);
// }

// const result1 : void = add(5, "Mohit");
// const result2 : void = add("Hello", 5);
//! to isliye hum generics use krte h

