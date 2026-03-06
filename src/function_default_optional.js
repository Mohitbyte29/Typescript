// fun define
//! default
var greet3 = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Welcomem ".concat(name, " and ").concat(id);
};
console.log(greet3("Mohit"));
//! optional parameter
var greet4 = function (name, id) {
    if (id) {
        return "Welcome ".concat(name, " and ").concat(id);
    }
    else {
        return "Welcome ".concat(name);
    }
};
var emp = greet4("Mohit");
var emp1 = greet4("Mohit", 45);
console.log(emp);
console.log(emp1);
//! In optonal parameter ---> We get id undefined
