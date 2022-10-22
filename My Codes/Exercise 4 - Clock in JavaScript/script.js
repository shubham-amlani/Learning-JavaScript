setInterval(function dispTime(){
    let time = document.getElementById("time");
    let dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    time.innerHTML = h+":"+m+":"+s;
    // console.log("Updated");
}, 1000);

//Learning:-When we create a function externally and supply it to setInterval(at least in this case, it is not updated every second until you directly supply it to setInterval function)