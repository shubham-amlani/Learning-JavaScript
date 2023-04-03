//Creating a const object and trying to make it hold a number later.

const constantNum = {
    name:"shubham"
}
// constantNum = 5;
//above line will show an error as const cannot be changed.

// Q4 - Trying to add new key value pairs
constantNum['friend'] = "harry" //This is how we add a new key-value pair
console.log(constantNum);
