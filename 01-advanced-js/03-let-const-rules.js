/* 
Rules for using let and const

let and const also have some other interesting properties.

    Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
    Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
*/
let instructor = 'Jean Paul';
instructor = 'Damien';
console.log(instructor);

const student = 'Yeshna';
// student = 'Umar'; // This won't work
console.log(student);