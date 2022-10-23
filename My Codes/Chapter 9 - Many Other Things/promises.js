let a = prompt("Enter a number: ");
a = Number.parseInt(a);
let p = new Promise((resolve, reject) => {
    if(a<=0){
        reject(new Error("I am an error"));
    }
    else{
        resolve(true);
    }
})

p.then(
    ()=>{console.log("I am fulfilled")},
    (error)=>{console.log("Error: "+ error)}
)