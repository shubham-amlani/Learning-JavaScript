//In JavaScript variable can be created using var, let and const.

//var is deprecated in JavaScript but still can be found in some of the old web application codes which are not still updated.

//let is used to make dynamic variables which means that after declaring and storing some data in variable we can change that data later and add some different data of same datatype or of different datatype.

//we will mostly use const while declaring variables, as name suggests it is constant and cannot be changed throughout the program once it is declared and data is stored in it.

//We can create a variable with let and keep it as it is without storing any data, but we have to declare the data at the time of creating variable itself in case we use const and then later we cannot change either the data or the datatype of the const variable as it is constant.

//Example of var.
var number = 1;
console.log(number);
//above line console.log() is used to log anything on the console of the script. It simply means to print something on console.

//Example of let.
let a = 55;
console.log(a);

//Example of const.
const num = 36;
console.log(num);

//Rules for creating variables.

//As we have grammer rules in languages like English, Gujarati, Hindi, Spanish etcetra, we also have some rules in programming and they are very strict unlike any other language. If we breach any of the rule we get an error and script won't run any further.

//1. letters, digits, underscores(_) & dollor($) sign is allowed.
//2. Must begin with a ($), (_), or a letter.
//3. JavaScript reserved words cannot be used.
//4. It is a case sensitive language. (shubham and Shubham are different).

//Datatypes are of two types in JavaScript:-
//(i) Primitive datatypes and
//(ii) Non-primitive datatypes.

//Primitive datatypes are of 7 types.
//(1) Null
//(2) Number
//(3) String
//(4) Symbol
//(5) Boolean
//(6) BigInt
//(7) Undefined

//Non-primitive datatype is only one and it is called Object in JavaScript.
//An object in JavaScirpt can be defined as follows:-
//   const item = {
//      name: "shubham",
//      marks: "93"
//   }
