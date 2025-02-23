/*

let js = 'amazing';

console.log(13 + 12 - 11 + 142);
console.log(13);
console.log("XYZ");

let firstName = "Cari";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

*/




// the value holds the datatype in JS,
// and not the variable ---> dynamic typing
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun); //Dynamic typing
// console.log(typeof 23);
// console.log(typeof 'Jane Doe');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); //Dynamic typing

let year;
console.log(year);  //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year);

console.log(typeof null); //object 
// this is a bug (typeof null) === never corrected due to legacy reasons.
