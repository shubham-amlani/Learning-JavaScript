'use strict';
/*
Given an array of forecasted manximum temp, the thermometer displays a string with these tempratures.

Example: [17, 21, 23] will print "...17 deg C in 1 days...21 deg C in 2 days ... 23 deg in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/

// const maxTemp = (temps) => {
//   let strings = [];
//   for (let i = 0; i < temps.length; i++) {
//     strings.push(`...${temps[i]} deg C in ${i + 1} days...`);
//   }
//   let finalString = strings[0];
//   for (let i = 1; i < strings.length; i++) {
//     finalString = finalString + strings[i];
//   }
//   return finalString;
// };

// const temps = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];
// console.log(maxTemp(temps));
// console.log(maxTemp(temps2));

//Status: Completed
//Remarks: Very good
