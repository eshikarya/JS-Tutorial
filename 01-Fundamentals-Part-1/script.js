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


/*


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

*/


/*
// let, const and var

let age = 30;
age = 32;

const birthYear = 1991;
// birthYear = 2001; ---> throwa error

var job = 'programmer'; // legacy way - to be avoided
job = 'teacher';

city = 'Pune'; // not advised 
console.log(city);

*/

/*

//Basic Operators

const currentYear = 2040;
const ageJane = currentYear - 2019;
const ageSara = currentYear - 1991;
console.log(ageJane, ageSara);
console.log(ageJane / 10, ageJane * 2, 2 ** 3);

const firstName = 'Jane';
const lastName = 'Doe';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

*/


/*

// TEMPLATE LITERALS
const firstName = 'Jane';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jane = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jane);


//template literal --- ES6 FEATURE
const janeNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(janeNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);


*/


/*
const age = 15;
const isLegalAgeDriver = age>=18;

if(isLegalAgeDriver){
    console.log(`Legal Driver!`);
}
else{
    console.log(`${18-age} years left before you can drive legally!`)
}
*/

//type conversion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18); 

console.log(Number('Jane'));
console.log(typeof NaN);

console.log(String(23), 23, typeof String(23));


//type coercion
console.log(23+'23');
console.log('23'-'10'-'3'); //converted to #s  ---> 10
console.log('23'+'10'+'3'); //converted to string ---> 23103
console.log('23'*'2');
console.log('23'/'2');

let n = '1'+1;
n = n -1;
console.log(n);


console.log(2+3+5+'4');
console.log('10'-'4'-'3'-2+'5');