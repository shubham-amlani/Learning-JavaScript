//Q1 - what will this pring?
console.log("har\"".length);
//ans - 4

//Q2 - explore includes, startsWith and endsWith function of string.
let str="hello, this is shubham amlani"
console.log(str.includes("shubham")); //true if arg is in string       and vice versa
console.log(str.startsWith("hello"));//true if string startsWith arg        ""
console.log(str.endsWith("something"));//trur if string endsWith arg        ""

//Q3 solved in html file

//Q4 - extract amount out of this string
let str1 = "Please give Rs 1000";
console.log(str1.slice(15));

//Q4 - try to change 4th character of a given string
console.log(str1.replace("a", "b"));