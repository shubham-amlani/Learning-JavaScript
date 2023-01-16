//String methods
//Length property - prints the length of the string
let str = "Shubham";
console.log(str.length);
//toUpperCase function - makes the whole string to uppercase
console.log(str.toUpperCase());
//toLowerCase function - makes the whole string to lowercase
console.log(str.toLowerCase());

//Slice property - slices the string
//It takes two arguments and starts from first argument and till the second argument(second argument is not included)
console.log(str.slice(2, 5)); //from index 2 to 4.
console.log(str.slice(3)); //from index 3 till end.

//Replace function - replaces the first argument with second argument in the string
let str2 = "  one two  ";
let str3 = str2.replace("one", "two"); //Will replace one with two and then store it in the variable str3
console.log(str3);

//Note:- it does not alter the original string but it can be stored in a new string...

//Concat function - concatenates two strings.
//String is to be given as an argument which is to be concated to the string on which the function is to be used.

let str4 = str2.concat(str3); // will concatenate str3 with str2.
console.log(str4);

//trim meathod - trim removes the white spaces in a string from beginning and end but does not remove the spaces in between.
console.log(str2.trim());



//Important notes about string in Javascript
// String are immutable in JavaScirpt and they cannot be changes or altered
// String are simple character arrays and single characters of string can be accessed like this
console.log(str[0]); //log the character with 0th index to the console.
console.log(str[1]); //log the character with 1st index to the console.
console.log(str[2]); //log the character with 2nd index to the console.
console.log(str[3]); //log the character with 3rd index to the console.
// and so on...


//End of Chapter 4.

