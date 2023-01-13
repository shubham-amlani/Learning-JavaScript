//Sometimes in JavaScript or any other programming we want to execute a particular block of code only if some condition is fullfilled. 
//For Eg:
let a =5;
let b =10;
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("a is not greater than b")
}
//Here else statement is optional if we want to use only if statement then we can do so.

//We have one more conditional statement in JavaScript
//It is called if...elseif...else
//For eg:
let c= 34;
let d=34;
if(c>d){
    console.log("c is greater than d");
}
else if(c==d){
    console.log("c and d are equal");
}
else{
    console.log("c is not greater than d");
}

//Note:- we made use of comparision operators to check weather they both are equal or not, it they are equal then the middle else if evaluates to true and code runs. Usually we add more else ifs in the statement and such statement is called else if ladder.

//Ternary operator in JavaScript.
//Ternary operator is used to write shorthand conditional statements.
//Eg:
let e = 789;
let f = 234;
(e>f)?console.log("e is greater"):console.log("f is greater");

//We can make use of shorthand if else in condition we have only one expression, if we have more than one expression then we have to make use of conditional statements like if...else etcetra.

//End of Chapter - 2.