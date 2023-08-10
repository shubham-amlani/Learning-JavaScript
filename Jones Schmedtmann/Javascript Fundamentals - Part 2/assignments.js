//Lecture: Functions
'use strict'
const country = 'India';
const population = 1400;
const capitalCity = 'Delhi';

function describeCountry(country, population, capitalCity){
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return description;
}

const descriptionIndia = describeCountry(country, population, capitalCity);
const descriptionChina = describeCountry('China', 1411, 'Beijing');
const descriptionCanada = describeCountry('Canada', 40, 'Ottawa');
console.log(descriptionIndia);
console.log(descriptionChina);
console.log(descriptionCanada);