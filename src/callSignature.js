var student1 = {
    name: "Mohit",
    age: 29,
    greet: function (country) { return "Welcome my name is ".concat(student1.name, " and my age is ").concat(student1.age, ", I'm from ").concat(country); }
};
var student2 = {
    name: "Virat",
    age: 35,
    greet: function (country) { return "Welcome my name is ".concat(student2.name, " and my age is ").concat(student2.age, ", I'm from ").concat(country); }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome my name is ".concat(name, " and my age is ").concat(age);
};
console.log(student1.greet('India'));
console.log(student2.greet('Bhutan'));
