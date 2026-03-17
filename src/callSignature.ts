type Student = {
    name: string,
    age: number,
    gender?:string,
    greet: (country:string) => string //! Method call signature
    // (country:string) => string
}

const student1:Student = {
    name:"Mohit",
    age:29,
    greet: (country) : string => `Welcome my name is ${student1.name} and my age is ${student1.age}, I'm from ${country}` 
}

const student2:Student = {
    name:"Virat",
    age:35,
    greet: (country) : string => `Welcome my name is ${student2.name} and my age is ${student2.age}, I'm from ${country}` 
}

const introduction : (student1: Student) => string = (student1: Student): string => {
    const {name, age} = student1;
    return `Welcome my name is ${name} and my age is ${age}`
}

console.log(student1.greet('India'));
console.log(student2.greet('Bhutan'));

