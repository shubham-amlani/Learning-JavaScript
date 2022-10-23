
// let pm1 = new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src = "https://cdn .jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";
//         script.onload = resolve("resolved");
//         script.onerror = reject(new Error("I am an error"));
//     });
    
// pm1.then((value)=>{
//     console.log("Script loaded successfully");
//     return value;
// }, (error)=>{
//     console.log("Script loading unsuccessful");
//     return error;
// })

//Chaining of promise-thens'.
let pm1 = new Promise((resolve, reject)=>{
    resolve(56);
})

pm1.then((value=>{
    console.log("I am fulfilled");
    return value;
}), (error)=>{
    console.log("I am error and I am caught");
    return error;
}).then((value=>{
    console.log("I am fulfilled again");
    return 2;
}), (error)=>{
    console.log("I am again an error");
    return 0;
})