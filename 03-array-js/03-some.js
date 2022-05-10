
/*
Array Some Method
The some() method determines whether at least one element of the array matches the given predicate.

It only returns false if none of the array elements match the predicate
Note : some() stops iterating over the array as soon as it finds an element that matches the predicate.

In that case, it immediately returns true without inspecting the remaining elements.


Example:
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { return (value%2 == 0); });
*/
//output : true 
//because there is at least one even number in the array

myArr.some((value) => { return (value < 0); });
//output: false 
//because there is no negative number in the array


function isEven(x) {
    console.log(x)
    return (x % 2 == 0);
}

myArr.some((value) => isEven(value));
//output : 1 2 true
//stops iterating as soon as an even number is found 