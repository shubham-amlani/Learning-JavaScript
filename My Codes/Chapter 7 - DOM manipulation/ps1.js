let fstElement = document.getElementById("firstList");
fstElement.style.color = "red";
let parent = document.getElementsByClassName("parent")[0];
parent.firstElementChild.style.color = "red";
Array.from(document.querySelectorAll("li").forEach((element)=>{
        element.style.background = "cyan";
    }
))