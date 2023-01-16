//Practice question 1
let marks = {
    harry : 98,
    rohan : 70,
    shubham: 100,
    aakash: 7
};


//This is what it looks like when we use for loops...
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]]);
}


//This looks comparatively simpler and easier.
//Question 2
for (let x in marks){
    console.log("Marks of", x, "are", marks[x]);
}