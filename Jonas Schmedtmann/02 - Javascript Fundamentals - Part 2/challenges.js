'use strict'
//Challenge 1
// const calcAverage = (score1, score2, score3)=> (score1+score2+score3)/3;

// // const scoreDolphins1 = 44;
// // const scoreDolphins2 = 23;
// // const scoreDolphins3 = 71;
// // const scoreKoalas1 = 65;
// // const scoreKoalas2 = 54;
// // const scoreKoalas3 = 49;

// const scoreDolphins1 = 85;
// const scoreDolphins2 = 54;
// const scoreDolphins3 = 41;
// const scoreKoalas1 = 23;
// const scoreKoalas2 = 34;
// const scoreKoalas3 = 27;

// const avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);

// const avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if(avgDolphins>=(avgKoalas*2)){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if(avgKoalas>=(avgDolphins*2)){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else{
//         console.log(`No team wins`);
//     }
//     return;
// }

// console.log(checkWinner(avgDolphins, avgKoalas));
//Status: Completed
//Remarks: Excellent


//Challenge 2
// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// }
// // console.log(calcTip(100));
// const bills = [125, 555, 44];
// const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip(bills[2])];
// console.log(bills);
// console.log(tips);
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(total);

//Status: Completed
//Remarks: Don't forget parenthesis while using functions


//Challenge 3
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         return this.mass/(this.height ** 2);
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         return this.mass/(this.height ** 2);
//     }
// }

// console.log(`${mark.firstName}'s BMI(${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})`);
//Status: Completed
//remarks: excellent


//Challenge 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// }


// for (let i=0;i<bills.length;i++){
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i]+bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// //Bonus
// const calcAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i  <arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }

// console.log(calcAverage(totals));

//Status: Completed
//Remarks: excellent

//Congrats on completing JavaScript Fundamentals - Part 2