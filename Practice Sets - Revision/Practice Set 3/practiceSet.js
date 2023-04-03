//quickQuiz
for(let i = 1;i<=100;i++){
    console.log(i);
}
//above code is simplest for of for loop, it displays numbers form 1-100

//quickQuiz
let obj = {
    name:"shubham",
    surname:"amlani",
    marks:"100"
}

let str = "this is a simple string";

for (key in obj){
    console.log(key); 
}
//for-in loop operates something on each key of any object

//quickQuiz
for(value of str){
    console.log(value);
}
//for-of loop operates something on each value of any object(here it means any valid javascript object such as string, array and not dataType object).

//Note:- space is treated as a separate character in JavaScript and it cannot be ignored while working with strings.


//Question 1
//a program to print marks of a student in an object using for loop
let markObj = {
    harry:98,
    rohan:70,
    aakash:7
}
for(let i=0;i<Object.keys(markObj).length;i++){
    console.log(Object.keys(markObj)[i] + " has " + markObj[Object.keys(markObj)[i]] + " marks ");
}

//Q2 - q1 using for in loop
for(key in markObj){
    console.log(key + " has " + markObj[key] + " marks ");
}
//exact problem which for in loop solves

//question 3 is done in html file

//Q4 
//function to find mean of 5 numbers
function meanFunc(a, b, c, d, e){
    return (a+b+c+d+e)/5;
}

let xyz = meanFunc(1, 2, 3, 4, 5);
console.log(xyz);