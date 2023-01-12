let a = 32;
a = "Shubham"; //This will overwrite number in a
console.log(a);

let rank = {
    1: "Shubham",
    2: "Diya",
    3: "Ankit ",
    4: "Student 4",
    5: "Student 5"
} //This is an object in JavaScript.

// console.log(rank.3); //This is illegal in case of digits
console.log(rank[1]); //This is legal in case of digits