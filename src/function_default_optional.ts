// fun define

//! default
const greet3 = (name: string, id:number = 1):string => {
    return `Welcomem ${name} and ${id}`
}
console.log(greet3("Mohit"))

//! optional parameter
const greet4 = (name: string, id?:number):string => {
    if(id){
        return `Welcome ${name} and ${id}`
    } else{
        return `Welcome ${name}`
    }
}

const emp = greet4("Mohit");
const emp1 = greet4("Mohit", 45);
console.log(emp);
console.log(emp1);

//! In optonal parameter ---> We get id undefined





