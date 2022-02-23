// variable or constant
const country = "I love Bangladesh";
console.log(country);

// function
function multiply (a: number, b: number){
    return a * b;
}
console.log(multiply(12,10));
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

let a: string;
a = "Sakhawat";
let b: number;
b = 100;
let s:(string | number) [] = [];
s.push("Biplob");
let z: number | string;
z = 500;
let c: object;
// any type variable
let e;
// or
let d: any;
// any type or dynamic type
let f: {
    name: any,
    roll: any,

};
f = {
    name: "Tina",
    roll: 1,
}
// Function type
 let myFunc: Function;
 myFunc = () => {
     console.log("Function");
 }
 // here c is a optional parameter and return string
 const arrayFunction = (a: string, b: string, c?: string): string => {
     console.log(`${a}  ${b}`);
     return (a + b);
 }
arrayFunction("Hello", "World");

// Type Aliases or custom type
type stringOrNum = string | number;
type userType = {name: string, age: number};
const userDetails = (id: stringOrNum, user: userType) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`)
}
const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50? "Sir": "Mr."}  ${user.name}`)
}
// Function Signatures
let myFun: (x: string, y: string) => void;
let add: (i: number , j: number) => number;

 add = (p: number, k: number) => {
    return p + k;
}
console.log(add(2,3));
let userDetails2: (id: number | string, userInfo: {
    name: string, 
    age: number
}) => void;
userDetails2 = (id: number | string,  user: {
    name: string, 
    age: number
} ) => {
console.log(`id: ${id} user: ${ user.name}`)
}
userDetails2(1,{
    name: "Tina",
    age: 20
});