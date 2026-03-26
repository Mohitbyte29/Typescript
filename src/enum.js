"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Mohit",
    email: "Mohit@gmail.com",
    password: "pwew",
    role: Roles.admin
};
const user2 = {
    name: "Kumar",
    email: "Kumar@gmail.com",
    password: "pwe",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { name, email, password, role } = user1;
    return role === Roles.user ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`;
};
console.log(isAdmin(user1));
//# sourceMappingURL=enum.js.map