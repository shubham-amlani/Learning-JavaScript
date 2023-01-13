//Arithematic operators in JavaScirpt
// Plus(+), minus(-), times(*), divide(/), exponentiation(**), modulous(%), increament(++) and decreament(--) arithematic operators exist in JavaScript.
//Increaments and decreaments are of two types pre-increament/decreament and post-increament/decreament.
//Pre means it first performs the arithematic operation and then does the respective work assigned to it Eg: log it to the console but first perform arithematic operation.
//Post means it first performs the work assigned to it and then performs the arithematic operation.Eg: in post increament/decreament it'll first log the number to console and then it'll perform the arithematic operation.


//Assignment operators
//if we ascend and equal sign(=) to arithematic operators excluding increament and decreament operators then they all are included in assignment operators. Equal itself is one of the assignment operator which simply assign any value to anything.
//If we use += operator on any number then it means
// x = x+y. Here x is something that is left side of assignment operator and y is something that is right side of assignment operator.
//Same goes for every assignment operator.

//Conditional operators
//Conditional operators are operators which are used to compare two objects in JavaScript. It returns type is boolean.
// == operator checks weather two objects have equal value or not.
// != operator checks weather two objects have unequal value of not(vice versa of ==).
// === operator checks weather two objects have equal value as well as they are of same datatype.
// !== operator checks weather two objects have unequal value or they have different datatype. It is not exactly vice-versa of === but we can say so.
// Some other comparision operators are >, <, >=, <= which are very basic.

//The is one more comparision operator called ternary operator(?), but for now keep it on hold we will study it in later chapters.

//Logical operators
//Logical operators operate on booleans. There are 3 logical operators.
//Logical and (&&)
//Logical or(||)
//Logical not(!)
//Logical and evaluates to true only if both the conditions are true else it will evaluate to false in any other condition.
//Logical or will evaluate to false only if both the conditions are false else it will always evaluate to true.
//Logical not will return opposite of what the actual condition is i.e if it is false it will return true and vice-verse.
let a=6;
let b=5;
console.log(a>5 && a!=b); //true
console.log(a<5 || a!=b); //true
console.log(!(a==b))      //true