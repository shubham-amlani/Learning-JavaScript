let arr1=[1, 2, 3, 4];
let arr2=[5, 6, 7, 8];
let arr3=[2398, 23, 534, 23, 12, 34, 567, 6776];
console.log(typeof arr);//object
console.log(arr1.toString());
console.log(arr1.join("+"));
console.log(arr1.pop());//mutates
console.log(arr1);
console.log(arr1.push(5));//mutates
console.log(arr1);
console.log(arr1.shift());
console.log(arr1.unshift(1));
console.log(arr1);
delete arr1[3]; //one empty item on place of deleted element...
console.log(arr1);
console.log(arr1.concat(arr2));//does not mutate
console.log(arr3.sort());

