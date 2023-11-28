'use strict';
/*<---------- Lecture: What is Object Oriented Programming? ---------->
Theory Lecture
*/

/*<---------- Lecture: OOP in Javascript ---------->
Theory Lecture
*/

/*<---------- Lecture: Constructor functions and the new operator ---------->
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // This is a bad practice, it affects performance of application.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const shubham = new Person('Shubham', 2005);
console.log(shubham);

// 1. New {} is created
// 2. Function is called, this keyword is set to this newly created empty object i.e. this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(shubham instanceof Person);
console.log(jay instanceof Person);

*/

/*<---------- Lecture: Prototypes ---------->
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

shubham.calcAge();
matilda.calcAge();
// Any Object always has access to the methods and properties from its prototype.
// This is a simple example of prototypal inheritance in JavaScript.

console.log(shubham.__proto__); // __proto__ property is prototype of any object. This property is created in step 3 of new operator.
console.log(shubham.__proto__ === Person.prototype);
// Person.ptototype is not the prototype of the Person, instead it will be the prototype of all the objects created using the Person. So basically any object that is created using Constructor Function Person, its prototype will be Person.prototype.


// Example:-
// Person --> Class.
// const shubham = new Person('Shubham', 2005) --> Instance(Object) of Class Person.

// So shubham will have prototype and that prototype will be Person.prototype, so Person.prototype does not belong to the Class Person, but to any Instance of that Object i.e. any Object created using that class as a base.


// isPrototypeOf() methods is used to check whether any prototype belongs to the object or not.
console.log(Person.prototype.isPrototypeOf(shubham));
console.log(Person.prototype.isPrototypeOf(matilda));
// In this case Person.prototype belongs to object shubham, hence true.

console.log(Person.prototype.isPrototypeOf(Person));
//Above line will produce false as prototype does not belong to the class. Only Objects created based on that class will have that prototype, not the class itself.

Person.prototype.species = 'Homo Sapiens';
console.log(shubham, matilda);
console.log(shubham.species, matilda.species);

// Here species is not own property of any object created with the Class, it is inherited from the prototype object that is present in every object.
console.log(shubham.hasOwnProperty('firstName'));
console.log(shubham.hasOwnProperty('species'));

*/

/*<---------- Lecture: Prototypal Inheritance and the Prototype chain ---------->
Theory lecture, but not take notes, so if any doubt on this topic, must re-watch lecture, it's very useful, lecture 007 of section 14
*/

/*<---------- Lecture: Prototypal Inheritance on Built-in Objects ---------->
console.log(shubham.__proto__);
// Object.prototype (top of prototype chain)
console.log(shubham.__proto__.__proto__);
console.log(shubham.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3, 9, 5, 5, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/*<---------- Lecture: Coding Challenge #1 ---------->
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} kmph`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} kmph`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);
bmw.brake();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.accelerate();

// Status: Completed.
// Remarks: Excellent, keep going same way.
*/

/*<---------- Lecture: ES6 Classes ---------->*/
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted (can use before declared in code)
// 2. Class are first-class citizens (pass into functions and return from functions)
// 3. Classes are executed in strict mode (even if we didn't activate it for full code)
