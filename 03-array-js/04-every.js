/*
Array Every Method
The every() method determines whether all elements of the array match the predicate.

As soon as every() finds an array element that doesn’t match the predicate, it immediately returns false and doesn’t iterate over the remaining elements.



Example:
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.every((value)=> { return (value > 0); });

*/
//output : true 
//because all the elements of the array are positive

myArr.every((value) => { return (value == 5); });
//output : false 
//because not all the elements of the array are equal to 5

myArr.every((value) => {
    console.log(value);
    return (value != 4);
});