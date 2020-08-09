"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// types
var isSenior = true;
var age = 19;
var name = 'Saad Baig';
// subtypes
var n = null;
var u = undefined;
// array types
var list1 = [1, 2, 3];
var list2 = ['orange', 'egg', 'bro'];
// any type
var randomType = 10;
randomType = true;
randomType = 'Saad';
// FUNCTIONS
var example = function (num1, num2) {
    return num1 - num2;
};
example(2, 2);
// optional parameters in functions
var optional = function (para1, para2) {
    if (para2) {
        return "'" + para1 + "' is a string and '" + para2 + "' is a number";
    }
    else {
        return "'" + para1 + "' is a string";
    }
};
optional('hello', 50);
optional('hello');
var registration = function (data) {
    return data.address + " " + data.country;
};
var p = {
    address: 'lala',
    country: 'hala'
};
registration(p);
