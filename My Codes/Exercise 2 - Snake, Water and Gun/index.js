let user;
let comp;
let randNum;

do{
user = prompt("Enter your choice s, w or g");
randNum = Math.floor(Math.random()*100)+1;
if(randNum<=33){
    comp='s';
}
else if(randNum>33 && randNum<=66){
    comp='w';
}
else if(randNum>66 && randNum<=100){
    comp='g';
}

if(user==comp){
    alert("There is a tie\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='s' && comp=='w'){
    alert("You Win !!!\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='s' && comp=='g'){
    alert("You Lose !!!\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='w' && comp=='s'){
    alert("You Lose !!!\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='w' && comp=='g'){
    alert("You Win !!!\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='g' && comp=='s'){
    alert("You Win !!!\nYou chose " + user + " and computer chose " + comp);
}
else if(user=='g' && comp=='w'){
    alert("You Lose !!!\nYou chose " + user + " and computer chose " + comp);
}
playAgain = confirm("Do you want to play again?");
}while(playAgain)


/*
u - c
-----
s - w
s - g
w - s
w - g
g - s
g - w
*/