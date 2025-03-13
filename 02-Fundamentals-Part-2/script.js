'use strict';  // STRICT MODE ACTIVATION ---- Should be first line of code


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 123;
// const if = 123;

*/




// FUNCTIONS

/*

function logger(){
    console.log(`I'm Jane Doe.`);
}

// calling/invoking/running the function
logger(25); //since function definition does not include parameters 25 passed as argument won't get used! instead of how in java it throws error!!!
logger('hello',23,132,'what'); //since function definition does not include parameters 25 passed as argument won't get used! instead of how in java it throws error!!!
logger();


function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    // console.log(apples+oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const mixedJuice = fruitProcessor(2,5);

console.log(mixedJuice);

console.log(fruitProcessor(1,6));

*/



/* 
// Function declaration vs expression


//function declaration


// const age1 = calcAge1(1999);
//function can be called before function declaration

function calcAge1(birthYear){
    return 2025 - birthYear;
}

const age1 = calcAge1(1999);

console.log(age1);


//function expression --- anonymous function

// const age2 = calcAge2(1999);
// Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1,age2);

*/



/* 

// Arrow Function
const calcAge3 = birthYear => 2025-birthYear;

const age3 = calcAge3(2000);
console.log(age3);


const yearsUntilRetirement = (birthYear,firstName) =>{
    const currentAge = 2025 - birthYear;
    const retirement = 65 - currentAge;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1999));
*/


//FNS CALLING OTHER FNS

/* 

const cutPieces = function(fruit){
    return fruit*4;
};

const fruitProcessor = function(apples,oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
};

console.log(fruitProcessor(2,3));
*/



// Introduction to Arrays

//first way to create array --- literal syntax
const friends = ['Alex','Jane','Joe'];
console.log(friends);


//second way to create array
const year = new Array(1990,1995,2000,2005,2010);
// console.log(years);


console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Ray";
console.log(friends);

const jonas = ['Jonas','Doe',2025-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const years = [1990,1965,2000];

// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);


// Basic Array Methods


const friends = ['Alex','Jane','Joe'];


//add elements
const newLength = friends.push('Hannah');
console.log(friends);

friends.unshift('John');
console.log(friends);


//remove elements
const poppedElement = friends.pop(); //last element
console.log(friends);
console.log(poppedElement);

friends.shift(); //first element
console.log(friends);

console.log(friends.indexOf('Alex'));
console.log(friends.indexOf('Mary')); //-1



//.includes uses strict equality to check if element is present in array
friends.push(23);
console.log(friends.includes('Alex')); //true
console.log(friends.includes('Mary')); //false
console.log(friends.includes('23')); //false -- type conversion not done 
console.log(friends.includes(23)); //true

