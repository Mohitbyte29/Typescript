function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, "Mohit");
var result2 = add("Hello", 5);
//! second wala nhi chalega iss method se
// function add(a: number, b:string) : void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const result1 : void = add(5, "Mohit");
// const result2 : void = add("Hello", 5);
//! to isliye hum generics use krte h
