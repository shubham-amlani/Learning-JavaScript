'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-09-07T23:36:17.929Z',
    '2023-09-10T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

/*<---------- Lecture: Creating DOM Elements ---------->*/
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDates(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

    <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Diaplay balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// day/month/year

// Experimenting with the api

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Here we need the field to lose focus, but in my case it does it automatically, in case we need to do that like this.
    // inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transferring  money feature
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  // Implementing checks for transferring
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

// Closing account feature
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  let closeUser = inputCloseUsername.value;
  let closePin = +inputClosePin.value;

  // Implementing checks for closing account
  if (
    closeUser === currentAccount.username &&
    closePin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    // Deselecting input fields
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*<---------- Lecture: Converting and checking numbers ---------->

console.log(23 === 23.0);
// All numbers by default are represented as floating point numbers, and that is the reason there is only one datatype for all the numbers in JavaScript

// They are stored in 64 base 2 system that means,
// They are always stored in binary format
// Base 10 : 0 to 9
// Binary base 2 : 0 1
console.log(0.1 + 0.2); // 0.30000....4 (wierd result)

// JS simply does not have a better way to represent numbers.

// Reason for wierd result
// Decimal 1/10 = 0.1. 10/3 = 3.3333...
// so in binary same things happens with binary operations and JS tries to hide and approximate behind the scenes, but in some cases we just cannot do anything

//Note:- For this reaseon we cannot do very precise scientific or financial calculations in JavaScript as it may produce inaccurate output and cause problems, so beware of this fact. For eg:

console.log(0.1 + 0.2 === 0.3); //Should be true but its not, we have to accept this, there's no solution to this problem.

// Conversion
console.log(Number('23'));
console.log(+'23'); //When JS see the + operator it will automatically do type coversion (to numbers).

// Parsing
console.log(Number.parseInt('30px', 10)); // JS will itself figure out the number
console.log(Number.parseInt('e23', 10)); // NaN

// 2nd arg is radix, basically specifying which number system are we using, so for decimal we use 10 and if we are working with binary we may use 2.

console.log(Number.parseInt('   2.5rem   '));
console.log(Number.parseFloat('   2.5rem   '));
// Whitespace does not affect the function.

// Functions are also available as global functions and therefore it is not necessary to call them on number, but this is a little oldschooled way of doing it, so this will also work but Number provides a namespace.

// console.log(parseFloat('   2.5rem   '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number.
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));
console.log('---------');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

/*
<---------- Lecture: Math and Rounding ---------->

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // Supports type coercian
console.log(Math.max(5, 18, '23px', 11, 2)); // Does not Support parsing
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...(max);
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.33));

console.log(Math.round(23.2));
console.log(Math.round(23.7));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(24.54));

console.log(Math.trunc(-24.54));
console.log(Math.floor(-24.54));

// Floating point numbers
console.log((2.7).toFixed(0)); // toFixed returns a string
console.log((2.7).toFixed(3)); // toFixed returns a string
console.log((2.345).toFixed(2)); // toFixed returns a string
console.log(+(2.345).toFixed(2)); // toFixed returns a string
*/

/*
<---------- Lecture: The remainder operator ---------->

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1;

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2;

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(345));
console.log(isEven(3456));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
// Every Nth time
*/

/*
<---------- Lecture: Numeric separators ---------->

// ES 2021 - Formatting to make easier to read/understand

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));
*/

/*
<---------- Lecture: Working with BigInt ---------->

// ES 2020
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(433232342354234534523423423453456769586345n);
console.log(BigInt(433232342));

// Operations
console.log(10000n + 10000n);
console.log(42346554234512353145213434523463453241523456n * 1000000n);

const huge = 234234231212321342234245324n;
const num = 23;
// console.log(huge * num); // Error
console.log(huge * BigInt(num)); // Works
// console.log(Math.sqrt(16n));
// Exceptions
console.log(20n > 15);
console.log(20n === 20); // type does not match but value is same
console.log(typeof 20n);
console.log(20n == 20);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(1 1n / 3n);
console.log(10 / 3);
*/

/*<---------- Lecture: Creating Dates ---------->
// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Sep 06 2023 13:42:20'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31, 15, 23, 5));
console.log(new Date(2037, 10, 33, 15, 23, 5));
// Month in JS is 0 based

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142237180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// All these methods perform autocorrection.
*/

/*<---------- Lecture: Adding dates to bankist app ---------->

Coded in Project application
*/

/*<---------- Lecture: Operations with dates ---------->
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

// const calcDaysPassed = (date1, date2) =>
// Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// Practical implementation of this function is in displaying Today, Yesterday, x days ago if transaction is certain days ago for one week and if it is earlier than 1 week then date is displayed. We can see it in functions section of the Bankist app

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

/*<---------- Lecture: Internationalizing Dates (INTL) ---------->
JS has a international dates api, using which we can make our application internation around with world, like currency formats, dates etc.. can be converted to foreign dates and make the application usable for foreign users. There is a lot of language specific things that can be done with api, here we will see dates.

Practically applied in code
*/

/*<---------- Lecture: Internationalizing Numbers (INTL) ---------->
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'INR',
  // useGrouping: false,
};

console.log('US:     ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('India: ', new Intl.NumberFormat('gu-IN', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// We implemented currency formats in our Bankist application using Internationalizing api with numbers

//There is a lot more potential in this api...
*/

/*<---------- Lecture: Timers: setTimeout and serInterval ---------->

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now.getHours(), now.getMinutes(), now.getSeconds());
}, 1000);
*/
