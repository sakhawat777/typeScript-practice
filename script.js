"use strict";
// variable or constant
const country = "I love Bangladesh";
console.log(country);
// function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(12, 10));
// array
let fruits = ["apple", "orange", "banana"];
fruits.push("grape");
console.log(fruits);
// object
let person = {
    name: "Mashrafi",
    age: 35,
    isCaptrain: true,
};
person.name = "Tamim";
console.log(person);
let a;
a = "Sakhawat";
let b;
b = 100;
let s = [];
s.push("Biplob");
let z;
z = 500;
let c;
// any type variable
let e;
// or
let d;
// any type or dynamic type
let f;
f = {
    name: "Tina",
    roll: 1,
};
// Function type
let myFunc;
myFunc = () => {
    console.log("Function");
};
// here c is a optional parameter and return string
const arrayFunction = (a, b, c) => {
    console.log(`${a}  ${b}`);
    return (a + b);
};
arrayFunction("Hello", "World");
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}  ${user.name}`);
};
// Function Signatures
let myFun;
let add;
add = (p, k) => {
    return p + k;
};
console.log(add(2, 3));
let userDetails2;
userDetails2 = (id, user) => {
    console.log(`id: ${id} user: ${user.name}`);
};
userDetails2(1, {
    name: "Tina",
    age: 20
});
// Classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Mashrafi = new Player("Mashrafi", 35, "Bangladesh");
const Sakib = new Player("sakib", 32, "Bangladesh");
console.log(Mashrafi.country);
const players = [];
players.push(Mashrafi);
players.push(Sakib);
// Access Modifiers 
class Player2 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Mushfik = new Player2("Mushfik", 35, "Bangladesh");
const Taskin = new Player2("Taskin", 32, "Bangladesh");
console.log(Mashrafi.country);
const players2 = [];
// Module System
// Module support from es6
// module: "es2015"
