'use strict';
function calcAge(birthYear) {
  // const now = 2037;
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge(){
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    
    if(birthYear>=1981 && birthYear<=1996){
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    else{
        const firstName = 'Ankit'; //JS will not perform a variable lookup, because it has the variable in same block.
        var millenial = false;
        //Creating new variable with same name as outer scope's variable

        //Reassigning outer scope's variable
        output = 'NEW OUTPUT!'
        
        const str = `and you're not a millenial, ${firstName}`;
        console.log(str);
        function add(a, b){
          return a+b;
        }

      }
      console.log(millenial);
      console.log(output);
      // add(4, 2);
  }
  printAge();
  return age;
}

// console.log(now);
const firstName = 'Shubham';
calcAge(2005);
// console.log(calcAge(2005));
// console.log(age);
// printAge();
