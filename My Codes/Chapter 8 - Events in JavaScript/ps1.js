let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.onclick = function btn1Click(){
    btn1.insertAdjacentHTML('beforebegin', '<p>Hello World !</p>');
}

btn2.onclick = function btn2Click(){
    alert("Hello World !");
}

btn3.onclick = function btn3Click(){
    confirm("This shows a confirm");
}