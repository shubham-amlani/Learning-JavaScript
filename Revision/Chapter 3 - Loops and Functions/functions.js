//Sometimes we want to execute a particular code many times, so we can store that login in function and access that function wherever we want, basically it does separation of logic.
//For eg: we have used logic to find average of two numbers a 100 times in our program then we need not to write the logic for finding average a 100 times we just need to write a function of it.
function avg(x, y){
    return (x+y)/2;
}
let a=5, b=5;
console.log(avg(a, b));
//therefore we can make use of avg function as many times as we want.
//we can give any name to functions as variables but they should be logical and define their use case or their functions. We could also give illogical names to it but it is not a good programmin practice as it may cause problems while reading your own code in future or whenever out fellow programmers read our code.
