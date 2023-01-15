//Loops in JavaScript
//The for loop in JavaScript.
//Eg of for loop and quick quiz.
let a=1;
for(a;a<101;a++){
    console.log(a);
}
//for loop takes 3 expressions of which 1st is the variable for which the loop is to be executed. 2nd is condition that should be checked before entering the loop. 3rd it the increment or decreament or any other operation that should be performed on the variable so that loop dose not become endless
//Warning:- If a loop becomes endless, there could be many possiblities. Sometimes program terminates itself, sometimes the OS stops the program, and sometimes program does not stop and can hang the machine/system due to overuse of memory, and memory can't handle it.
//This is an example of never ending loop

// for(a;a>=1;a++){
//     console.log(a)
// }

//for-in loops:-they are used to loop through keys of an objects.
//for-in loops can be also used with arrays but we will discuss about them later.
let obj = {
//   Keys   values
//    V       V
    shubham: 98,
    shivika: 76,
    deep: 65,
    bablu: 75,
    veer: 48,
    krupal: 54
}

for (let variable in obj){
    // console.log(variable);
    console.log("Marks of", variable, "are", obj[variable]);
}

//This code means that for every key that changes after every iteration in the object, select that key and do the following thing written inside the code block. Here we just log them to the console.

//Here obj[varibale] means, give the value of 'obj' object for the key [variable] and here variable changes after every iteration.Object can also be any string or any array.

//for-of loops:- These loops are used to access the values of the objects instead of keys as we do in for-in loops, but here objects does not mean obj, it means any valid iterable object like array, string etcetra.
for (let variable of "Shubham") {
    console.log(variable);
}

//while loops in Javascript


// let whilevar = 1;
// while(true){
//     console.log(whilevar);
//     whilevar += 1;
// }


//the above while loop will never end as condition is always true and never ending while loops can crash the runtime.

//do while loops:- these loops are same as other loops and does the same work of automating the task but the difference is that it will be executed at least once.
//For eg:
let dowhilevar =  1;
do{
    console.log(dowhilevar);
    dowhilevar += 1;
}while(dowhilevar<=1000);

//this simply means that print the dowhilevar once and then check that weather it is less than or equal to 1000 and then again execute the code if condition is satisfied and do not execute if condition is not satisfied.

//End of loops.
//QWERTY.S