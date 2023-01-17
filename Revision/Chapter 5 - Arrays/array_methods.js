//Array methods in JavaScript


// toString() - it converts an array into a string which contains comma separated values. Eg:
let shubham = ['s', 'h', 'u', 'b', 'h', 'a', 'm']; //array with all chars of word shubham.
let shubhamString = shubham.toString();
console.log(shubhamString);
//Note:- arrays are mutable but this does not change the original array as it cannot change the datatype of array from array to string.
console.log(shubham);



//join() - join does the work of joining all character elements with a separator. join is a function and it takes the separator as an argument.
let shubhamJoin = shubham.join(":");
//if we does not supply any argument then it places comma(,) as a default separator.
console.log(shubhamJoin);



//pop() - it removes last element of the array
// console.log(shubham.pop());
shubham.pop(); // it returns the popped element.
console.log(shubham);
//Note:- string is mutable and it changes the original string.



//push() - it adds a new element at the end of an array
shubham.push("m"); // it returns the new array length
// console.log(shubham.push('m'))
console.log(shubham);
//Note:- this also mutates the original string.



// shift() - removes the first element and returns that element.
shubham.shift();
console.log(shubham);
//Note:- it mutates the original string



// unshift() - adds element to the beginning of an
shubham.unshift("s"); //it returns the new array length
console.log(shubham);


//Array concatenation in JavaScript

//concat() - used to join arrays to teh given array
let arr1 = [13454, 235, 36645];
let arr2 = [434, 24, 64];
let arr3 = [734, 84, 934];

let arr4 = arr1.concat(arr2, arr3);
//above line will concatenate array 2 and array 3 with array 1
console.log(arr1);
//Note:- this will not change the original array.

console.log(arr1.concat(arr2, arr3)); // it will return the new array it can be stored in a variable or directly used as it will not mutate the original string.


//we will continue tomorrow.
//Session end 16th January 2023 10:28 PM
//End Cause:- Day end.

//delete() - delete is not a method or function, it is a operator
console.log(arr4);
delete arr4[0]; //will delete item at 0th index but it will not affect array's length
//it will show <1 empty item> on place of deleted element
console.log(arr4);


//sort method - it helps to sort an array alphabetically.
arr4.sort();
console.log(arr4); 
//Note:- it sorts the array alphabetically
//So, numbers starting with one are placed first(no matter how big), numbers starting with two are places thereafter and so on.
//We can give a compare function to sort function and on basis of that function it will do sorting ascending or decending
let compare=(a, b)=>{
    return a - b;
}
arr4.sort(compare);//compare function acts as a base of sorting for sort function.
console.log(arr4); //original array is changed

arr4.reverse(); //makes an array reverse and changes the original array
console.log(arr4);



//splice functin - it is used to delete some elements of an array and replace them with new elements.
arr4.splice(0, 1, 1); //it means that start deleting elements form index [0] (first argument), delete 1 elements from there(second argument) and insert 1 there(it can be any number of elements as further arguments).
console.log(arr4);

//Note:- last argument is optional if we don't give any argument then it wll just remove the elements stated. It modifies the original array. It returns an array of deleted elements.


//slice() takes two arguments first is for from where to start slicing and second is till where to slice(element with index given as second argument is not included).
let arr5 = arr4.slice(3, 6);
console.log(arr5);
//it takes out that part of the array and returns items of sliced array.
//does not modify the original array.


//Sessin end 
//Reason : Family function
//17th January 1:19 PM 
//Commit code: "01"


