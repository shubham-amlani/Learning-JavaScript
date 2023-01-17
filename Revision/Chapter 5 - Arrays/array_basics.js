//arrays are a collection of data in JavaScript.
//we can store any valid data in arrays, even data of different datatypes in a same array, unlike statically typed languages like C language in which we can only store data of one type in one array we can store data of multiple typed in an array of JavaScript.

//An array could be created in JavaScript usign following format
let arr = [1, 2, 3, true, null, undefined, "string"];
//here we have stored multiple types of data like numbers, boolean, null, undefined, string etcetra. We can also store objects, BigInts, symbols etcetra.

//Accessing the elements of an array.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
//if we try to access elements of array which does not exist then it will return undefined.
console.log(arr[23]);//will be undefined because index does not exits.

//.length property - we can also make use of length property with arrays
console.log("Length of array is " + arr.length);

//Can we change the value of an array?
console.log(arr[4]);
arr[4] = false;
console.log(arr[4]);
//Answer is yes, arrays are mutable. It changes only after we instruct it to change and it does not change throughout the program.

//But strings are immutable and they cannot be changed.
//In javascript array is a valid object and not a primitive or non-primitive datatype, so if we do typeof(array) then it will return object
console.log(typeof(arr)); //will print object

