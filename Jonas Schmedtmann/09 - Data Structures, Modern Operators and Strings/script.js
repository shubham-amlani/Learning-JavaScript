"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    //this keyword here points to the object.
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
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
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
          result += ", ";
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

/*
<---------- Coding Challenge #1 ---------->
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

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
