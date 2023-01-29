"use strict";

// const Car = function (name, year) {
//     this.name = name;
//     this.year = year;
// }
//
// const jsonValue = function () {
//     return JSON.stringify(this);
// }
// Car.prototype.jsonValue = jsonValue
//
// const Volvo = new Car("Volvo", 2022);
// const Fiat = new Car("Fiat", 2015);
// const Value = Volvo.jsonValue()
// console.log(Volvo.year);
// console.log(Fiat["name"]);
// // console.log(window);
// // console.log(Volvo.name , Volvo.year);
//
// Volvo.year = 2025;
// console.log(Volvo.name, Volvo.year);
// console.log(Volvo);
// console.log(Value);
//-----------------------------------------------
const person = function (fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}
const jsonValue = function (){
    return JSON.stringify(this);
}
person.prototype.jsonValue=jsonValue;
const Catalin = new person("Alexandru", "Tudor", 29);
const Anabela = new person("Anabela", "Tudor", 27);
const value = Catalin.jsonValue()
console.log(Catalin);
console.log(Anabela);
// console.log(Catalin.age);
// console.log(Anabela["lName"]);
console.log(value);
