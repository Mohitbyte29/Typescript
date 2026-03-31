// Interface vs Types

//! 1:
//* Use custom types when we need unions, intersections or mapped types.
//* Use unterfaces when defining object shapes or classes that adhere to a contract.

//! 2:
//* Interfaces can extend other interfaces to inherit their members.
//* Custom types can use unions and intersections for more complex type compositions.

//* same Interface name treated as one

//! Type
// type Stud = {
//     name: string;
//     age: number;
// }
// type StudAddr = {
//     city: string;
//     state: string;
// }

// type Data = Stud | StudAddr
// //! type Data = Stud & StudAddr --> Intersection

// const BioData: Data = {
//     name: "Mohit",
//     age: 25,
//     state: "Maharashtra"
// };

// console.log(BioData)

//! Interfaces
interface Stud {
    name: string;
    age: number;
}
interface StudAddr{
    city: string;
    state: string;
}
interface Stud{
    city: string;
    state: string;
}

//* Not possible the use of union and intersection in interface 
//! interface Data extends Stud | StudAddr
//! interface Data = Stud & StudAddr --> Intersection
// interface Data extends Stud, StudAddr{}
interface Data extends Stud{} //---> interface can exists with same name

class BioData implements Data  {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public state: string
    ){}
};

const std1 = new BioData("Vinod", 20, "Pune", "Maharashtra");

console.log(std1.city)


