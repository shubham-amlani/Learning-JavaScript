// //Lecture: Values and Variables

// let js='amazing';
// // if(js === 'amazing') alert("Javascript is FUN!")
// console.log( 40+8+23-10);
// console.log('Shubham');
// console.log(23);

// // let firstName = 'Shubham';//can be changed to anything like for eg: 'Ankit'
// let first_name; //separator method
// // let firstName //camel case method
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName); //we can use firstName instead of string 'Shubham', because that is now stored in firstName;

// // let 3years =3; //cannot start from a number
// let $years = 3;
// //only numbers, letters, _ and $ (dollar) sign;
// let name = 'shubham';//this is legal but is a reserved keyword so ideally should not be used;
// //variable names ideally start with a small case letter;
// let myFirstJob = 'Coder';
// let myCurrentJob = 'Student';
// //they should me meaning ful, like it can be seen above;
// console.log(myFirstJob);

// //Lecture: Data Types
// //Javascript have 2 types of data, Object and Primitive, an data is primitive only when it is not an object
// //Primitive datatypes are of 7 types
// //(first 3 are most important and widely used while coding)
// //1.Numbers
// //2.String
// //3.Boolean (true/false)
// //4.Undefined (varible without an value)
// //5.Null (variable with empty value)
// //6.Symbol (ES2015): Value that is unique and cannot be changed [Not much useful]
// //7.BigInt(ES2020):Larger integers that the Number type can hold

// //JS has dynamic typing, we do not have to manually define datatype like for eg in C language;

// //Comments: Probably you know what it is already so no need for notes;
// /*
// This is
// a multiline
// code
// */

// true;
// // console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof "shubham");

// //dynamic typing
// javascriptIsFun = 'YES'; //we can change datatype of variables at runtime
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let emptyVariable;
// console.log(emptyVariable);
// console.log(typeof emptyVariable);

// emptyVariable = 2005;
// console.log(emptyVariable);
// console.log(typeof emptyVariable);

// //typeof operator returns object in case of a null, and that's a bug which was never fixed due to legacy reasons, so that should be kept in mind while working with JavaScript

// //Lecture: let, const and var
// //only datatypes of variables declared with let can be changed at runtime
// let age = 17;
// age = 18;

// const birthYear = 2005;
// // birthYear = 2004
// //therefore age can change but birthYear cannot
// // const job; //it is compulsory to initialize a value when declaring it or else it will return an error

// // var variable;//Deprecated and should not be used;
// // lastName = 'Amlani';
// // console.log(lastName);

// //Lecture:Basic Operators
// //Arithemaric operators;
// const ageShubham = 2037 - 2005;
// const ageDarshil = 2037 - 2025;
// console.log(ageShubham, ageDarshil);
// console.log(ageShubham*2, ageShubham/10, 2 ** 3);
// //2**3 means 2 to the power of 3 = 2*2*2;

// //we can use + operator to concatenate strings or join strings
// const firstName='Shubham';
// const lastName = 'Amlani'
// console.log(firstName+' '+lastName);

// let x = 10 + 5;
// console.log(x);
// x+=10//x=x+10; //works with every arithmatic operator
// console.log(x);
// x++; //x=x+1;
// console.log(x);
// x--; //x=x-1;
// console.log(x);

// //comparison operators
// console.log(ageShubham>ageDarshil);
// console.log(ageDarshil >= 18);
// const now = 2037;
// const isAMarjor = ageDarshil >= 18;

// console.log(now - 2005 > now - 2018);

// //Lecture: Operator Precedence

// //It can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// // Lecture: strings and template literals
// const firstName = 'Shubham';
// const job = 'student';
// const birthYear = 2005;
// const year = 2023;
// const shubham = "I'm "+ firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
// //template literals allows us to write strings in a more normal way rather than adding numerous + ops and ''""
// const shubhamNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
// //we can use backticks which are located below esc button
// //we can also use backticks for regular strings too
// console.log(shubhamNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`)
//no need for \n\ we can directly use backticks `` and write multiple linex directly

//Lecture: Taking Decisions: If/Else statements
// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log('Darshil can start driving license.');
// } else{
//     const yearsLeft = 18 - age;
//     console.log('Darshil cannot start driving license');
//     console.log(`There are still ${yearsLeft} years left :)`)
// }
// //else block is optional, this full structure is called if-else control structure

// const birthYear = ``;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else{
//     century = 21;
// }
// console.log(century);
//we assume this to work only when person is born in 20 / 21st century

//Lecture: Type conversion and coercion

//type conversion
// const inputYear = '2005';
// console.log(Number(inputYear), inputYear);
// //original value is not converted
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number('Shubham'));//will return NaN (Not a Number)
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 17 + ' years old');
// console.log('I am ' + '17' + ' years old');

// console.log('23' - '10' - 3);
// console.log('17' / '2');

// let n = '1' + 1;
// console.log(typeof n);
// n = n - 1;
// console.log(typeof n);
// console.log(n);

//Lecture: Truthy and falsy values
//5 falsy values: 0, '', undefined, null, NaN
//they're not false by defalut but will be false if converted to boolean
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Shubham'));
// console.log(Boolean({})); //object
// console.log(Boolean(NaN));
// console.log(Boolean('')) //null

// const money = 100;
// if(money){
//     console.log("Don't spend it all ;)");
// } else{
//     console.log("You should get a job!");
// }
// //use case
// let height = 0;
// if(height){
//     console.log("Yay! Height is defined");
// } else{
//     console.log("Height is UNDEFINED");
// }

// Lecture:Equality Operators: == vs ===
// const age = '18';
// if(age === 18) console.log("You just vecame an adult :D (strict)");

// if(age == 18) console.log('You just became an adult :D (loose)')

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if(favourite === 456){
//     console.log('Cool! 456 is an amazing number!');
// }
// else if(favourite == 23){
//     console.log("Cool! 23 is also a cool number");
// }
// else{
//     console.log("number is not 456 or 23");
// }

// if(favourite !== 23) console.log('Why not 23?');

//Lecture: Boolean Logic
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;
// // if(shouldDrive){
// //     console.log("Is able to drive!");
// // } else{
// //     console.log('Someone else should drive...')
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Is able to drive');
// } else{
//     console.log('Someone else should drive')
// }

//Lecture: The switch Statement

// const day = 'monday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record Videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// //same logic using if/else statements
// if(day==='monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }
// else if(day==='tuesday'){
//     console.log('Prepare theory videos');
// }
// else if(day==='wednesday' || day==='thursday'){
//     console.log('Write code examples');
// }
// else if(day==='friday'){
//     console.log('Record Videos');
// }
// else if(day==='saturday' || day==='sunday'){
//     console.log('Enjoy the weekend');
// }
// else{
//     console.log('Not a valid day!');
// }

//Lecture: Statements and expressions
//theory lecture

//Lecture: The conditional(ternary) operator

// const age = 17;
// age >= 18 ? console.log('I like to drink wine'):console.log('I like to drink water');

// const drink = age >=18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// } else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`);

//Congratulations on completing Javascript Fundamentals - Part 1
