enum Roles{
    user, 
    admin
}

type LoginDetails = {
    name:string,
    email:string,
    password:string,
    role:Roles
}

const user1 : LoginDetails = {
    name:"Mohit",
    email:"Mohit@gmail.com",
    password: "pwew",
    role:Roles.admin
}

const user2 : LoginDetails = {
    name: "Kumar",
    email:"Kumar@gmail.com",
    password: "pwe",
    role:Roles.user
}

const isAdmin : (user1: LoginDetails) => string = (user1:LoginDetails) : string => {
    const {name, email, password, role} = user1;
    return role === Roles.user ? `${name} is allow to edit the website`:`${name} is not allow to edit the website`
}

console.log(isAdmin(user1))

