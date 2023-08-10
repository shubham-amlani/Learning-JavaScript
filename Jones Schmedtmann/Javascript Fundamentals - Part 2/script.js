//Lecture: Activating strict mode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive :D")

// const interface = 'Audio';
// const private = 534;
// const if = 23;

//Lecture: Functions
//A function is a piece of code that can be reused again and again in code
function logger() {
    console.log("My name is Shubham");
}

//calling / running / invoking function.
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Lecture: Function declaration vs expressions
// const age1 = calcAge1(2005);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// // console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2005);

// console.log(age1, age2);


//Lecture: Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2005);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 60 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2005, 'Shubham'));
// console.log(yearsUntilRetirement(2003, 'Bob'));

//Lecture: Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(1, 3));


//Lecture: Reviewing functions

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`); 
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     } 

// }

// console.log(yearsUntilRetirement(2005, 'Shubham'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


//Lecture: Introduction to arrays
// const friends = ['Ankit', 'Jenil', 'Mohammed', 'Karan', 'Krupal', 'Veer'];
// console.log(friends);

// const y = new Array(1992, 2005, 2010, 2022);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'Vishwam';
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = 'Shubham'
// const shubham = [firstName, 'Amlani', 2037-2005, 'student', friends];
// console.log(shubham);
// console.log(shubham.length);

// //Exercise
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2005, 2006, 2008, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//Lecture: Basic Array Operations(Methods)

//Add elements
// const friends = ['Ankit', 'Jenil', 'Mohammed', 'Karan', 'Krupal', 'Veer'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const popped = friends.pop(); //Last
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift(); //first
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf('Mohammed'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Karan'));
// console.log(friends.includes('Boby'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Krupal')){
//     console.log('You have a friend called Krupal');
// }