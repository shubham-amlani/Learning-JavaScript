//.matches
let id1 = document.getElementById("id1");
console.log(id1.matches("#id1"));//it returns boolean value based on weather that element have the CSS selector which is supplied to matches() function as an argument, in the given example the div with id1 has the class (.container) and id (#id1) so if we .matches(selector) it will return true of false based on weather that element has that selector or not.

//.closest
let id2 = document.getElementById("id2");
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".container"));
//it returns an element which is its closest ancestor which has the specified selector, it can be that element itself also.

//.contains
console.log(id1.contains(sp1));//Does id1 contains sp1 in itself of not? It returns a boolean value.
console.log(id1.contains(id1));
//Will return true as it returns true if same element is supplied to it.
console.log(sp1.contains(id1));
//Will return false as sp1 does not contain id1, and logically it cannot contain it also as two elements can not have same id.