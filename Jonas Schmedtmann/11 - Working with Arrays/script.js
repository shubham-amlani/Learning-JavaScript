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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(acc.movements);

  // Diaplay balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
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
  const amount = Number(inputTransferAmount.value);
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

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Closing account feature
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  let closeUser = inputCloseUsername.value;
  let closePin = Number(inputClosePin.value);

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
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

--> reduce boils ("reduces") all array elements down to one single value (e.g. adding all the elements together)
*/

/*
<---------- Lecture: The map method ---------->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
<---------- Lecture: The filter method ---------->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function(mov) {
//   return mov>0;
// });

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
<---------- Lecture: The reduce method ---------->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is like a snowball
console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration number ${i + 1}: ${acc}`);
//   return acc + cur;
// }, 0); //second parameter is initial value of accumulator that we want

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// dont put 0 as initial acc when we try to find max or min value;
console.log(max);
*/

/*
<---------- Coding Challenge #2 ---------->

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const humanAgesFiltered = humanAges.filter(humanAge => humanAge >= 18);

  const humanAgesAverage = humanAgesFiltered.reduce(
    (acc, humanAge, index, arr) =>
      index === arr.length - 1
        ? (acc += humanAge) / arr.length
        : (acc += humanAge),
    0
  );
  //Another way for calc averages
  // [2, 3] = (2+3)/2 = 2.5 --> is same as --> 2/2 + 3/2 = 2.5
  return humanAgesAverage;
};
// calcAverageHumanAge([1, 2, 3, 4, 5, 6, 7]);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Status: Completed
// Remarks: Brilliant !!!
*/

/*
<---------- Lecture: The magic of chaining methods ---------->

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// We should not overuse chaining, as it can cause performance issues in cases of large arrays, we should optimize it.
// We should not chain methods that modifies original array, we can do that at a small scale but not in functional and large applications 
*/

/*
<---------- Coding Challeng #3 ---------->
const calcAgerageHumanAge = function (ages) {
  const avgHumanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, humanAge, i, arr) => (acc += humanAge / arr.length), 0);
  return avgHumanAge;
};
console.log(calcAgerageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAgerageHumanAge([16, 6, 10, 5, 6, 1, 4]));
//Status: Completed
//Remarks: Excellent !!! (It was easy though)
*/

/*
<---------- Lecture: The find method ---------->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl = movements.find(mov => mov < 0);
//Returns first element which satisfies the condition, returns an element, not an array.
console.log(movements);
console.log(firstWithdrawl);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//Same functionality with for...of loop
let accountC;
for (const obj of accounts) {
  if (obj.owner === 'Jessica Davis') {
    accountC = obj;
  }
}
console.log(accountC);
*/

/*
<---------- Lecture: The findIndex method ---------->
Implementation of this method is shown in close account feature of out Bankist application.

So in out application closing the account simply means to remove the account from the accounts array, and for that we make use of splice method, but to delete the element with splice method, we need index to the element to be removed, so to find the index of the current account in accounts array we make use of findIndex method and then just use splice to remove it.

NOTE:- Both find and findIndex method have access to the index and array itself on which it is implemented

Both methods were added in ES6 so it will not work on super old browsers, that parse JavaScript with older engined(prior to ES6)
*/

/*
<---------- Lecture: Some and Every ---------->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Some: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//Practical application of the some method is in loan feature of the application

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback (declare and define function separately and pass it as a callback)
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
<---------- Lecture: flat and flatmap methods ---------->

//These two methods were introduced in ES2019 and will therefore not work in super old browser
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// flat only does one level deep while flattening the array

// We can fix that by depth argument, default is one so it goes till level one
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// with flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// Using a map first and then flattening the result is a pretty common operation, so to solve this there is another method which was introduced, and it is flatMap()

// with flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);
*/

/*
<---------- Lecture: Sorting Arrays ---------->

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //(mutates original array)
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// console.log(movements.sort()); // Does not work, sorts it as a string

// This is the rule of how callbacks on sort method work
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);

console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
movements.sort((a, b) => b - a);

console.log(movements);
// It is not going to work on mixed arrays, meaning arrays containing multiple types of data, for ex strings along with numbers...so we should not use sort method in these situations, and actually there is no point of doing this.
*/

/*
<---------- Lecture: More ways of creating and filling arrays ---------->

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays with fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

// Already declared and filled array with fill method
arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// An array containing 100 random dice rolls (assignment)
const randomDice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(randomDice);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2);
});
*/

/*<---------- Lecture: Summary: Which array method to use? ---------->

Theory lecture

--> We've learnt about 23 array method in JavaScript and we can do all operations with that we can possibly imagine with array in the language, but which method to use in what situation is a confusion, because 23 methods are a hell lot of methods and creates kind of a mess, so this lecture addressed that problem.

--> Best way to figure out which method to use in any situation is by starting to ask the question "What do I actually want to do with this array?"

---> To mutate the original array
  --> Add to original:
    -> .push (end)
    -> .unshift (start)

  --> Remove from original:
    -> .pop (end)
    -> .shift (start)
    -> .splice (any)

  --> Others:
    -> .reverse
    -> .sort
    -> .fill

---> A new array
  --> Computed from original:
    -> .map (loop)

  --> Filtered using condition:
    -> .filter
  
  --> Portion of original:
    -> .slice
  
  --> Adding original to other:
    -> .concat
  
  --> Flattening the original:
    -> .flat
    -> .flatMap

---> An array index
  --> Based on value:
    -> .indexOf

  --> Based on test condition:
    -> .findIndex

---> An array element
  --> Based on test condition
    -> .find

---> Know if array includes
  --> Based on value:
    -> .includes
  
  --> Based on test condition:
    -> .some
    -> .every

---> A new string
  --> Based on separator string:
   -> .join

---> To trasform to value
  --> Based on accumulator:
    -> .reduce (Boil down array to single value of any type: number, string, boolean, or even new array or object)

---> To just loop array
  --> Based on callback:
    -> .forEach (Does not create a new array and does not even produce any value, just loops over it)

----- and That's it -----
*/

/*<---------- Lecture: Array methods practice ---------->

// Skip for now
*/

/*
<---------- Coding Challenge #4 ---------->

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dogObj => (dogObj.recommendedFood = dogObj.weight ** 0.75 * 28));

//2.
const sarahDogObj = dogs.find(obj => obj.owners.includes('Sarah'));

if (sarahDogObj.curFood > sarahDogObj.recommendedFood * 1.1) {
  console.log("Sarah's dog eats Too much");
} else if (sarahDogObj.curFood < sarahDogObj.recommendedFood * 0.9) {
  console.log("Sarah's dog eats Too little");
} else {
  console.log("Sarah's dog eats perfectly");
}

//3.
const ownersEatTooMuch = dogs
  .filter(obj => obj.curFood > obj.recommendedFood * 1.1)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(obj => obj.curFood < obj.recommendedFood * 0.9)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooLittle);

//4.
const strMuch = `${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`;
console.log(strMuch);

const strLittle = `${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`;
console.log(strLittle);

//5.
console.log(dogs.some(obj => obj.curFood === obj.recommendedFood));

//6.
console.log(
  dogs.some(
    obj =>
      obj.curFood <= obj.recommendedFood * 1.1 &&
      obj.curFood >= obj.recommendedFood * 0.9
  )
);

// 7.
const okayFood = dogs.filter(
  obj =>
    obj.curFood <= obj.recommendedFood * 1.1 &&
    obj.curFood >= obj.recommendedFood * 0.9
);

console.log(okayFood);

//8.
const dogsCopy = [...dogs];
dogsCopy.sort((obj1, obj2) => {
  return obj1.recommendedFood - obj2.recommendedFood;
});
console.log(dogsCopy);

// Status: Completed
// Remarks: Pending (Probable: Nice !!!)
*/

/*<-------------------- Congratulations on completing the longest section of the course -------------------->*/
