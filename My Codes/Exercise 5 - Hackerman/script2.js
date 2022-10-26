let HarryCode = ["Initializing hacking tool...", "Finding username...", "Username found: xxxxxxxx", "Hacking user...", "Hacked", "Connecting to account...", "Access Granted", "User Hack was successful"];
// console.log(HarryCode.length)
let l1 = document.getElementById("line1");
l1.innerHTML = "root@kali:- python instahack.py [ENTER]";
//The code below is efficient and working but is not efficient...

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//             let p = document.createElement("p");
//             p.innerHTML = HarryCode[0];
//             document.body.appendChild(p);
//             resolve(1);
//         }, 2000);
// })
// p1.then(()=>{
//         new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let p = document.createElement("p");
//             p.innerHTML = HarryCode[1];
//             document.body.appendChild(p);
//             resolve(1);
//         }, 2000);
//     }).then(()=>{
//             new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 let p = document.createElement("p");
//                 p.innerHTML = HarryCode[2];
//                 document.body.appendChild(p);
//                 resolve(1);
//             }, 2000);
//         }).then(()=>{
//             new Promise((resolve, reject)=>{
//                 setTimeout(()=>{
//                     let p = document.createElement("p");
//                     p.innerHTML = HarryCode[3];
//                     document.body.appendChild(p);
//                     resolve(1);
//                 }, 2000)
//             })
//         })
//     })
// })

//Another scenario
// async function harry(){
//     let delhiWeather = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("27 Deg");
//         }, 2000);
//     })

//     let bangloreWeather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("21 Deg");
//         }, 5000);
//     })

//     console.time("run");
//     let delhiW = await delhiWeather;
//     let bangloreW = await bangloreWeather;
//     console.timeEnd("run");
// }

// harry();


const f1=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[0];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f2=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[1];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f3=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[2];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f4=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[3];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f5=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[4];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f6=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[5];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

const f7=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[6];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
} 

const f8=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = HarryCode[7];
            document.body.appendChild(p);
            resolve(0);
        }, 2000);
    })
}

let runFunc=async()=>{
    let a1 = await f1();
    console.log(a1)
    let a3 = await f2();
    let a2 = await f3();
    let a5 = await f4();
    let a4 = await f5();
    let a8 = await f6();
    let a7 = await f7();
    let a6 = await f8();
} 
runFunc();

