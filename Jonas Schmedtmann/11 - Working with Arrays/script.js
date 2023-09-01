'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/*<---------- Lecture: Creating DOM Elements ---------->*/
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
//   ['INR', 'Indian Rupee'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
<---------- Lecture: Simple Array Methods ---------->


let arr = ['a', 'b', 'c', 'd', 'e'];

// slice() method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice() method (mutated original array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //First parameter is starting index and second is number of elements we want to delete
console.log(arr);

// reverse() (mutates original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat() (doesn't mutate original array)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join() (doesn't mutate original array)
console.log(letters.join(' - '));
// console.log(letters);
*/

/*<---------- Lecture: The new at method ---------->
//Added in ES2022
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element of an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

console.log('shubham'.at(0));
console.log('shubham'.at(-1));
*/

/*<---------- Lecture: Looping arrays: forEach ---------->
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');
// Order of parameters in important here, first is the array element, second is index, and third will be the array, we can use only one, or only two or all three based on usecase
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement: ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement: ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
//Break statements do not work with forEach loop, we can simply never break out of a forEach loop, it will complete only after looping on each element of an array, and there's no option to break out of an forEach loop, if in any case we need to break out of the loop we need to keep using forof loop instead.

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...
*/

/*<---------- Lecture: forEach with maps and sets ---------->
//With map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian Rupee'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// With Set
const currenciesUnique = new Set(['INR', 'GBP', 'USD', 'INR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// Sets dosen't have keys or indexes, so keys dosen't make sense here, so to keep all the forEach loops same and avoid confusion among developers, the key is kept exactly same as values in case of forEach with sets to maintain consistency in development
*/

/*<---------- Lecture:- Project: "Bankist" app  ---------->
Just Overview and analyzing the demo app and the starter files and files and data available for the project, #NO Code.
*/

/*
<---------- Coding Challenge #1 ---------->

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.shift();
  dogsJuliaCopy.pop();
  dogsJuliaCopy.pop();
  console.log(dogsJuliaCopy);
  console.log(`----- Julia's Data -----`);
  dogsJuliaCopy.forEach(function (age, dog) {
    const str =
      age < 3 ? 'is still a puppy' : `is an adult, and is ${age} years old`;
    console.log(`Dog number ${dog + 1} is ${str}`);
  });
  console.log(`----- Kate's Data -----`);
  dogsKate.forEach(function (age, dog) {
    const str =
      age < 3 ? 'is still a puppy' : `is an adult, and is ${age} years old`;
    console.log(`Dog number ${dog + 1} ${str}`);
  });
};

const dataJulia1 = [3, 5, 2, 12, 7];
const dataKate1 = [4, 1, 15, 8, 3];
const dataJulia2 = [9, 16, 6, 8, 3];
const dataKate2 = [10, 5, 6, 1, 4];
checkDogs(dataJulia1, dataKate1);
checkDogs(dataJulia2, dataKate2);

// Status: Completed
// Remarks: Excellent, Keep it up !!
*/

/*<---------- Lecture: Data Transformations - map, filter and reduce ---------->

//Theory lecture
--> map returns a new array containing the results of applying an operation on all original array elements

--> filter returns a new array containing the array elements that passed a specified test condition

--> reduce boild ("reduces") all array elements down to one single value (e.g. adding all the elements together)
*/
