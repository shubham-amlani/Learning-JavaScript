let randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
//Above line generates a random number between 1 to 100
let inpNum; 
let attempts=0;
do{
inpNum = prompt("Guess the number: ");
if(inpNum>randNum){
    console.log("Please enter a smaller number");
}
else if(inpNum<randNum){
    console.log("Please enter a larger number");
}
attempts++;
if(inpNum==randNum){
    console.log("Congrats the number is " + randNum);
    console.log("You took " + attempts + " attempts");
}
}while(attempts>=100 || inpNum!=randNum)
