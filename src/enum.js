var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Mohit",
    email: "Mohit@gmail.com",
    password: "pwew",
    role: Roles.admin
};
var user2 = {
    name: "Kumar",
    email: "Kumar@gmail.com",
    password: "pwe",
    role: Roles.user
};
var isAdmin = function (user1) {
    var name = user1.name, email = user1.email, password = user1.password, role = user1.role;
    return role === Roles.user ? "".concat(name, " is allow to edit the website") : "".concat(name, " is not allow to edit the website");
};
console.log(isAdmin(user1));
