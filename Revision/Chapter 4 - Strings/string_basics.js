//String is a collection of characters.
//Strings are used to create and manipulate text in JavaScript.
//It could be created like this
let str = "Shubham"; // a valid string
//or like this also
let str2 = 'Shubham'; // also a valid string
//there is also another way to create string but we will talk about it later.
console.log(str); //logs the string to console.
//length property
console.log(str.length); //logs the length of the string.

//Template literals
//strings can be also created usign backticks which are located below esc key.
let boy1 = "Karan";
let boy2 = "Bablu";
console.log(`${boy1} is friend of ${boy2}`);
//we can directly target the variables in a string by making use of ${variable}. This is called string interpolletion.
//Note:- This works only with backticks(``).

//Escape sequence characters.

// let veg="Ladies Fi"nger";  Invalid string 

// Now if we try to print this type of string then JavaScript engine will get confused that where the exactly string ends so we make use of escape sequence characters in which we just add a \ before characters and those both the characters are treated as a one character.

let veg = "Ladies Fi\"nger";
console.log(veg);

//Some more escape sequence characters are
//   /n = new line character
//   /t = inserts a tab
//   /r = carriage return(adds the cursor to the beginning of the line)