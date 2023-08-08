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


//Lecture: strings and template literals
const firstName = 'Shubham';
const job = 'student';
const birthYear = 2005;
const year = 2023;
const shubham = "I'm "+ firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
//template literals allows us to write strings in a more normal way rather than adding numerous + ops and ''""
const shubhamNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
//we can use backticks which are located below esc button
//we can also use backticks for regular strings too
console.log(shubhamNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`)
