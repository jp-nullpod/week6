let myArray = [2, 3, 4, 5, 6];

myArray.forEach((number, index) => {
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
});

myArray.forEach((number, i, arr) => {
    arr[i] = arr[i] * 2;
});

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]


myArray.forEach(function (number, i, arr) {
    arr[i] = number * 2;
});

console.log(myArray)