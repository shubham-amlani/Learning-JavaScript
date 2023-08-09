// //Lecture: Values and Variables

// //q1 Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country(population in millions)
// // let country = 'India';
const country = 'India';
// // let continent = 'Asia';
const continent = 'Asia';
let population = 1400;
// //q2 log their values to the console
// console.log(country);
// console.log(continent);
// console.log(population);


// //Lecture: Data Types
// //q1 Declare a variable called 'isIslang' and set its value according to your country. The variable should hold a boolean value. Also declare a variable 'language' but don't assign it any value yet
// // let isIsland = false;
// const isIsland = false;
// // let language;
// //q2 Log the types of 'isIsland', 'population', 'country', and 'language' to the console
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
const language = 'Hindi';
// console.log(typeof language);


// //Lecture:let, const, var

// // language = 'Gujarati'; //will return an error


// // Lecture:Basic Operators
// let halfPopulation = population/2;
// population += 1;
// console.log(population)
// //Yes, my country has more people than finland
// //No, my country does not have less people that the average country
// console.log(halfPopulation);
// const description = country+" is in "+continent+" and its "+population+ " million population speak "+ language;
// console.log(description);
// const descriptionNew = `${country} is in ${continent} and its ${population} million population speak ${language}`;
// console.log(descriptionNew);

//Lecture: Taking Decisions: if/else Statements
// if(population > 33){
//     console.log(`${country}'s population is above average`);
// } else{
//     console.log(`${country}'s population is ${population} million below average`);
// }

//Lecture: Type Conversion and Coercion
//4
//617
//23
//false
//1143
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

//result: all guesses were correct
//remarks: excellent

//Lecture: Equality operators: == vs ===
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if(numNeighbours === 1) console.log('Only 1 border!');
// else if(numNeighbours > 1) console.log('More than 1 border!');
// else console.log("No borders");

//Lecture: Logical Operators
const isIsland = false;
// if(language === 'English' && population < 50 && !isIsland) console.log(`You should live in ${country}`);
// else console.log(`${country} does not meet your criteria`); 