//Question - Explore includes(), starteWith() and endsWith() functions of string

//includes();
let sentence = "Shubham is a good boy";
console.log(sentence.includes("good"));
//includes returns a boolean. It returns true if the argument given to it is there in the string and vice versa.

//startsWith();
console.log(sentence.startsWith("Shubhamm"));
//as name suggests it check weather the string startsWith the supplied argument or not and it returns true or false as per condition.

//endsWith();
console.log(sentence.endsWith("boy"));
//it is same as startsWith but it checks at the end of the string.