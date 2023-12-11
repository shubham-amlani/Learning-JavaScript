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

Person.hey = function () {
  console.log('Hey there 🙋‍♂️');
  console.log(this);
};

Person.hey();
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

/*<---------- Lecture: ES6 Classes ---------->
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
*/

/*<---------- Lecture: Setters and Getters ---------->
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
*/

/*<---------- Lecture: Static Methods ---------->*/

/*Static method is defined in person class, a method named hey is written with in the class PersonCl and a method named hey is written with in the constructor function Person.*/

/*<---------- Lecture: Object.create ---------->

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
*/

/*<---------- Lecture: Coding Challenge #2 ---------->
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
*/

/*<---------- Lecture: Inheritance Between Classes Constructor Functions ---------->
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study in ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*<---------- Lecture: Coding Challenge #3 ---------->
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
const ford = new Car('Ford', 90);
console.log(tesla);
tesla.accelerate();
tesla.brake();
ford.brake();
ford.accelerate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
ford.accelerate();
// In this challenge, when accelerate method is called on an EV it uses accelerate method defined in EV.prototype, and in case of normal Car, it will use accelerate method defined in Car.prototype, so in prototype chain, if there are multiple methods with same name, it will use the first one in the chain, and chain goes beginning from child to parent... and same is for the scope chain.
*/

/*<---------- Lecture: Inheritance between 'Classes': ES6 Classes ---------->
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first! as it is responsible for creating this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet();
*/
/*<---------- Lecture: Inheritance between Classes: Object.create ---------->
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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*<---------- Lecture: Another class example ---------->
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  // _movements = [];

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  // static public method
  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }

  // static public field
  static numSubjects = 10;
}

const acc1 = new Account('Shubham', 'INR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#pin);
// console.log(acc1.#movements);
*/
/*<---------- Lecture: Encapsulation: Protected properties and methods ---------->*/
// we can use a convention to append an underscore before a data sensitive method or data, indicating developers not to access then outside that class, but that's the convention, we can still access that outside, but we atleast know that we are accessing sensitive data/method outside the protected class, so we can call it protected but not private.

/*<---------- Lecture: Encapsulation: Private class fields and methods ---------->

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

Account.helper();
*/

/*<---------- Lecture: Chaining methods ---------->
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

/*<---------- Lecture: ES6 Classes summary ---------->*/
//Summary diagram

/*<---------- Lecture: Coding Challenge #4 ---------->

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().chargeBattery(40).accelerate();
rivian.brake().brake().chargeBattery(62).accelerate();
*/

// Congratulations on completing Section 14...
