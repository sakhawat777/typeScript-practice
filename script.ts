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
// Classes
class Player {
    name: string;
    age: number;
    country: string;
    constructor (n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;

    }
    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Mashrafi = new Player("Mashrafi", 35, "Bangladesh");
const Sakib = new Player("sakib", 32, "Bangladesh");
console.log(Mashrafi.country);
const players: Player[] = [];
players.push(Mashrafi);
players.push(Sakib);

// Access Modifiers 
class Player2 {
    
    constructor (
        private name: string,
            readonly age: number,
            public country: string,
    ){}
    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Mushfik = new Player2("Mushfik", 35, "Bangladesh");
const Taskin = new Player2("Taskin", 32, "Bangladesh");
console.log(Mashrafi.country);
const players2: Player2[] = [];

// Module System
// Module support from es6
// module: "es2015"

// Interfaces
interface RectangleOptions {
    width: number,
    length: number,
}
function drawRectangle (options: RectangleOptions) {
    let width = options.width;
    let length = options.length;

}
let threeDOptions = {
    width: 20,
    length: 30,
    height: 12,
}
drawRectangle(threeDOptions);

// Generics and received object by <T extends object>
const addID = <T extends object> (obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};
let user = addID ({
    name: "Tina",
    age: 30,
});
addID(user);

// Enum Types 
enum RType {SUCCESS , FAILURE, UNAUTHENTICATED, FORBIDDEN}
interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}
const response1: APIResponse<String> = {
    status: 200,
    type: RType.SUCCESS,
    data: "test"
}
console.log(response1);

// Tuples
let h = [5, "BD", {p: 3}]
let g: [number, string, object] = [2, "World", {f: 3}];
