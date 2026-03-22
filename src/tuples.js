var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
var person1 = ["Mohit", 20, true];
var person2 = ["Vinod", 15, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
