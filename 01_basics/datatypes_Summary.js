//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack(primitive) means ki agr ek variable define kiya to uska copy milega , heap(non-primitive) means ki uska reference milega;

let myYoutubename="godzegaming"
let anothername=myYoutubename; // ab kya hua mujhe uski copy mil gyi gidzegaming
console.log(myYoutubename)
console.log(anothername)

// heap
let myobj={
    name : "moksh",
    email : "moksh@gmail.com"
}
let myobj2=myobj; // here i get reference of it
myobj2.email="god@google.com"
console.log(myobj.email);
console.log(myobj2.email);
// dono ka value change ho gya kyuki dono ek hi jgh se refer krre the
