var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var inputValue = function (value) { };
var userInput = function (value) {
    if (typeof (value) === 'number') {
        return value * 2;
    }
    else if (typeof (value) === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input data');
    }
};
console.log(userInput(10));
console.log(userInput("subscribe"));
var employee = {
    name: 'Mohit',
    age: 26,
    emp_id: 1111,
    department: 'IT'
};
var user = { name: 'Mohit', age: 25, license: true };
var myLocation = { city: 'New Delhi', pincode: 110002 };
var createUserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
//* call
var myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
