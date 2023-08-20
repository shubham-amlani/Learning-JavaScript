'use strict';

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Shubham'
// let job = 'student'
// const year = 2005;

// //Functions
// console.log(addDecl(4, 2));
// // console.log(addExpr(4, 2));
// console.log(addArrow);
// // console.log(addArrow(4, 2));

// function addDecl(a, b){
//     return a+b;
// }

// const addExpr = function(a, b){
//     return a+b;
// }

// var addArrow = (a, b)=>{
//     return a+b;
// }

// //Example
// console.log(numProducts);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('All products deleted!');
// }


// var x = 1;
// let y = 2;
// const z = 3; 

// console.log(x===window.x);
// console.log(x===window.y);
// console.log(x===window.z);

//The this keyword

//Regular function call
// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(2005);

// const calcAgeArrow = (birthYear) =>{
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(2005);

// //with objects
// const shubham = {
//     year: 2005,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037-this.year);
//     },
// };
// shubham.calcAge();


// const ankit = {
//     year: 2005,
// };

// ankit.calcAge = shubham.calcAge;
// //And now ankit object will also have calcAge function, this is called method borrowing.
// ankit.calcAge();

// const f = shubham.calcAge;
// f();//Won't work because this is a regular function call and this keyword is undefined.

// var firstName = 'Shubham';
// const shubham = {
//     firstName: 'Shubham',
//     year: 2005,
//     calcAge: function(){
//         // console.log(this);
//         console.log(2037-this.year);

//         // const self = this;
//         // const isGenz = function (){
//         //     console.log(self);
//         //     console.log(self.year >= 1997 && self.year<=2023);
//         //     // console.log(this.year >= 1997 && this.year<=2023);
//         // };

//         const isGenz = ()=>{
//             console.log(this);
//             console.log(this.year >= 1997 && this.year<=2023);
//             // console.log(this.year >= 1997 && this.year<=2023);
//         };
//         isGenz();
//     },
//     greet: function(){
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// shubham.greet();
// shubham.calcAge();

// const addExpr = function(a, b){
//     console.log(arguments);
//     return a+b;
// }
// addExpr(2, 4);
// addExpr(2, 5, 6, 12);

// var addArrow = (a, b) =>{
//     console.log(arguments);
//     return a+b;
// }

// addArrow(2, 4, 6);


//Primitives vs. Objects
// let age = 17;
// let oldAge = age;
// age = 18;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'shubham',
//     age: 17,
// };
// const friend = me;
// friend.age = 18;
// console.log('Friend:', friend);
// console.log('Me:', me);


//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Referance types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

// marriedJessica = {};

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
//object.assign preserves the values of objects till only first level
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);