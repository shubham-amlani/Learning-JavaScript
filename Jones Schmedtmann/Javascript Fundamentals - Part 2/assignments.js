//Lecture: Functions
'use strict'
const country = 'India';
const population = 1400;
const capitalCity = 'Delhi';

// function describeCountry(country, population, capitalCity){
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     return description;
// }

// const descriptionIndia = describeCountry(country, population, capitalCity);
// const descriptionChina = describeCountry('China', 1411, 'Beijing');
// const descriptionCanada = describeCountry('Canada', 40, 'Ottawa');
// console.log(descriptionIndia);
// console.log(descriptionChina);
// console.log(descriptionCanada);


//Lecture: Function declaration vs expressions
function percentageOfWorld1(population){
    return (population/7900)*100;
}

// const percentageOfWorld2 = function (population){
//     return (population/7900)*100;
// } 
// const percentageIndia = percentageOfWorld1(population);
// const percentageChina = percentageOfWorld1(1441);
// const percentageCanada = percentageOfWorld1(40);
// const percentageIndia2 = percentageOfWorld2(population);
// const percentageChina2 = percentageOfWorld2(1441);
// const percentageCanada2 = percentageOfWorld2(40);
// console.log(percentageIndia);
// console.log(percentageChina);
// console.log(percentageCanada);
// console.log(percentageIndia2);
// console.log(percentageChina2);
// console.log(percentageCanada2);

//Lecture: Arrow Functions

// const percentageOfWorld3 = (population) => (population/7900)*100;

// const percentageIndia3 = percentageOfWorld3(population);
// const percentageChina3 = percentageOfWorld3(1441);
// const percentageCanada3 = percentageOfWorld3(40);

// console.log(percentageIndia3);
// console.log(percentageChina3);
// console.log(percentageCanada3);


//Lecture: Functions Calling Other Functions


// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld3(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world`;
// }

// console.log(describePopulation(country, population));


//Lecture: Introduction to Arrays
// const populationIndia = 1400;
// const populationChina = 1441;
// const populationCanada = 40;
// const populationNepal = 30;

// const populations = [populationIndia, populationChina, populationCanada, populationNepal];

// const percentages = [percentageOfWorld1(populationIndia), percentageOfWorld1(populationChina), percentageOfWorld1(populationCanada), percentageOfWorld1(populationNepal)];

// console.log(populations.length == 4)

//Lecture: Basic Array Operations
// const neighbours = ['Pakistan', 'China', 'Nepal', 'Myanmar', 'Sri Lanka'];
// neighbours.push('Utopia');
// neighbours.pop('Utopia');

// if(!neighbours.includes('Germany')){
//     console.log('Probably not a central European country :D');
// }

// neighbours[1] = `People's Republic of China`;
// console.log(neighbours);

//Lecture: Introduction to Objects


// const myCountry = {
//     country: 'India',
//     capital: 'Delhi',
//     language: 'Hindi',
//     population: 1400,
//     neighbours: ['Pakistan', 'China', 'Myanmar', 'Nepal', 'Sri Lanka']
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry['population'] - 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

//Imp note:- don't forget to use '' while using bracket notation, its compulsory because bracket notation takes in a string.


//Lecture: Object Methods

// const myCountry = {
//     country: 'India',
//     capital: 'Delhi',
//     language: 'Hindi',
//     population: 1400,
//     neighbours: ['Pakistan', 'China', 'Myanmar', 'Nepal', 'Sri Lanka'],
//     describe: function() {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//     },
//     checkIsIsland: function() {
//         this.isIsland = this.neighbours.length == 0 ? true : false;
//         return this.isIsland
//     }
// };

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());

