const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(sq => sq * sq);
let num = [19, 10, 11, 22, 33];

num = num.map(x => (2 * x * 3.142).toFixed(2));

console.log(squares);
console.log(num);

