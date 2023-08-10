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
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);