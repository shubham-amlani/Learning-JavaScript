let a = 32;
a = "Shubham"; //This will overwrite number in a
console.log(a);

let rank = {
    1: "Ankit",
    2: "Shubham",
    3: "Student 3",
    4: "Student 4",
    5: "Student 5"
}

// console.log(rank.3); //This is illegal in case of digits
console.log(rank[2]); //This is legal in case of digits