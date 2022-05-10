const getFee = (isMember) => {
    return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
console.log(getFee(false));

let age = 10;
const result = (age < 18) ? "Kid" : "Adult";


// if (age < 18) {
//     result =  "Kid";
// }
// else {
//     result =  "Adult";
// }
