'use strict';

const x = 23;
// if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(2006));
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temprature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is temp amplitude? Answer: difference betweek highest and lowest temp

// -How to compute max and min temperature?
// -What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //   console.log(max);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should not receive 2 arrays of temps

// 1) Understanding the problem
// -With 2 arrays, should we implement functionality twice? Answer: NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?
// - sub problem, Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //   console.log(max);
  return max - min;
};

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));

//Note: I've not separated the code of each lecture because it is not included in the language concepts, and will not be most probably referred in future :)
