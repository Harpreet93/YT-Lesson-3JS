//type script - es5
// "use strict";
// let person = /** @class */ (function () {
//     //constructor function 
//     function person(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     person.prototype.saysHello = function () {
//         console.log(this.name + " saysHello");
//     };
//     return person;
// }());

class Person
{
    constructor (name, age)
    {
        this.name = name;
        this.age = age;

    }
    saysHello() {

    console.log(`${this.name} says Hello`);
    }
}
