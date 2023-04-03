//rough
let age=11
if(age>0){
    console.log("you entered a valid age");
}
//if first condition is true it won't check anything else
else if(age>10 && age<15){
    console.log("but you are a kid");
}
else if(age>18){
    console.log("not a kid");
}
else{
    console.log("invalid age");
}

//question 1
//wether age of a person lies between 10 and 20
let age1 = 23;
if(age1>10 && age1<20){
    console.log("yes, age is between 10 and 20");
}
else{
    console.log("no, age is not between 10 and 20");
}

//question 2
//use of switch case statements
switch(age1){
    case 23:
        console.log("your age is 23");
    //can add many cases
    default:
        console.log("your age is not special");
}

//question 3
//wether a number is divisible by 2 and 3
let num = 7;
if((num%2==0)&&(num%3==0)){
    console.log("yes number is divisible by both");
}
else{
    console.log("no, the number is not divisible by both");
}

//question 4
//weather a number is divisible by 2 or 2
let num2 = 4;
if((num2%2==0)||(num2%3==0)){
    console.log("yes, the number is divisible by 2 or 3");
}
else{
    console.log("no, the number is neither divisible by 2, nor by 3");
}

//question5
//checking driving eligiblity
let age2 = 18;
if(age2<18){
    console.log("you cannot drive");
}
else{
    console.log("you can drive");
}

//end of chapter 2