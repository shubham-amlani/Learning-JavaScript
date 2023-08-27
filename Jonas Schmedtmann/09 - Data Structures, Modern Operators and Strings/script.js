'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //could not be done before ES6
  [weekdays[3] /*Instead of manually writing name*/]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //1st enhancement is about objects
  //Before ES6
  // openingHours: openingHours,

  //ES6 enhanced object literals
  openingHours,

  //2nd enhancement is writing methods

  //Before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   //this keyword here points to the object.
  // },

  //After ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Slightly easier syntax, it's preference of the developer

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    // console.log(arr.length);
    const otherIngs = (arr) => {
      let result = '';
      for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
          result += ', ';
        }
        result += arr[i];
      }
      return result;
    };

    console.log(
      `Here is your delicious pizza with ${mainIngredient} as main ingredient and ${otherIngs(
        otherIngredients
      )} as sub ingredients`
    );
  },
};

///////////////////////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//////////////////////////////////////////////////

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
/* 
< ---------- Strings in JavaScript ----------> 
*/

/* 
<---------- Coding Challenge #4 ----------> 

const textInputBox = document.getElementById('box');
const button = document.querySelector('#btn');
button.addEventListener('click', function () {
  const textInputValue = textInputBox.value;
  const splitted = textInputValue.split('\n');
  const nsSplitted = [];
  const final = [];
  for (const i of splitted) {
    nsSplitted.push(i.split('_'));
  }
  for (const [first, second] of nsSplitted) {
    const formattedSecond =
      second[0].toUpperCase() + second.slice(1).toLowerCase();
    final.push(first + formattedSecond);
  }
  // console.log(final);
  for (const [index, item] of final.entries()) {
    console.log(`${item.trim().padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
  }
});

//Status: Completed
//Remarks: Excellent! Keep it up.
*/

/* 
<---------- Working with strings - Part 3 ---------->

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Shubham Amlani'.split(' '));

const [firstName, lastName] = 'Shubham Amlani'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis');
capitalizedName('shubham amlani');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Shubham'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43377345));
console.log(maskCreditCard(4337345645345623));
console.log(maskCreditCard(25023487209384029));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

*/

/* 
<---------- Working with strings - Part 2>

const airline = 'TAP Air India';
// const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('airline'.toUpperCase());

//Fix capitalization in name
const passenger = 'sHuBhAM'; //Shubham
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Function for doing the same
const nameCorrector = (passengerName) => {
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

//Test
console.log(nameCorrector('sHuBHaM'));
//This works 🎉

// Real life example: Comparing emails
const email = 'hello@shubham.io';
const loginEmail = '    Hello@Shubham.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Function for comparing emails: Small Challenge
const compareEmails = (userEmail) => {
  const normalizedEmail = userEmail.toLowerCase().trim();
  return normalizedEmail === email;
};

//Testing
console.log(compareEmails('  Hello@Shubham.Io  '));

// And that works 🎉
// ES6 also contains methods, trimStart and trimEnd simply used to trim start or end

// Replace parts of strings
const priceND = '591.22₹';
console.log(priceND);
const priceUS = priceND.replace('₹', '$').replace('.', '-');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Notes: Og strings are not modified and all methods are case sensitive

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  // const baggage = items;
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/

/*
<---------- Working with strings - Part 1 ----------> 

const airline = 'TAP Air India';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('India'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Shubham'));
console.log(typeof new String('Shubham'));

console.log(typeof new String('Shbham').slice(1));
*/

/*
<---------- Coding Challenge #3 ---------->

//1.
const eventsSet = new Set(gameEvents.values());
// for (const value of gameEvents.values()) {
//   eventsSet.add(value);
// }
const events = [...eventsSet];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `An event happned, on average, every ${90 / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/

/*
<-------------------- Summary: Which Data Structure to use? --------------------> 

Theory Lecture
*/

/*
<-------------------- New Data Structures in ES6 -------------------->
*/
/* 
<---------- Maps Iteration ---------->

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct🎉"],
  [false, "Try again!"],
]);
console.log(question);

//Convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Loops with maps
//Quiz app
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
// console.log(typeof answer);
console.log(question.get(answer === question.get("correct")));

//Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
 */

/////////////////////////////////////////////////

/*
<---------- Maps Fundamentals---------->
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
//Clever but not readable, so don't use very often
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, "Test");
// rest.clear();

rest.set(document.querySelector("h1"), "Heading");

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

///////////////////////////////////////////////////////

/*
<---------- Sets ---------->
Set is a collection of unique values.


const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(new Set("Shubham"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
// console.log(ordersSet.has("Bread"));
console.log(ordersSet);
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("shubhamamlani").size);

*/

/*
<---------- Coding Challenge #2 ---------->


//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.
let avg = 0;

for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg /= 3;
console.log(avg);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  let str = team === "x" ? `draw` : `${game[team]}`;
  console.log(`Odd of ${str}: ${odd}`);
}

//BONUS.
let scorers = {};
for (const player of game.scored){

}

//Status: completed
//Remarks: Focus more properly on concepts, they're getting tough

*/

/*
<---------- Looping Objects: Object keys, values, and entries ----------> 


const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
<---------- Optional Chaining (?.) ---------->
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); //mon is not available, typeError
// console.log(restaurant.openingHours.mon); //mon is not available, undefined

// Without optional chaining
// console.log(restaurant.openingHours.mon.open);

// With optional chaining (?.), it still exists if it's a 0 or ''(empty string)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "Shubham", email: "hello@samlani.com" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty");
// console.log(users[1]?.name ?? "User array empty");
if (users.length > 0) console.log(users[0].name);
else {
  console.log("user array empty");
}
*/

/*

<---------- for-of loop ---------->
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

//better way to do the same thing
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/

// console.log([...menu.entries()]);

/*
<---------- Coding Challenge #1 ---------->


//1
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

//2
const [gk, ...fieldPlayers] = players1;

//3
// const [...allPlayers] = [...players1, ...players2];
const allPlayers = [...players1, ...players2];

//4
// const [...player1Final] = [...players1, "Thiago", "Coutinho", "Perisic"];
const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};

// printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
// printGoals(...game.scored);

//7

// (game.odds.team1 > game.odds.team2 &&
//   console.log(`Team 2 is more likely to win`)) ||
//   console.log(`Team 1 is more likely to win`);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

/*


//Status: Completed
//Remarks: Could be better

<---------- Logical Assignment Operators ---------->

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

*/

/*

<---------- The Nullish Coalescing Operator(??) ---------->
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values instead of all falsy values
//Nullish: null and undefined (NOT 0 or '' or any other falsy value)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
<----------Short Circuiting (&& and ||)---------->

console.log(`----- OR -----`);
// Use ANY data type, return ANY data type, short-circuiting.
console.log(3 || "Shubham");
console.log("" || "Shubham");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`----- AND -----`);
console.log(0 && "Shubham");
console.log(7 && "Shubham");

console.log("Hello" && 23 && null && "shubham");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "onion");

*/

/*

<----------Rest Operator---------->

const arr = [1, 2, ...[3, 4]];

//Considered as REST operator because on left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
//Here order is not important as in objects it targets it with names and they need to be as same as it is in the object key.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
  return sum;
};
//Above is working function that can take any number of parameters

add(2, 3);
add(5, 3, 7, 2);
add(7, 5, 3, 4, 5, 6, 7);
//Any amount of arguments should work for the function

const x = [23, 5, 7];
add(...x); //spread operator must be used here, because if an arrary will be operated by rest operator then they would be strings and it would just concatenate them.

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
*/

/*
<----------The spread operator---------->

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Shubham';
const letters = [...str, '', 'A.'];
console.log(...letters);
console.log(letters);
console.log(...str);
console.log('S', 'h');
// console.log(`${...str} Amlani`);

//A real world example
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)
]
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundIn:1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
<----------Destructuring objects---------->

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
})

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
//custom variable names
const {name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
<----------Destructuring arrays---------->

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);
[main, secondary] = [secondary, main]
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
