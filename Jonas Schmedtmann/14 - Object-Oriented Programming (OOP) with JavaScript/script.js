'use strict';
/*<---------- Lecture: What is Object Oriented Programming? ---------->
Theory Lecture
*/

/*<---------- Lecture: OOP in Javascript ---------->
Theory Lecture
*/

/*<---------- Lecture: Constructor functions and the new operator ---------->*/
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

Person.hey = function () {
  console.log('Hey there 🙋‍♂️');
  console.log(this);
};

Person.hey();
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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 🙋‍♂️');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted (can't use before declared in code as functions)
// 2. Class are first-class citizens (pass into functions and return from functions)
// 3. Classes are executed in strict mode (even if we didn't activate it for full code)

const walter = new PersonCl('Walter ', 1965);
PersonCl.hey();

/*<---------- Lecture: Setters and Getters ---------->*/
// Every object in JS can have a setter and getter properties, they get/set a value.
const account = {
  owner: 'shubham',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

/*<---------- Lecture: Static Methods ---------->*/

/*Static method is defined in person class, a method named hey is written with in the class PersonCl and a method named hey is written with in the constructor function Person.*/

/*<---------- Lecture: Object.create ---------->*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

/*<---------- Lecture: Coding Challenge #2 ---------->*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmph`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6; // storing in km/h
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);

ford.speedUS = 100; // setting in ml/h
console.log(ford.speedUS);
console.log(ford.speed);
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
ford.brake();
