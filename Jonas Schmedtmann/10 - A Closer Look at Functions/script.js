'use strict';
/* 
< ---------- Lecture :- Default Parameters ---------->

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
<---------- Lecture :- How passing arguments works: Value vs. Reference ---------->


const flight = 'LH234';
const shubham = {
  name: 'Shubham Amlani',
  passport: 24234523423,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //Not good practice
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24234523423) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, shubham);
// console.log(flight);
// console.log(shubham);

// Is the same as doing...
// const flightNum = flight;
// const passenger = shubham;

//Here two functions are dealing with same objects, so it will cause problems while dealing with objects in JS
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(shubham);
checkIn(flight, shubham);
*/

/* 
< ---------- Lecture: Functions Accepting callback functions---------- > 

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function, because it takes in a function as an argument
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Shubham', 'Jonas', 'Adam'].forEach(high5);
*/
/*<---------- Lecture: Functions returning functions ---------->
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Shubham');
greeterHey('Steve');

greet('Hello')('Shubham');

// Challenge :- Same function using arrow function
const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArrow('Hi')('Shubham');
*/

/*<---------- Lecture: The call and Apply methods ---------->
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //Old syntax
  // book: function() {}

  //New Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Shubham Amlani');
lufthansa.book(635, 'Steve Jobs');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 223, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Ari Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 45, 'Mark Zuckerberg');
console.log(swiss);

// Apply method

//Apply methos is similar to call method, but instead of taking list of arguments after setting what will be the this keyword(first parameter), it will receive an array of parameters to by supplied and not a list of parameters

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//Apply method is not used much in Modern Javascript anymore because we can use spread operator with call method
book.call(swiss, ...flightData);
console.log(swiss);
*/

/*
<---------- Lecture: The bind method ---------->
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //Old syntax
  // book: function() {}

  //New Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Ari Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
//Will return a new function with this keyword set to eurowings/lufthansa/swiss.

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Shubham Amlani');
bookEW23('Martha Cooper');

// With event listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * (rate / 100);
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23);
console.log(addVAT(100));
console.log(addVAT(200));

// With functions returning a function
const addTax2 = rate => {
  const addVAT2 = value => {
    return value + value * (rate / 100);
  };
  return addVAT2;
};

//Testing
const addVAT20 = addTax2(20);
console.log(addVAT20(100));
//Remarks: You did it exactly as it needs to be done.
*/

/*
<---------- Coding Challenge #1 ---------->
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (input >= 0 && input <= 3) {
      this.answers[input] += 1;
    } else {
      alert(`Invalid input !!!`);
    }
    this.displayResults.call(poll);
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  data1 = [5, 2, 3];
//  data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
//In this situation this keyword is an newly created object which is directly created when using call method.

//Status: Completed
//Remarks: Great! but BONUSes should be also solved.
*/

/*<---------- Lecture: Immediately Invoked function expressions (IIFE) ---------->
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

() => console.log('This will ALSO never run again')(); //This doesn't work
(() => console.log('This will ALSO never run again'))(); //This works (wrapped in paranthesis)

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
