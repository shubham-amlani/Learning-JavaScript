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

/* < ---------- Lecture: Functions Accepting callback functions---------- > */
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
