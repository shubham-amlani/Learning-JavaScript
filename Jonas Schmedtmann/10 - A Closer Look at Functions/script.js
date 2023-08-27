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
